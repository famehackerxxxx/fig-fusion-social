
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Atoms/Button';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-hivewire-blue relative">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-hivewire-dark">
          Let's Grow, Thrive, and Build Resilience—Together!
        </h2>
        <Link to="/register">
          <Button variant="yellow" size="lg">Join Now</Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
