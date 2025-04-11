
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import ResetPasswordForm from '@/components/Organism/ResetPasswordForm';
import Card from '@/components/Molecule/Card';

const ResetPasswordPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-hivewire-yellow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full p-8 bg-white">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-hivewire-yellow bg-opacity-20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-hivewire-dark" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-center text-xl font-bold text-hivewire-dark">Reset Your Password</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Create a new password for your account
            </p>
            <ResetPasswordForm />
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ResetPasswordPage;
