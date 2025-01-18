import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

export const getIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getError = (state:StateSchema) => state.articlesPage?.error;
export const getView = (state:StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPage = (state:StateSchema) => state.articlesPage?.page || 1;
export const getArticlesLimit = (state:StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesHasMore = (state:StateSchema) => state.articlesPage?.hasMore;
export const getArticlesInited = (state:StateSchema) => state.articlesPage?._inited;
export const getArticlesSort = (state:StateSchema) => state.articlesPage?.sort || ArticleSortField.CREATED;
export const getArticlesOrder = (state:StateSchema) => state.articlesPage?.order || 'asc';
export const getArticlesSearch = (state:StateSchema) => state.articlesPage?.search || '';
export const getArticlesCardType = (state:StateSchema) => state.articlesPage?.cardType || ArticleType.ALL;
