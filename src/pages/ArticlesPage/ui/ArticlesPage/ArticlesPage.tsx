import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    useInitialEffect,
} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import {
    ArticleInfiniteList,
} from '../../ui/ArticleInfiniteList/ArticleInfiniteList';
import {
    ArticlesPageFilters,
} from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import {
    fetchNextArticlesList,
} from '../../model/services/fetchNextArticlesList/fetchNextArticlesList';
import {
    initArticlesList,
} from '../../model/services/initArticlesList/initArticlesList';
import { articlesPageReducer } from '../../model/slices/artcilcePageSlice';
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
                <ArticleInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
