import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders the Projects section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Projects', level: 2 })).toBeInTheDocument();
  });

  it('renders the footer string', () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Arjun Ramphal. Built with React & Tailwind.`)).toBeInTheDocument();
  });
});
