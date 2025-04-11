
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import RegisterForm from '@/components/Organism/RegisterForm';
import Card from '@/components/Molecule/Card';

const RegisterPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-hivewire-yellow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full p-8 bg-white">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-hivewire-yellow bg-opacity-20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-hivewire-dark" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-center text-xl font-bold text-hivewire-dark">Create an account</h2>
            <RegisterForm />
            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login" className="font-medium text-hivewire-dark hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
