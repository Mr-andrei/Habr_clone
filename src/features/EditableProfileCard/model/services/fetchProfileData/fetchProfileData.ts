import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../../../../entities/Profile/model/types/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, {
        extra,
        rejectWithValue,
    }) => {
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Вы ввели не верные данные');
        }
    },
);
