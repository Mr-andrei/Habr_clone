import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('get profile data', async () => {
        const data = {
            username: 'admin',
            first: 'Ivan',
            lastname: 'Ivanov',
            country: Country.Belarus,
            currency: Currency.EUR,
            age: 22,
        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('fulfilled');
        expect(result.payload)
            .toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus)
            .toBe('rejected');
    });
});
