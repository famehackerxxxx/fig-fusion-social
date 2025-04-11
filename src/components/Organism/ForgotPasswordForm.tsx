
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Input from '@/components/Atoms/Input';
import Button from '@/components/Atoms/Button';
import { Mail } from 'lucide-react';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate password reset request - replace with actual logic
      setTimeout(() => {
        toast({
          title: 'Reset link sent',
          description: 'Check your email for a link to reset your password',
        });
        // In a real app, you might not redirect here
        // but for demo purposes, we'll go to the verification page
        navigate('/verify-email');
      }, 1500);
    } catch (error) {
      toast({
        title: 'Request failed',
        description: 'Failed to send password reset email. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 w-full">
      <div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <Button
        type="submit"
        variant="yellow"
        className="w-full py-3"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Continue'}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
