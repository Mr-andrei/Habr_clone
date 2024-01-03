import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getError = (state:StateSchema) => state.articlesPage?.error;
export const getView = (state:StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPage = (state:StateSchema) => state.articlesPage?.page || 1;
export const getArticlesLimit = (state:StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesHasMore = (state:StateSchema) => state.articlesPage?.hasMore;
