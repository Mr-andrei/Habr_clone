import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType } from 'entities/Article';
import {
    ArticleSortField,
    ArticleView,
} from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    page: number;
    limit: number;
    hasMore: boolean;
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    cardType: ArticleType;

    _inited: boolean;
}
