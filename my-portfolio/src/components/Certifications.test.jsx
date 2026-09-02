import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Certifications from './Certifications';

// Mock the image imports
vi.mock('../images/isc2-cc.png', () => ({ default: 'mock-isc2-image.png' }));
vi.mock('../images/az-900.png', () => ({ default: 'mock-az900-image.png' }));

describe('Certifications Component', () => {
  it('renders the heading', () => {
    render(<Certifications />);
    const heading = screen.getByRole('heading', { name: /certifications/i, level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('renders ISC2 certification details correctly', () => {
    render(<Certifications />);

    // Check title
    expect(screen.getByText('ISC2 Certified in Cybersecurity (CC)')).toBeInTheDocument();

    // Check issuer
    expect(screen.getByText('Issued by ISC2')).toBeInTheDocument();

    // Check description
    expect(screen.getByText('Validates foundational knowledge of cybersecurity principles, access controls, network security, and security operations.')).toBeInTheDocument();

    // Check image
    const image = screen.getByAltText('ISC2 Certified in Cybersecurity (CC)');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'mock-isc2-image.png');

    // Check link
    const link = screen.getByRole('link', { name: /View details for ISC2 Certified in Cybersecurity \(CC\) \(opens in a new tab\)/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.credly.com/badges/56fbf132-f640-4076-9590-49a42ded89ce/public_url');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Azure certification details correctly', () => {
    render(<Certifications />);

    // Check title
    expect(screen.getByText('Microsoft Certified: Azure Fundamentals (AZ-900)')).toBeInTheDocument();

    // Check issuer
    expect(screen.getByText('Issued by Microsoft')).toBeInTheDocument();

    // Check description
    expect(screen.getByText('Demonstrates foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance.')).toBeInTheDocument();

    // Check image
    const image = screen.getByAltText('Microsoft Certified: Azure Fundamentals (AZ-900)');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'mock-az900-image.png');

    // Check link
    const link = screen.getByRole('link', { name: /View details for Microsoft Certified: Azure Fundamentals \(AZ-900\) \(opens in a new tab\)/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://learn.microsoft.com/api/credentials/share/en-us/ArjunRamphal-9610/98EF909F74A30238?sharingId=CA5C0B1FFA1B90');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the correct number of certifications', () => {
    render(<Certifications />);
    const links = screen.getAllByText('View Details →');
    expect(links).toHaveLength(2);
  });
});
