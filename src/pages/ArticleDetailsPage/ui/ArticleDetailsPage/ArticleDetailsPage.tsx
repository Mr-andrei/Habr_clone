import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import { ArticleRecommendation } from '@/features/articleRecommendation';
import {
    ArticleDetailsComments,
} from '../ArticleDetailsComments/ArticleDetailsComments';
import {
    ArticlesDetailsPageHeader,
} from '../../ui/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { articlesDetailsPageReducer } from '../../model/slices';
import ArticleRating
    from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import {
    ArticleRatingAsync,
} from '@/features/articleRating/ui/ArticleRating/ArticleRating.async';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducersList:ReducersList = {
    articlesDetailsPage: articlesDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page>
                {t('Articles was not found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticlesDetailsPageHeader />
                <ArticleRatingAsync articleId={id} />
                <ArticleDetails id={id} />
                <ArticleRecommendation />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
