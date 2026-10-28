import { describe, it, expect } from "vitest";
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the correct greeting text', () => {
    render(<Hero />);
    expect(screen.getByText("Hi, I'm Arjun.")).toBeInTheDocument();
  });

  it('contains the correct GitHub link', () => {
    render(<Hero />);
    const githubLink = screen.getByRole('link', { name: 'GitHub profile (opens in a new tab)' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ArjunRamphal');
  });

  it('contains the correct LinkedIn link', () => {
    render(<Hero />);
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn profile (opens in a new tab)' });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/arjunramphal');
  });

  it('treats all images as purely decorative', () => {
    const { container } = render(<Hero />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
    images.forEach(img => {
      expect(img).toHaveAttribute('alt', '');
      expect(img).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
