import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Button from '../components/Atoms/Button';
import Card from '../components/Molecule/Card';

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
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

      {/* Mission Section */}
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

      {/* About Section */}
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

      {/* Call to Action Section */}
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

      {/* Features Section */}
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

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-hivewire-dark">
            Give us a Buzz.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-hivewire-yellow flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Us</p>
                  <p className="text-gray-800 font-medium">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-hivewire-yellow flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email Us</p>
                  <p className="text-gray-800 font-medium">hello@hivewirenetwork.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-hivewire-yellow flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Visit Us</p>
                  <p className="text-gray-800 font-medium">123 Innovation Dr, Palo Alto, CA 94301</p>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <Button variant="yellow" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LandingPage;
