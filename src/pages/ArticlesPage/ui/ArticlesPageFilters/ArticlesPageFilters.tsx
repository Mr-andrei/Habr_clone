import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ArticleSortField,
    ArticleSortSelector, ArticleType,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';

import { SortOrder } from 'shared/types';
import {
    fetchArticlesList,
} from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import {
    ArticleTypeTabs,
} from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import {
    getArticlesCardType,
    getArticlesOrder, getArticlesSearch,
    getArticlesSort,
    getView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/artcilcePageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const view = useSelector(getView);
    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const cardType = useSelector(getArticlesCardType);
    const dispatch = useAppDispatch();

    const { t } = useTranslation();
    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    const fetDebounceData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeCardType = useCallback((cardType: ArticleType) => {
        dispatch(articlesPageActions.setCardType(cardType));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        fetDebounceData();
    }, [dispatch, fetDebounceData]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Search')} value={search} onChange={onChangeSearch} />
            </Card>
            <ArticleTypeTabs value={cardType} onChangeType={onChangeCardType} className={cls.tabs} />
        </div>
    );
});
