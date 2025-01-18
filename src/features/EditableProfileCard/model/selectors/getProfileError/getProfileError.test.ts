import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return Error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Error',
            },
        };
        expect(getProfileError(state as StateSchema))
            .toEqual('Error');
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema))
            .toEqual(undefined);
    });
});
