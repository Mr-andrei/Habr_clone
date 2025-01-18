import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesCardType,
    getArticlesLimit,
    getArticlesOrder,
    getArticlesPage,
    getArticlesSearch,
    getArticlesSort,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[],
    FetchArticlesListProps,
    ThunkConfig<string>>(
        'articlesPage/fetchArticlesList',
        async (args, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState,
            } = thunkApi;
            const limit = getArticlesLimit(getState());
            const sort = getArticlesSort(getState());
            const order = getArticlesOrder(getState());
            const search = getArticlesSearch(getState());
            const page = getArticlesPage(getState());
            const cardType = getArticlesCardType(getState());

            try {
                addQueryParams({
                    sort, order, search, cardType,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: cardType === ArticleType.ALL ? undefined : cardType,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
