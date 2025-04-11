
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/Atoms/Button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const EmailVerificationForm: React.FC = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const { toast } = useToast();
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleResendCode = () => {
    setTimeLeft(60);
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast({
      title: 'Code resent',
      description: 'A new verification code has been sent to your email',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (value.length !== 6) {
      toast({
        title: 'Invalid code',
        description: 'Please enter the complete 6-digit code',
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulate verification - replace with actual logic
      setTimeout(() => {
        toast({
          title: 'Email verified',
          description: 'Your email has been successfully verified',
        });
        navigate('/login');
      }, 1500);
    } catch (error) {
      toast({
        title: 'Verification failed',
        description: 'Failed to verify email. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6 w-full">
      <div className="flex flex-col items-center justify-center">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(val) => setValue(val)}
          className="gap-3"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} className="w-12 h-12 text-center text-lg" />
            <InputOTPSlot index={1} className="w-12 h-12 text-center text-lg" />
            <InputOTPSlot index={2} className="w-12 h-12 text-center text-lg" />
            <InputOTPSlot index={3} className="w-12 h-12 text-center text-lg" />
            <InputOTPSlot index={4} className="w-12 h-12 text-center text-lg" />
            <InputOTPSlot index={5} className="w-12 h-12 text-center text-lg" />
          </InputOTPGroup>
        </InputOTP>
      </div>
      
      <Button
        type="submit"
        variant="yellow"
        className="w-full py-3"
        disabled={loading || value.length !== 6}
      >
        {loading ? 'Verifying...' : 'Verify Code'}
      </Button>
      
      <div className="text-center">
        {timeLeft > 0 ? (
          <p className="text-sm text-gray-600">Resend code in {timeLeft}s</p>
        ) : (
          <button
            type="button"
            onClick={handleResendCode}
            className="text-sm font-medium text-hivewire-dark hover:underline"
          >
            Resend Code
          </button>
        )}
      </div>
    </form>
  );
};

export default EmailVerificationForm;
