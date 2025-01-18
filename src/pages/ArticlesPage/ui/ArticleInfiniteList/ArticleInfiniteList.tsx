import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { getArticles } from '../../model/slices/artcilcePageSlice';
import {
    getError,
    getIsLoading,
    getView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticleInfiniteList.module.scss';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const view = useSelector(getView);

    if (error) {
        return (
            <Text text={error} theme={TextTheme.ERROR} />
        );
    }

    return (
        <div className={classNames(cls.listContainer, {}, [className])}>
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </div>
    );
});
