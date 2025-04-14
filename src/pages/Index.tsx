
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // In a real application, you would check if the user is authenticated here
  // For now, we'll just redirect to the landing page
  return <Navigate to="/" replace />;
};

export default Index;
