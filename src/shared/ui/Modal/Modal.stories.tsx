import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalDefault = Template.bind({});
ModalDefault.args = {
    isOpen: true,
    children: '     Lorem ipsum dolor sit amet, consectetur adipisicing\n'
        + 'elit. Expedita facilis iure laboriosam magnam nisi nobis\n'
        + 'porro, saepe temporibus velit. Dicta eveniet illo iusto\n'
        + 'minima nemo nihil quidem. Blanditiis commodi, ratione?',
};
