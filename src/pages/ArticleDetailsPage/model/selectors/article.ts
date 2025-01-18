import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';

export const getCanEditArticle = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (userData, article) => {
        if (!article || !userData) {
            return false;
        }
        return article.user.id === userData.id;
    },
);
