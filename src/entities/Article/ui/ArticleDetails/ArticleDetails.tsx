import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
// import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
// import { Icon } from 'shared/ui/Icon/Icon';
// import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    fetchArticleById,
} from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;
    if (isLoading) {
        content = (
            <div>
                <Skeleton width={200} height={200} border="50%" className={cls.avatar} />
                <Skeleton width={300} height={32} className={cls.title} />
                <Skeleton width={600} height={24} className={cls.skeleton} />
                <Skeleton width="100%" height={200} className={cls.skeleton} />
                <Skeleton width="100%" height={200} className={cls.skeleton} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Error')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <div>ArticleDetails</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
