
import React from 'react';
import Button from '../Atoms/Button';

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-hivewire-dark">
          Empowering Growth. Building Connection.<br />Creating Positive Impact.
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-4 text-hivewire-dark">Our Community</h3>
          <p className="text-gray-700 mb-8">
            A network of industry professionals, innovators, and change-makers coming together to support one another through 
            collaboration, mentorship, and resource sharing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full px-6">Build</Button>
            <Button variant="outline" className="rounded-full px-6">Grow</Button>
            <Button variant="outline" className="rounded-full px-6">Learn</Button>
            <Button variant="outline" className="rounded-full px-6">Support</Button>
            <Button variant="outline" className="rounded-full px-6">Connect</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
