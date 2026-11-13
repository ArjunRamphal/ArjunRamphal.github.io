import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('opens the mobile menu and closes it after selecting a section', async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    const toggle = screen.getByRole('button', { name: 'Open navigation menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const menu = screen.getByRole('navigation', { name: 'Mobile navigation' });
    const contact = within(menu).getByRole('link', { name: 'Contact' });
    expect(contact).toHaveAttribute('href', '#contact');
    await user.click(contact);
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
