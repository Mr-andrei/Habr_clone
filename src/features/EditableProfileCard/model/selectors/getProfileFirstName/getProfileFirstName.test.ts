import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileData.test', () => {
    test('should return firstName', () => {
        const data = {
            first: 'Ivan',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileFirstName(state as StateSchema))
            .toEqual('Ivan');
    });
    test('should return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstName(state as StateSchema))
            .toEqual('');
    });
});
