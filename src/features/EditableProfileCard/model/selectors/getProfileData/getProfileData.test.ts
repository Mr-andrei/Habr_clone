import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            first: 'Ivan',
            lastname: 'Ivanov',
            country: Country.Belarus,
            currency: Currency.EUR,
            age: 22,

        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema))
            .toEqual(data);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema))
            .toEqual(undefined);
    });
});
