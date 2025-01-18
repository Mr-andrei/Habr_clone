import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import {
    StoreDecorator,
} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/NavBar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: '342',
    },
})];

export const OutlineDark = Template.bind({});
OutlineDark.args = {};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlineDark.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: '342',
    },
})];
