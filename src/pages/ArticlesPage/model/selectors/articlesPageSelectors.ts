import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getError = (state:StateSchema) => state.articlesPage?.error;
export const getView = (state:StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
