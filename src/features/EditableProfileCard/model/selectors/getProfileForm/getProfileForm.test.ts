import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
            username: 'admin',
            first: 'Ivan',
            lastname: 'Ivanov',
            country: Country.Belarus,
            currency: Currency.EUR,
            age: 22,

        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema))
            .toEqual(form);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema))
            .toEqual(undefined);
    });
});
