
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Button from '../components/Atoms/Button';
import Card from '../components/Molecule/Card';
import PersonCard from '../components/Molecule/PersonCard';
import ContactForm from '../components/Organism/ContactForm';
import ContactInfo from '../components/Molecule/ContactInfo';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      title: "Product Director",
      image: "/placeholder.svg",
    },
    {
      name: "Michael Davis",
      title: "Marketing Lead",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Thompson",
      title: "Community Manager",
      image: "/placeholder.svg",
    },
    {
      name: "David Parker",
      title: "Technical Advisor",
      image: "/placeholder.svg",
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hivewire-gradient py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-hivewire-dark">About Us</h1>
          <p className="mt-4 text-hivewire-dark max-w-2xl mx-auto">
            A thriving community dedicated to personal growth and professional development.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="section-heading">
                Empowering Your Personal and Professional Growth
              </h2>
              <p className="text-gray-600 mb-6">
                At HiveWire, we're more than just a social platform—we're a vibrant, engaged community of professionals, entrepreneurs, and visionaries who believe in the power of connection and collaborative growth.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're seeking to expand your professional network, develop new skills, or find inspiration from like-minded individuals, HiveWire provides the environment where meaningful relationships thrive and powerful ideas flourish.
              </p>
              <p className="text-gray-600 mb-6">
                Our unique approach combines community engagement with practical resources and opportunities that help our members achieve their personal and professional goals—all within a supportive ecosystem.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Professional growth" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section - Exactly as shown in the image */}
      <section className="py-16 bg-[#FFD046]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">
            Why Join HiveWire Tribe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#9DD3DD] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">
                A Community that Cares
              </h3>
              <p className="text-center text-sm">
                HiveWire Tribe is more than a platform—it's a movement. Our inclusive and diverse space allows you to share, learn, and grow in an environment that values authenticity and connection.
              </p>
            </div>
            
            <div className="bg-[#9DD3DD] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Tools & Opportunities for Growth
              </h3>
              <p className="text-center text-sm">
                Access expert insights, build new skills, and connect with professionals for growth and collaboration.
              </p>
            </div>
            
            <div className="bg-[#9DD3DD] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Inspiration at Every Step
              </h3>
              <p className="text-center text-sm">
                From exclusive events and challenges to engaging discussions and mentorship, HiveWire Tribe keeps you motivated and connected to the best version of yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Our Purpose" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="section-heading">Our Purpose</h2>
              <p className="text-gray-600 mb-6">
                To a dynamic world built through a digital-first mindset and collaborative resilience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-hivewire-yellow font-bold mr-2">•</span>
                  <span className="text-gray-600"><strong>CONNECT PEOPLE & IDEAS</strong> – Create bridges between people, communities, & breakthrough concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hivewire-yellow font-bold mr-2">•</span>
                  <span className="text-gray-600"><strong>CURATE KNOWLEDGE & TOOLS</strong> – Filter, organize & deliver the content that matters most</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hivewire-yellow font-bold mr-2">•</span>
                  <span className="text-gray-600"><strong>FACILITATE GROWTH THROUGH COLLABORATION</strong> – Help people work better together</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                We bring people together to build resilience—the capacity to recover quickly from difficulties; toughness in the face of challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-lg object-cover"
                />
                <h3 className="font-semibold text-xl mt-4 text-hivewire-dark">{member.name}</h3>
                <p className="text-hivewire-darkblue">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Give us a Buzz.</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about our organization, or want to explore collaboration opportunities? Get in touch with our team today.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo
                phone="+1 (203) 555-0101"
                email="hello.lovewire@example.com"
                address="218 Thimble Dr, Syracuse, Connecticut 35243"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
