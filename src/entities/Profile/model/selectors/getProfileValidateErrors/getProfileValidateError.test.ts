import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/Profile';

describe('getProfileValidateError.test', () => {
    test('should return array of ValidateError', () => {
        const validateError = [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema))
            .toEqual(validateError);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema))
            .toEqual(undefined);
    });
});
