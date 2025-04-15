
import React from 'react';
import Card from '../Molecule/Card';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-hivewire-yellow relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-hivewire-dark">
          Tools and Opportunities for Growth and Connection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-hivewire-dark">Personal Empowerment</h3>
            <p className="text-gray-700">
              Access resources, courses, and mentorship opportunities to develop your skills and advance your career path.
            </p>
          </Card>
          
          <Card className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-hivewire-dark">Influence Building</h3>
            <p className="text-gray-700">
              Share your expertise, connect with like-minded professionals, and build your personal brand within your industry.
            </p>
          </Card>
          
          <Card className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-hivewire-dark">Collaborative Engagement</h3>
            <p className="text-gray-700">
              Find partners for projects, join community initiatives, and create positive impact through collective action.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
