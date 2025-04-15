
import React from 'react';
import Card from '../Molecule/Card';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-hivewire-yellow relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-hivewire-dark">
              Welcome to<br />HiveWire Tribe.
            </h2>
            <p className="text-gray-800 mb-4">
              At HiveWire Tribe, we believe in the power of community to drive positive change and 
              growth. Just like a beehive thrives through collective effort, our platform enables 
              professionals to connect, collaborate, and create impact together.
            </p>
            <p className="text-gray-800 mb-4">
              Our mission is to provide a supportive ecosystem where innovators, entrepreneurs, 
              and industry leaders can share knowledge, resources, and opportunities - creating a 
              ripple effect of growth and transformation.
            </p>
            <p className="text-gray-800">
              Join us in building a community that empowers every member to reach their full potential.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-hivewire-dark">Our Mission</h3>
              <p className="text-gray-700">
                To create a thriving ecosystem that fosters growth, innovation, and positive impact through 
                meaningful connections and collaborative support.
              </p>
            </Card>
            
            <Card className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-hivewire-dark">Our Vision</h3>
              <p className="text-gray-700">
                A world where every professional has access to the community, resources, and opportunities they 
                need to succeed and make a difference in their industries and communities.
              </p>
            </Card>
            
            <Card className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-hivewire-dark">Core Values</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Collaboration over competition</li>
                <li>Continuous growth and learning</li>
                <li>Authentic connection and support</li>
                <li>Diversity of thought and experience</li>
                <li>Positive impact in everything we do</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
