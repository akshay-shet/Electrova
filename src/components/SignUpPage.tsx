import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Cpu, Mail, Lock, Phone, User, ArrowRight } from 'lucide-react';

export const SignUpPage: React.FC = () => {
  const { signup, setActiveView } = useStore();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please re-enter.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password should be at least 6 characters.');
      return;
    }

    setLoading(true);
    const result = await signup(fullName, email, mobileNumber, password);
    setLoading(false);

    if (result.success) {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    } else {
      setErrorMsg(result.error || 'Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-md bg-white border border-[#eaeaec] rounded-2xl p-8 shadow-card space-y-6">
        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ff3f6c] to-[#ff6b8b] flex items-center justify-center text-white mx-auto shadow-md">
            <Cpu className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-[#282c3f] tracking-tight">
            Create Your Account
          </h1>
          <p className="text-xs text-gray-500">
            Join ELECTROVA for premium electronics and member privileges
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded font-medium">
            {errorMsg}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="Aditya Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs text-[#282c3f] rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="aditya@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs text-[#282c3f] rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Mobile Number
            </label>
            <div className="relative flex items-center">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs text-[#282c3f] rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="password"
                required
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs text-[#282c3f] rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="password"
                required
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs text-[#282c3f] rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="text-[11px] text-gray-500 leading-relaxed">
            By creating an account, you agree to ELECTROVA's Terms of Use & Privacy Policy.
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer Link */}
        <div className="pt-4 border-t border-gray-100 text-center text-xs text-gray-600">
          <span>Already have an ELECTROVA account? </span>
          <button
            onClick={() => setActiveView('signin')}
            className="font-bold text-[#ff3f6c] hover:underline"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
