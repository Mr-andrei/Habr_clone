import { updateProfileData } from 'entities/Profile';
import {

    ProfileSchema,
} from '../types/Profile';
import { profileActions, profileReducer } from '../slice/profileSlice';

describe('profileSlice.test', () => {
    test('setReadOnly', () => {
        const state:ProfileSchema = {
            isLoading: false,
            readonly: false,
        };
        expect(profileReducer(state, profileActions.setReadOnly(true))).toEqual({
            isLoading: false,
            readonly: true,
        });
    });
    test('updateProfile', () => {
        const state:ProfileSchema = {
            isLoading: false,
            readonly: false,
            form: { lastname: '' },
        };
        expect(profileReducer(state, profileActions.updateProfile({
            lastname: 'Ivanov',
        }))).toEqual({
            isLoading: false,
            readonly: false,
            form: { lastname: 'Ivanov' },
        });
    });
    test('cancelEdit', () => {
        const state:ProfileSchema = {
            isLoading: false,
            readonly: false,
            form: { lastname: 'Ivanov', first: 'Ivan' },
            data: { lastname: 'Tuzov', first: 'Ivan' },
        };
        expect(profileReducer(state, profileActions.cancelEdit(true))).toEqual({
            isLoading: false,
            readonly: true,
            form: { lastname: 'Tuzov', first: 'Ivan' },
            data: { lastname: 'Tuzov', first: 'Ivan' },
        });
    });
    test('test update profile service pending', () => {
        const state:ProfileSchema = {
            isLoading: false,
            readonly: false,
            validateError: [],
        };
        expect(profileReducer(state, updateProfileData.pending)).toEqual({
            isLoading: true,
            readonly: false,
            validateError: undefined,
        });
    });
});
