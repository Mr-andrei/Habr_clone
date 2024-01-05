import { combineReducers } from '@reduxjs/toolkit';
import { ArticlesDetailsPageSchema } from 'pages/ArticleDetailsPage';
import {
    articleDetailsCommentsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../../model/slices/articleDetailsRecommendationsSlice';

export const articlesDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    recommendationArticles: articleDetailsRecommendationsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
});
