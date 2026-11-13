import React from 'react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from './Projects';
import { projects } from '../data/projects';

vi.mock('../data/projects', () => ({
  projects: [
    { title: 'COMP717', startDate: '2026-09', endDate: '2026-11', tech: [], githubLink: '#comp717', image: 'dashboard.jpg', details: { context: 'IoT project', role: 'Team contributor', contribution: 'Collaborative garden prototype.', problem: 'Measure soil moisture.', features: ['Live ADC readings'], outcome: 'Measured watering guidance.' } },
    { title: 'Earlier project', startDate: '2025-02', endDate: '2025-06', tech: [], githubLink: '#earlier', image: 'earlier.jpg' },
    { title: 'Longer project', startDate: '2025-02', endDate: '2025-11', tech: [], githubLink: '#longer', image: 'longer.jpg' },
    { title: 'Notely', startDate: null, endDate: null, ongoing: true, sortDate: '2026-01-12', tech: [], githubLink: '#notely', image: 'notely.jpg' },
    { title: 'Bookly', startDate: null, endDate: null, ongoing: true, sortDate: '2026-01-15', tech: [], githubLink: '#bookly', image: 'bookly.jpg' },
    { title: 'Smart Home Appliance Identification', startDate: '2026-03', endDate: '2026-10', tech: [], githubLink: '#research', image: 'research.jpg' },
  ],
}));

const cardTitles = () => within(screen.getByRole('list', { name: 'Projects list' }))
  .getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);

// jsdom does not implement the browser's modal lifecycle.
const originalShowModal = Object.getOwnPropertyDescriptor(HTMLDialogElement.prototype, 'showModal');
const originalClose = Object.getOwnPropertyDescriptor(HTMLDialogElement.prototype, 'close');
beforeAll(() => {
  Object.defineProperty(HTMLDialogElement.prototype, 'showModal', { configurable: true, value() { this.setAttribute('open', ''); } });
  Object.defineProperty(HTMLDialogElement.prototype, 'close', { configurable: true, value() { this.removeAttribute('open'); this.dispatchEvent(new Event('close')); } });
});
afterAll(() => {
  if (originalShowModal) Object.defineProperty(HTMLDialogElement.prototype, 'showModal', originalShowModal);
  else delete HTMLDialogElement.prototype.showModal;
  if (originalClose) Object.defineProperty(HTMLDialogElement.prototype, 'close', originalClose);
  else delete HTMLDialogElement.prototype.close;
});

describe('Project sorting', () => {
  it('defaults to chronological order and puts the newest project last', () => {
    render(<Projects />);
    expect(screen.getByRole('combobox', { name: 'Sort projects' })).toHaveValue('oldest');
    expect(cardTitles()).toEqual(['Earlier project', 'Longer project', 'Notely', 'Bookly', 'Smart Home Appliance Identification', 'COMP717']);
  });

  it('switches both ways without changing the source project array', async () => {
    const user = userEvent.setup();
    const originalTitles = projects.map((project) => project.title);
    render(<Projects />);
    const sort = screen.getByRole('combobox', { name: 'Sort projects' });

    await user.selectOptions(sort, 'newest');
    expect(cardTitles()).toEqual(['COMP717', 'Smart Home Appliance Identification', 'Bookly', 'Notely', 'Longer project', 'Earlier project']);
    expect(screen.getByRole('status')).toHaveTextContent('Projects sorted newest to oldest.');

    await user.selectOptions(sort, 'oldest');
    expect(cardTitles()).toEqual(['Earlier project', 'Longer project', 'Notely', 'Bookly', 'Smart Home Appliance Identification', 'COMP717']);
    expect(projects.map((project) => project.title)).toEqual(originalTitles);
  });

  it('opens the correct project after sorting and clears it when closed', async () => {
    const user = userEvent.setup();
    render(<Projects />);
    await user.selectOptions(screen.getByRole('combobox', { name: 'Sort projects' }), 'newest');
    await user.click(screen.getByRole('button', { name: 'View project details for COMP717' }));
    const dialog = screen.getByRole('dialog', { name: 'COMP717' });
    expect(within(dialog).getByText('Collaborative garden prototype.')).toBeInTheDocument();
    expect(within(dialog).getByText('Live ADC readings')).toBeInTheDocument();
    expect(within(dialog).getByText('Measured watering guidance.')).toBeInTheDocument();
    await user.click(within(dialog).getByRole('button', { name: 'Close project details' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'View project details for Earlier project' }));
    expect(screen.getByRole('dialog', { name: 'Earlier project' })).toBeInTheDocument();
  });
});
