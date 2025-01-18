import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Profile } from '@/entities/Profile';

import {
    componentRender,
} from '@/shared/lib/tests/componentRender/componentRender';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

import {
    profileReducer,
} from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile:Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 4,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'admin123',
};
const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1' },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('EditableProfileCard', () => {
    test('Change readonly mode', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfileHeader.Change'));
        expect(screen.getByTestId('ProfileHeader.Cancel')).toBeInTheDocument();
    });
    test('Clear inputs', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfileHeader.Change'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Name'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.Name'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.Name')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('ProfileHeader.Cancel'));

        expect(screen.getByTestId('ProfileCard.Name')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Get error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfileHeader.Change'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Name'));
        await userEvent.click(screen.getByTestId('ProfileHeader.Save'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
});
