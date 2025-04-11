
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  phone,
  email,
  address
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-hivewire-yellow flex items-center justify-center">
          <Phone size={18} className="text-hivewire-dark" />
        </div>
        <a href={`tel:${phone}`} className="text-hivewire-dark hover:text-hivewire-darkblue">
          {phone}
        </a>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-hivewire-yellow flex items-center justify-center">
          <Mail size={18} className="text-hivewire-dark" />
        </div>
        <a href={`mailto:${email}`} className="text-hivewire-dark hover:text-hivewire-darkblue">
          {email}
        </a>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-hivewire-yellow flex items-center justify-center">
          <MapPin size={18} className="text-hivewire-dark" />
        </div>
        <span className="text-hivewire-dark">
          {address}
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
