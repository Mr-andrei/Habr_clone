import {
    ValidateProfileError,
} from '../../consts';
import { Profile } from '../../../../../entities/Profile/model/types/Profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.INCORRECT_INITIAL_DATA];
    }
    const {
        first, lastname, age, country,
    } = profile;

    const errors:ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
