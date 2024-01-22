import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import { loginReducer } from 'features/AuthByUserName/model/slice/LoginSlice';

import {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsReducer,
} from 'entities/Article/model/slice/articleDetailsSlice';
import {
    profileReducer,
} from 'features/EditableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
