import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/Profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, {
        extra,
        rejectWithValue,
    }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');
            console.log(response);
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Вы ввели не верные данные');
        }
    },
);
