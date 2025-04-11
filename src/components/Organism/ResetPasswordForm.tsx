
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Input from '@/components/Atoms/Input';
import Button from '@/components/Atoms/Button';
import { Lock, Eye, EyeOff } from 'lucide-react';

const ResetPasswordForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        description: 'Please ensure both passwords match',
        variant: 'destructive',
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulate password reset - replace with actual logic
      setTimeout(() => {
        toast({
          title: 'Password reset successful',
          description: 'You can now log in with your new password',
        });
        navigate('/login');
      }, 1500);
    } catch (error) {
      toast({
        title: 'Reset failed',
        description: 'Failed to reset password. Please try again.',
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
          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type={showNewPassword ? 'text' : 'password'}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="pl-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      <div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="pl-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      <Button
        type="submit"
        variant="yellow"
        className="w-full py-3"
        disabled={loading}
      >
        {loading ? 'Resetting...' : 'Reset Password'}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
