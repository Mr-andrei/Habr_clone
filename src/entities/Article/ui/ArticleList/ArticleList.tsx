import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts';
import {
    ArticleListItemSkeleton,
} from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            >
                <Text title={t('Arrticles weren`t found')} size={TextSize.L} />
            </div>
        );
    }

    return (

        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    key={item.id}
                    className={cls.card}
                    target={target}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
