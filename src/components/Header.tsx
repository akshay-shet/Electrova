import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  LogOut,
  Package,
  Star,
  Settings,
  Cpu,
  X,
  Menu
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/categories';
import { ProductCategory } from '../types';

export const Header: React.FC = () => {
  const {
    activeView,
    setActiveView,
    user,
    isAuthenticated,
    logout,
    cartCount,
    wishlistCount,
    filters,
    setSearchQuery,
    selectCategory,
  } = useStore();

  const [searchInput, setSearchInput] = useState(filters.searchQuery);
  const [profileOpen, setProfileOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleCategoryClick = (cat: ProductCategory | null) => {
    selectCategory(cat);
    setCategoryDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#eaeaec] shadow-sm">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-black"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo on the left */}
          <div
            onClick={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer flex-shrink-0 select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff3f6c] to-[#ff6b8b] flex items-center justify-center text-white shadow-md shadow-[#ff3f6c]/20 group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight text-[#282c3f]">ELECTRO</span>
                <span className="text-2xl font-black tracking-tight text-[#ff3f6c]">VA</span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.2em] font-semibold text-gray-400 -mt-1">
                Electronics Hub
              </p>
            </div>
          </div>

          {/* Desktop Horizontal Category Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors ${
                activeView === 'home'
                  ? 'text-[#ff3f6c] border-b-2 border-[#ff3f6c]'
                  : 'text-[#282c3f] hover:text-[#ff3f6c]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleCategoryClick('Laptops')}
              className="px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#282c3f] hover:text-[#ff3f6c] transition-colors"
            >
              Laptops
            </button>

            <button
              onClick={() => handleCategoryClick('Smart Watches')}
              className="px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#282c3f] hover:text-[#ff3f6c] transition-colors"
            >
              Watches
            </button>

            <button
              onClick={() => handleCategoryClick('Headphones')}
              className="px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#282c3f] hover:text-[#ff3f6c] transition-colors"
            >
              Audio
            </button>

            <button
              onClick={() => handleCategoryClick('Gaming Consoles')}
              className="px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#282c3f] hover:text-[#ff3f6c] transition-colors"
            >
              Gaming
            </button>

            <button
              onClick={() => handleCategoryClick('Smart TVs')}
              className="px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#282c3f] hover:text-[#ff3f6c] transition-colors"
            >
              Smart TVs
            </button>

            {/* All 20 Categories Dropdown */}
            <div className="relative" ref={categoryRef}>
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#282c3f] hover:text-[#ff3f6c] transition-colors"
              >
                <span>Categories</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 max-h-[480px] overflow-y-auto">
                  <div className="px-4 py-2 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    20 Electronics Categories
                  </div>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="w-full text-left px-4 py-2.5 text-xs font-medium text-[#282c3f] hover:bg-gray-50 hover:text-[#ff3f6c] flex items-center justify-between transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                        {cat.shortName}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Large Search Bar */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search for laptops, headphones, smart TVs, cameras, consoles..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-[#f5f5f6] hover:bg-[#eaeaea] focus:bg-white text-xs lg:text-[13px] text-[#282c3f] placeholder-gray-400 rounded-md border border-transparent focus:border-[#ff3f6c] focus:outline-none transition-all duration-150"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput('');
                      setSearchQuery('');
                    }}
                    className="absolute right-3 p-0.5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Actions: Profile, Wishlist, Bag */}
          <div className="flex items-center space-x-3 sm:space-x-6 flex-shrink-0">
            {/* Customer Profile dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex flex-col items-center justify-center p-1 text-[#282c3f] hover:text-[#ff3f6c] transition-colors focus:outline-none group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-700 group-hover:text-[#ff3f6c] transition-colors" />
                </div>
                <span className="text-[11px] font-bold tracking-tight text-[#282c3f] group-hover:text-[#ff3f6c] mt-0.5">
                  {isAuthenticated ? (user?.fullName?.split(' ')[0] || 'Profile') : 'Profile'}
                </span>
              </button>

              {/* Profile Menu Popup */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {isAuthenticated ? (
                    <div>
                      {/* Logged in User Header */}
                      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/70">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Signed in as
                        </p>
                        <p className="text-sm font-bold text-[#282c3f] truncate mt-0.5">
                          {user?.fullName}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      </div>

                      {/* Menu options */}
                      <div className="py-2">
                        <button
                          onClick={() => {
                            setActiveView('profile');
                            setProfileOpen(false);
                          }}
                          className="w-full px-5 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#ff3f6c] flex items-center gap-3 transition-colors"
                        >
                          <User className="w-4 h-4 text-gray-400" />
                          <span>Customer Profile</span>
                        </button>

                        <button
                          onClick={() => {
                            setActiveView('orders');
                            setProfileOpen(false);
                          }}
                          className="w-full px-5 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#ff3f6c] flex items-center gap-3 transition-colors"
                        >
                          <Package className="w-4 h-4 text-gray-400" />
                          <span>My Orders</span>
                        </button>

                        <button
                          onClick={() => {
                            setActiveView('wishlist');
                            setProfileOpen(false);
                          }}
                          className="w-full px-5 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#ff3f6c] flex items-center gap-3 transition-colors"
                        >
                          <Heart className="w-4 h-4 text-gray-400" />
                          <span>My Wishlist ({wishlistCount})</span>
                        </button>

                        <button
                          onClick={() => {
                            setActiveView('cart');
                            setProfileOpen(false);
                          }}
                          className="w-full px-5 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#ff3f6c] flex items-center gap-3 transition-colors"
                        >
                          <ShoppingBag className="w-4 h-4 text-gray-400" />
                          <span>My Cart ({cartCount})</span>
                        </button>

                        <button
                          onClick={() => {
                            setActiveView('profile');
                            setProfileOpen(false);
                          }}
                          className="w-full px-5 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#ff3f6c] flex items-center gap-3 transition-colors"
                        >
                          <Star className="w-4 h-4 text-gray-400" />
                          <span>My Reviews</span>
                        </button>

                        <button
                          onClick={() => {
                            setActiveView('profile');
                            setProfileOpen(false);
                          }}
                          className="w-full px-5 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#ff3f6c] flex items-center gap-3 transition-colors"
                        >
                          <Settings className="w-4 h-4 text-gray-400" />
                          <span>Account Settings</span>
                        </button>
                      </div>

                      {/* Logout */}
                      <div className="pt-2 border-t border-gray-100 px-5">
                        <button
                          onClick={() => {
                            logout();
                            setProfileOpen(false);
                          }}
                          className="w-full py-2 text-left text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-3"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Log Out</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5">
                      <h4 className="text-sm font-bold text-[#282c3f]">Welcome to ELECTROVA</h4>
                      <p className="text-xs text-gray-500 mt-1 mb-4 leading-relaxed">
                        To access your orders, saved wishlist and submit product reviews
                      </p>
                      <div className="space-y-2.5">
                        <button
                          onClick={() => {
                            setActiveView('signin');
                            setProfileOpen(false);
                          }}
                          className="w-full py-2.5 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm text-center block"
                        >
                          Sign In
                        </button>
                        <button
                          onClick={() => {
                            setActiveView('signup');
                            setProfileOpen(false);
                          }}
                          className="w-full py-2.5 bg-white hover:bg-gray-50 text-[#282c3f] border border-gray-300 text-xs font-bold uppercase tracking-wider rounded-md transition-colors text-center block"
                        >
                          Sign Up / Register
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => setActiveView('wishlist')}
              className="flex flex-col items-center justify-center p-1 text-[#282c3f] hover:text-[#ff3f6c] transition-colors relative group"
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <Heart className="w-5 h-5 text-gray-700 group-hover:text-[#ff3f6c] transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#ff3f6c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold tracking-tight text-[#282c3f] group-hover:text-[#ff3f6c] mt-0.5">
                Wishlist
              </span>
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => setActiveView('cart')}
              className="flex flex-col items-center justify-center p-1 text-[#282c3f] hover:text-[#ff3f6c] transition-colors relative group"
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <ShoppingBag className="w-5 h-5 text-gray-700 group-hover:text-[#ff3f6c] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#ff3f6c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold tracking-tight text-[#282c3f] group-hover:text-[#ff3f6c] mt-0.5">
                Bag
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <div className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-2">
            Categories
          </div>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="text-left text-xs py-1.5 px-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-100 flex gap-2">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-gray-100 text-xs font-bold text-red-600 rounded"
              >
                Log Out ({user?.fullName})
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setActiveView('signin');
                    setMobileMenuOpen(false);
                  }}
                  className="w-1/2 py-2 bg-[#ff3f6c] text-white text-xs font-bold rounded"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setActiveView('signup');
                    setMobileMenuOpen(false);
                  }}
                  className="w-1/2 py-2 border border-gray-300 text-xs font-bold rounded"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
