import { combineReducers } from '@reduxjs/toolkit';
import { ArticlesDetailsPageSchema } from '../types';
import {
    articleDetailsCommentsReducer,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducer,
} from '../../model/slices/articleDetailsRecommendationsSlice';

export const articlesDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    recommendationArticles: articleDetailsRecommendationsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
});
