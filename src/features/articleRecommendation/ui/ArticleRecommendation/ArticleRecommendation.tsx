import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { VStack } from 'shared/ui/Stack';
import {
    useArticlesRecommendations,
} from '../../api/articlesRecommendationsApi';
import cls from './ArticleRrecommendation.module.scss';

interface ArticleRecommendationProps {
    className?: string;
}

export const ArticleRecommendation = memo((props: ArticleRecommendationProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const {
        isLoading,
        data: recommendations,
    } = useArticlesRecommendations(4);

    if (isLoading || !recommendations) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames(cls.container, {}, [className])}>
            <Text size={TextSize.L} title={t('Recommendations')} />
            <ArticleList
                articles={recommendations}
                isLoading={isLoading}
                target="_blank"
                virtualized={false}
            />
        </VStack>
    );
});
