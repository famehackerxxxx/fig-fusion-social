
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Atoms/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-hivewire-blue py-16 px-4">
      <div className="container mx-auto text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-hivewire-dark max-w-3xl mx-auto">
          Empower & Grow<br />
          Support & Engage<br />
          Inspire & Connect
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-hivewire-dark">
          Join the Hive. Thrive. Transform with HiveWire Tribe.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register">
            <Button variant="yellow" size="lg">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg">Sign In</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
