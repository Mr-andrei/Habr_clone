import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/artcilcePageSlice';
import {
    fetchArticlesList,
} from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesList = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/initArticlesList',
        async (_, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;

            const inited = getArticlesInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initialState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
