import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test button with text', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Theme', () => {
        render(<Button className={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass(ThemeButton.CLEAR);
        screen.debug();
    });
});
