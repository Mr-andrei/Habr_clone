import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => (
    state.articlesDetailsPage?.recommendationArticles?.isLoading
);
export const getArticleRecommendationsError = (state: StateSchema) => (
    state.articlesDetailsPage?.recommendationArticles?.error
);
