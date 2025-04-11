
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import EmailVerificationForm from '@/components/Organism/EmailVerificationForm';
import Card from '@/components/Molecule/Card';

const EmailVerificationPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-hivewire-yellow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full p-8 bg-white">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-hivewire-yellow bg-opacity-20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-hivewire-dark" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-center text-xl font-bold text-hivewire-dark">Verify Your Email Address</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              We've sent a code to your email. Please enter it below to verify your account.
            </p>
            <EmailVerificationForm />
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default EmailVerificationPage;
