import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => (
    state.articlesDetailsPage?.articleDetailsComments?.isLoading
);
export const getArticleCommentsError = (state: StateSchema) => (
    state.articlesDetailsPage?.articleDetailsComments?.error
);
