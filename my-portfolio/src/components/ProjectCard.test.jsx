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

  it('shows start and end months with machine-readable dates', () => {
    render(<ProjectCard project={{ ...mockProject, startDate: '2025-02', endDate: '2025-11' }} />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('End')).toBeInTheDocument();
    expect(screen.getByText('Feb 2025')).toHaveAttribute('datetime', '2025-02');
    expect(screen.getByText('Nov 2025')).toHaveAttribute('datetime', '2025-11');
  });

  it('marks a project as ongoing when it has a start and no end date', () => {
    render(<ProjectCard project={{ ...mockProject, startDate: '2026-01', endDate: null }} />);
    expect(screen.getByText('Jan 2026')).toBeInTheDocument();
    expect(screen.getByText('Present')).toBeInTheDocument();
  });

  it('shows Present without presenting a sorting date as a confirmed start', () => {
    render(<ProjectCard project={{ ...mockProject, startDate: null, endDate: null, ongoing: true, sortDate: '2026-01-12' }} />);
    expect(screen.getByText('Present')).toBeInTheDocument();
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
    expect(screen.queryByText('Jan 2026')).not.toBeInTheDocument();
  });

  it('shows a known year without inventing months or an ongoing status', () => {
    render(<ProjectCard project={{ ...mockProject, year: '2026', sortDate: '2026' }} />);
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('2026')).toHaveAttribute('datetime', '2026');
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
    expect(screen.queryByText('End')).not.toBeInTheDocument();
    expect(screen.queryByText('Present')).not.toBeInTheDocument();
  });
});
