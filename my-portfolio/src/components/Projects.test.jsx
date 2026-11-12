import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from './Projects';
import { projects } from '../data/projects';

vi.mock('../data/projects', () => ({
  projects: [
    { title: 'COMP717', startDate: '2026-09', endDate: '2026-11', tech: [], githubLink: '#comp717', image: 'dashboard.jpg' },
    { title: 'Earlier project', startDate: '2025-02', endDate: '2025-06', tech: [], githubLink: '#earlier', image: 'earlier.jpg' },
    { title: 'Longer project', startDate: '2025-02', endDate: '2025-11', tech: [], githubLink: '#longer', image: 'longer.jpg' },
    { title: 'Ongoing app', startDate: null, endDate: null, ongoing: true, sortDate: '2026-01-12', tech: [], githubLink: '#ongoing', image: 'ongoing.jpg' },
  ],
}));

const cardTitles = () => within(screen.getByRole('list', { name: 'Projects list' }))
  .getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);

describe('Project sorting', () => {
  it('defaults to chronological order and puts the newest project last', () => {
    render(<Projects />);
    expect(screen.getByRole('combobox', { name: 'Sort projects' })).toHaveValue('oldest');
    expect(cardTitles()).toEqual(['Earlier project', 'Longer project', 'Ongoing app', 'COMP717']);
  });

  it('switches both ways without changing the source project array', async () => {
    const user = userEvent.setup();
    const originalTitles = projects.map((project) => project.title);
    render(<Projects />);
    const sort = screen.getByRole('combobox', { name: 'Sort projects' });

    await user.selectOptions(sort, 'newest');
    expect(cardTitles()).toEqual(['COMP717', 'Ongoing app', 'Longer project', 'Earlier project']);
    expect(screen.getByRole('status')).toHaveTextContent('Projects sorted newest to oldest.');

    await user.selectOptions(sort, 'oldest');
    expect(cardTitles()).toEqual(['Earlier project', 'Longer project', 'Ongoing app', 'COMP717']);
    expect(projects.map((project) => project.title)).toEqual(originalTitles);
  });
});
