import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => {
    const [value, setValue] = useState<string>('value2');
    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <ListBox {...args} onChange={onChange} value={value} />
    );
};

export const Normal = Template.bind({});
Normal.args = {
    label: 'name',
    items: [
        {
            value: 'value',
            content: <div>Label</div>,
        },
        {
            value: 'value2',
            content: <div>Label2</div>,
        },
        {
            value: 'value3',
            content: <div>Label3</div>,
            disabled: true,
        },
    ],
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
    label: 'name',
    items: [
        {
            value: 'value',
            content: <div>Label</div>,
        },
        {
            value: 'value2',
            content: <div>Label2</div>,
        },
        {
            value: 'value3',
            content: <div>Label3</div>,
            disabled: true,
        },
    ],
    defaultValue: 'value3',
};
export const ListWithDisable = Template.bind({});
ListWithDisable.args = {
    label: 'name',
    items: [
        {
            value: 'value',
            content: <div>Label</div>,
        },
        {
            value: 'value2',
            content: <div>Label2</div>,
        },
        {
            value: 'value3',
            content: <div>Label3</div>,
            disabled: true,
        },
    ],
    defaultValue: 'value3',
    readonly: true,
};
