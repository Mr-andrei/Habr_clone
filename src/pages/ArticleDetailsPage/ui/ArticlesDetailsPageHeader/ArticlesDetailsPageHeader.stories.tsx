import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';

export default {
    title: 'shared/ArticlesDetailsPageHeader',
    component: ArticlesDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPageHeader>;

const Template: ComponentStory<typeof ArticlesDetailsPageHeader> = (args) => <ArticlesDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
