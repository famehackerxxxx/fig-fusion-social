
import React from 'react';
import Header from '../components/Organism/Header';
import Footer from '../components/Organism/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  hideNav = false,
  hideFooter = false 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNav && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
