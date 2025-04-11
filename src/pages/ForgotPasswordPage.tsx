
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import ForgotPasswordForm from '@/components/Organism/ForgotPasswordForm';
import Card from '@/components/Molecule/Card';

const ForgotPasswordPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-hivewire-yellow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full p-8 bg-white">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-hivewire-yellow bg-opacity-20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-hivewire-dark" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zM19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
              </svg>
            </div>
            <h2 className="text-center text-xl font-bold text-hivewire-dark">Forgot Password</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <ForgotPasswordForm />
            <div className="mt-4 text-center text-sm">
              <Link to="/login" className="font-medium text-hivewire-dark hover:underline">
                Back to login
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ForgotPasswordPage;
