import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Cpu, Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SignInPage: React.FC = () => {
  const { login, setActiveView } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setLoading(true);
    const result = await login(email, password, rememberMe);
    setLoading(false);

    if (result.success) {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    } else {
      setErrorMsg(result.error || 'Failed to sign in. Please verify your credentials.');
    }
  };

  // Quick Demo Login Helper
  const handleDemoLogin = () => {
    setEmail('harish.kumar@electrova.com');
    setPassword('Electronics2026!');
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-md bg-white border border-[#eaeaec] rounded-2xl p-8 shadow-card space-y-6">
        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ff3f6c] to-[#ff6b8b] flex items-center justify-center text-white mx-auto shadow-md">
            <Cpu className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-[#282c3f] tracking-tight">
            Sign In to ELECTROVA
          </h1>
          <p className="text-xs text-gray-500">
            Access your orders, saved wishlist and post verified reviews
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded font-medium">
            {errorMsg}
          </div>
        )}

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs text-[#282c3f] rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs text-[#282c3f] rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-[#ff3f6c] rounded"
              />
              <span>Remember Me</span>
            </label>

            <button
              type="button"
              onClick={() => alert('Password reset link sent to your registered email.')}
              className="text-[#ff3f6c] font-semibold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Fast Fill */}
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={handleDemoLogin}
            className="text-[11px] font-semibold text-gray-500 hover:text-[#ff3f6c] underline"
          >
            ⚡ Auto-fill Demo Account (Harish Kumar)
          </button>
        </div>

        {/* Footer Link */}
        <div className="pt-4 border-t border-gray-100 text-center text-xs text-gray-600">
          <span>New to ELECTROVA? </span>
          <button
            onClick={() => setActiveView('signup')}
            className="font-bold text-[#ff3f6c] hover:underline"
          >
            Create an Account / Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
