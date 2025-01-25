import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { getArticleDetailsData } from '@/entities/Article';
import {
    getCanEditArticle,
} from '../../model/selectors/article';
import cls from './ArticlesDetailsPageHeader.module.scss';
import { RoutePath } from '@/shared/const/router';

interface ArticlesDetailsPageHeaderProps {
    className?: string;
}

export const ArticlesDetailsPageHeader = memo(({ className }: ArticlesDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_edit}/${article?.id}/edit`);
    }, [article, navigate]);

    return (
        <div
            className={classNames(cls.ArticlesDetailsPageHeader, {}, [className])}
        >
            <Button onClick={onBackToList}>{t('Back')}</Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                    className={cls.editBtn}
                >
                    {t('Change')}
                </Button>
            )}
        </div>
    );
});
