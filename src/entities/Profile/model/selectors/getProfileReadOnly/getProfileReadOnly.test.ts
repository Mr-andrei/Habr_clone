import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from '../getProfileReadOnly/getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadOnly(state as StateSchema))
            .toEqual(false);
    });
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema))
            .toEqual(true);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema))
            .toEqual(undefined);
    });
});
