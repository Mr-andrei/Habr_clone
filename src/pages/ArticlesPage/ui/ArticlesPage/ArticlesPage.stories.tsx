import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
    StoreDecorator,
} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            first: 'Ivan',
            lastname: 'Ivanov',
            country: Country.Belarus,
            currency: Currency.EUR,
            age: 22,
        },
    },
})];
