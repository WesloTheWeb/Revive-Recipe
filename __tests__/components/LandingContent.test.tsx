import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingContent from '../../src/components/LandingContent/LandingContent';

// Mock Next.js components
jest.mock('next/link', () => {
    return ({ children }: { children?: React.ReactNode }) => children;
});

jest.mock('next/image', () => {
    return () => <img />;
});

describe('<LandingContent />', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<LandingContent />);
        expect(getByText('Get cooking')).toBeInTheDocument();
    });

    it('shows login modal when login button is clicked', () => {
        const { getByText, queryByText } = render(<LandingContent />);
        const loginButton = getByText(/login/i); 

        // Before clicking, the modal title shouldn't be in the document
        expect(queryByText('Log in')).not.toBeInTheDocument();

        fireEvent.click(loginButton);

        // After clicking, the modal title should be in the document
        expect(queryByText('Log in')).toBeInTheDocument();
    });
});
