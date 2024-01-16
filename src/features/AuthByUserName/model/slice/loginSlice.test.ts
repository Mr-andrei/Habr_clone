import { LoginSchema } from '../types/loginSchema';
import {
    loginActions,
    loginReducer,
} from '../../model/slice/LoginSlice';

describe('loginSliceTest', () => {
    test('test set password', () => {
        const state: LoginSchema = {
            isLoading: false,
            username: '',
            password: '',
        };

        expect(loginReducer(state, loginActions.setPassword('123')))
            .toEqual({
                password: '123',
                isLoading: false,
                username: '',
            });
    });
    test('test set username', () => {
        const state: LoginSchema = {
            isLoading: false,
            username: '',
            password: '',
        };

        expect(loginReducer(state, loginActions.setUserName('admin')))
            .toEqual({
                isLoading: false,
                username: 'admin',
                password: '',
            });
    });
});
