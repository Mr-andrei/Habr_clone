import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    useInitialEffect,
} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { useSearchParams } from 'react-router-dom';
import {
    ArticlesPageFilters,
} from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import {
    fetchNextArticlesList,
} from '../../model/services/fetchNextArticlesList/fetchNextArticlesList';
import {
    initArticlesList,
} from '../../model/services/initArticlesList/initArticlesList';
import {
    articlesPageReducer,
    getArticles,
} from '../../model/slices/artcilcePageSlice';
import {
    getError,
    getIsLoading,
    getView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducerList:ReducersList = {
    articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const view = useSelector(getView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesList());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesList(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                    className={cls.listContainer}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
