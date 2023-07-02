import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders nav logo', () => {
  render(<NavBar />);
  const navLogo = screen.getByAltText('Logo');
  expect(navLogo).toHaveAttribute('src', 'logo.svg');
});

test('renders navbar links', () => {
  render(<NavBar />);
  const navLinks = screen.getByText(/about/i, /skills/i, /projects/i);
  expect(navLinks).toBeInTheDocument();
});

test('renders social icons', () => {
  render(<NavBar />);
  const socialNavIcons = screen.getAllByAltText('');
  for (let i = 0; i < socialNavIcons.length; i++) {
    expect(socialNavIcons[i]).toBeVisible();
  }
});

test('renders CTA nav button', () => {
  render(<NavBar />);
  const navCtaButton = screen.getByText(/resume/i);
  expect(navCtaButton).toBeInTheDocument();
});
