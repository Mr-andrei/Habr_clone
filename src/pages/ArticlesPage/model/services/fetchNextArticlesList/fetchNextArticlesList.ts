import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesHasMore,
    getArticlesPage,
    getIsLoading,
} from '../../selectors/articlesPageSelectors';
import {
    articlesPageActions,
} from '../../slices/artcilcePageSlice';
import {
    fetchArticlesList,
} from '../../services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesList = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlesList',
        async (_, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;
            const hasMore = getArticlesHasMore(getState());
            const page = getArticlesPage(getState());
            const isLoading = getIsLoading(getState());

            if (hasMore && !isLoading) {
                const nexPage = page + 1;
                dispatch(articlesPageActions.setPage(nexPage));
                dispatch(fetchArticlesList({
                    page: nexPage,
                }));
            }
        },
    );
