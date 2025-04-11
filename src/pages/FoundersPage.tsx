
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Button from '../components/Atoms/Button';
import PersonCard from '../components/Molecule/PersonCard';
import ContactForm from '../components/Organism/ContactForm';
import ContactInfo from '../components/Molecule/ContactInfo';

const FoundersPage: React.FC = () => {
  const founders = [
    {
      name: "Greg Stites",
      title: "Co-Founder & CEO",
      image: "/placeholder.svg",
      description: "Greg has built a comprehensive network of community, organization, and business leaders from all over the world to support the HiveWire mission."
    },
    {
      name: "Emma Jacobs",
      title: "Co-Founder & COO",
      image: "/placeholder.svg",
      description: "Emma brings decades of experience in organizational and community building. Her background spans education, non-profit work and corporate leadership."
    }
  ];

  const journeyImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hivewire-gradient py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-hivewire-dark">Founders</h1>
          <p className="mt-4 text-hivewire-dark max-w-2xl mx-auto">
            Building a community of thought leaders driving positive change and resilience in the world.
          </p>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Meet Our Founders</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Passionate leaders with a vision for building resilient communities through connection and shared purpose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <PersonCard
                key={index}
                name={founder.name}
                title={founder.title}
                image={founder.image}
                description={founder.description}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button variant="yellow">More</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Capturing Our Journey</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team dedicated to creating impact has come so far, and we'd like to share our journey with you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyImages.slice(0, 6).map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={`Journey image ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hivewire-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hivewire-dark mb-4">
            Let's Grow, Thrive, and Build Resilience—Together!
          </h2>
          <Button variant="yellow" size="lg">
            Connect With Us
          </Button>
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

export default FoundersPage;
