import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollReviveSchema } from '../types/ScrollReviveSchema';

const initialState: ScrollReviveSchema = {
    scroll: {},
};

export const ScrollReviveSlice = createSlice({
    name: 'scrollRevive',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollReviveActions } = ScrollReviveSlice;
export const { reducer: scrollReviveReducer } = ScrollReviveSlice;
