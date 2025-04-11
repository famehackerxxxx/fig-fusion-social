
import React from 'react';
import MainLayout from '../layout/MainLayout';
import Button from '../components/Atoms/Button';
import PersonCard from '../components/Molecule/PersonCard';
import ContactForm from '../components/Organism/ContactForm';
import ContactInfo from '../components/Molecule/ContactInfo';
import ImageGrid from '../components/Molecule/ImageGrid';

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

  const culturalImages = [
    {
      src: "/placeholder.svg",
      alt: "Women in traditional cultural dress"
    },
    {
      src: "/placeholder.svg",
      alt: "People viewing an art exhibit in a museum"
    },
    {
      src: "/placeholder.svg",
      alt: "Traditional dance celebration in a field"
    },
    {
      src: "/placeholder.svg",
      alt: "Cultural celebration at Machu Picchu"
    },
    {
      src: "/placeholder.svg",
      alt: "Diverse group of people celebrating together"
    },
    {
      src: "/placeholder.svg",
      alt: "Person with flower crown in natural setting"
    },
    {
      src: "/placeholder.svg",
      alt: "People enjoying a sunset by the water"
    },
    {
      src: "/placeholder.svg",
      alt: "Men in traditional cultural dress with turbans"
    },
    {
      src: "/placeholder.svg",
      alt: "Community gathering on a beach"
    }
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

      {/* Cultural Diversity Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Celebrating Diversity</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We are dedicated to creating an inclusive space where professionals can thrive, learn, and inspire each other to reach new heights.
          </p>

          <ImageGrid images={culturalImages} className="max-w-6xl mx-auto" />
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
