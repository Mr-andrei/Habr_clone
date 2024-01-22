import { rtkApi } from 'shared/api/rtkApi';

const recommendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesRecommendations: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useArticlesRecommendations = recommendationApi.useGetArticlesRecommendationsQuery;
