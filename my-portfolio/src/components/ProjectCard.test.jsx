import { describe, it, expect } from "vitest";
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    title: 'Test Project',
    description: 'This is a test project description.',
    image: 'test-image.jpg',
    tech: ['React', 'Tailwind', 'Vitest'],
    githubLink: 'https://github.com/test/test-project',
  };

  it('renders the project title and description', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description.')).toBeInTheDocument();
  });

  it('renders all tech stack tags', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
    expect(screen.getByText('Vitest')).toBeInTheDocument();
  });

  it('renders the project image with correct src and alt attributes', () => {
    render(<ProjectCard project={mockProject} />);

    const image = document.querySelector('img[src="test-image.jpg"]');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
    expect(image).toHaveAttribute('alt', '');
    expect(image).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders the GitHub link with correct href and aria-label', () => {
    render(<ProjectCard project={mockProject} />);

    const link = screen.getByRole('link', { name: 'View code for Test Project (opens in a new tab)' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/test/test-project');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
