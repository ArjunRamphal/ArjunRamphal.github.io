import { describe, it, expect } from "vitest";
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from './Skills';

describe('Skills Component', () => {
  it('renders without crashing', () => {
    render(<Skills />);
  });

  it('displays the correct main title', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /Technical Skills/i })).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /Languages & Scripting/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Security & Networking/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Tools & Infrastructure/i })).toBeInTheDocument();
  });

  it('renders individual skills correctly', () => {
    render(<Skills />);
    // Check some random skills from each category
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Kali Linux')).toBeInTheDocument();
    expect(screen.getByText('Cryptography')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Git / GitHub')).toBeInTheDocument();
  });
});
