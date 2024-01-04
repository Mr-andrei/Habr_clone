import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { getArticlesInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/artcilcePageSlice';
import {
    fetchArticlesList,
} from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesList = createAsyncThunk<void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articlesPage/initArticlesList',
        async (searchParams, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;

            const inited = getArticlesInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromUrl = searchParams.get('search');
                const cardTypeFromUrl = searchParams.get('cardType') as ArticleType;

                if (orderFromUrl) {
                    dispatch(articlesPageActions.setOder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromUrl));
                }
                if (cardTypeFromUrl) {
                    dispatch(articlesPageActions.setCardType(cardTypeFromUrl));
                }

                dispatch(articlesPageActions.initialState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
