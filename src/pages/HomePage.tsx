
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Button from '../components/Atoms/Button';
import Card from '../components/Molecule/Card';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-hivewire-blue to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-hivewire-dark mb-6">
                Connect, Collaborate, and Grow with HiveWire
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Join our professional community where meaningful connections lead to exceptional growth opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="yellow" size="lg">Join Now</Button>
                <Button variant="blue" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img 
                src="/placeholder.svg" 
                alt="Professional networking" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Why HiveWire?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine the best of professional networking with community support to help you achieve your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card color="blue">
              <div className="text-center">
                <div className="bg-hivewire-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community-Driven</h3>
                <p className="text-gray-600">
                  Connect with like-minded professionals who support and inspire each other's growth journeys.
                </p>
              </div>
            </Card>

            <Card color="yellow">
              <div className="text-center">
                <div className="bg-hivewire-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Access exclusive resources, events, and opportunities designed to accelerate your professional development.
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="bg-hivewire-darkblue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Meaningful Connections</h3>
                <p className="text-gray-600">
                  Build relationships that matter with professionals who share your values and vision for the future.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="About HiveWire" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="section-heading">About HiveWire</h2>
              <p className="text-gray-600 mb-6">
                HiveWire is more than just a networking platform—we're a community dedicated to fostering professional growth, resilience, and meaningful connections.
              </p>
              <p className="text-gray-600 mb-8">
                Founded by industry experts with a passion for community building, we've created a space where professionals can connect, learn, and grow together.
              </p>
              <Link to="/about">
                <Button variant="yellow">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="section-heading">Meet Our Founders</h2>
              <p className="text-gray-600 mb-6">
                Our founders bring decades of combined experience in building communities, fostering professional development, and creating spaces where people can thrive.
              </p>
              <p className="text-gray-600 mb-8">
                Their vision for HiveWire emerged from a shared belief that professional networking should be more meaningful, supportive, and growth-oriented.
              </p>
              <Link to="/founders">
                <Button variant="yellow">Meet the Founders</Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="HiveWire Founders" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hivewire-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the HiveWire Community?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Connect with professionals, access exclusive resources, and take your career to the next level.
          </p>
          <Button variant="yellow" size="lg">
            Join HiveWire Today
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
