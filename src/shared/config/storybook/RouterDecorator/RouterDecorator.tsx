import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story() as unknown as ReactNode}
    </BrowserRouter>
);
