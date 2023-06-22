import {render, screen} from '@testing-library/react';
import {App} from './app';

test('should render app', () => {
    render(<App />);

    const elem = screen.getByText(/Current Number of Styles Rules/i);

    expect(elem).toBeInTheDocument();
});
