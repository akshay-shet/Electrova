import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  User,
  Package,
  Heart,
  ShoppingBag,
  Star,
  Settings,
  LogOut,
  MapPin,
  ShieldCheck,
  Check,
  Edit2,
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const {
    user,
    logout,
    orders,
    wishlistCount,
    cartCount,
    reviewsByProduct,
    setActiveView,
    openProductDetails,
  } = useStore();

  const [activeTab, setActiveTab] = useState<'profile' | 'reviews' | 'addresses'>('profile');

  // Collect all reviews written across products
  const allUserReviews = React.useMemo(() => {
    const list: any[] = [];
    Object.entries(reviewsByProduct).forEach(([productId, revList]) => {
      revList.forEach((r) => {
        if (
          r.customerName.toLowerCase() === (user?.fullName?.toLowerCase() || '') ||
          r.customerName.includes('Aditya') ||
          r.customerName.includes('Harish')
        ) {
          list.push({ ...r, productId });
        }
      });
    });
    return list;
  }, [reviewsByProduct, user]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Sidebar Menu - md:col-span-4 */}
        <div className="md:col-span-4 space-y-4">
          {/* User ID Card */}
          <div className="bg-white border border-[#eaeaec] rounded-xl p-6 shadow-sm text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#ff3f6c] to-[#ff6b8b] text-white flex items-center justify-center text-3xl font-black mx-auto shadow-md">
              {user?.fullName?.charAt(0) || 'U'}
            </div>
            <h2 className="text-base font-black text-[#282c3f] mt-3">{user?.fullName}</h2>
            <p className="text-xs text-gray-500">{user?.email}</p>
            {user?.mobileNumber && (
              <p className="text-xs text-gray-400 mt-0.5">{user?.mobileNumber}</p>
            )}

            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-around text-center">
              <div>
                <p className="text-base font-black text-[#282c3f]">{orders.length}</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Orders</p>
              </div>
              <div className="border-r border-gray-100"></div>
              <div>
                <p className="text-base font-black text-[#ff3f6c]">{wishlistCount}</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Wishlist</p>
              </div>
              <div className="border-r border-gray-100"></div>
              <div>
                <p className="text-base font-black text-emerald-600">{allUserReviews.length}</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Reviews</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="bg-white border border-[#eaeaec] rounded-xl overflow-hidden shadow-sm text-xs font-semibold">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full px-5 py-3.5 text-left flex items-center gap-3 transition-colors ${
                activeTab === 'profile'
                  ? 'bg-[#ff3f6c]/5 text-[#ff3f6c] border-l-4 border-[#ff3f6c]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Customer Profile Details</span>
            </button>

            <button
              onClick={() => setActiveView('orders')}
              className="w-full px-5 py-3.5 text-left flex items-center gap-3 text-gray-700 hover:bg-gray-50 border-t border-gray-100"
            >
              <Package className="w-4 h-4 text-gray-400" />
              <span>My Orders ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveView('wishlist')}
              className="w-full px-5 py-3.5 text-left flex items-center gap-3 text-gray-700 hover:bg-gray-50 border-t border-gray-100"
            >
              <Heart className="w-4 h-4 text-gray-400" />
              <span>My Wishlist ({wishlistCount})</span>
            </button>

            <button
              onClick={() => setActiveView('cart')}
              className="w-full px-5 py-3.5 text-left flex items-center gap-3 text-gray-700 hover:bg-gray-50 border-t border-gray-100"
            >
              <ShoppingBag className="w-4 h-4 text-gray-400" />
              <span>My Cart ({cartCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`w-full px-5 py-3.5 text-left flex items-center gap-3 transition-colors border-t border-gray-100 ${
                activeTab === 'reviews'
                  ? 'bg-[#ff3f6c]/5 text-[#ff3f6c] border-l-4 border-[#ff3f6c]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Star className="w-4 h-4" />
              <span>My Reviews ({allUserReviews.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full px-5 py-3.5 text-left flex items-center gap-3 transition-colors border-t border-gray-100 ${
                activeTab === 'addresses'
                  ? 'bg-[#ff3f6c]/5 text-[#ff3f6c] border-l-4 border-[#ff3f6c]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Saved Delivery Addresses</span>
            </button>

            <button
              onClick={logout}
              className="w-full px-5 py-3.5 text-left flex items-center gap-3 text-red-600 hover:bg-red-50 border-t border-gray-100 font-bold"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Right Content Tab - md:col-span-8 */}
        <div className="md:col-span-8">
          {activeTab === 'profile' && (
            <div className="bg-white border border-[#eaeaec] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-base font-bold text-[#282c3f]">Profile Information</h3>
                <p className="text-xs text-gray-500">Manage your personal customer profile</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 uppercase font-bold text-[10px] block">
                    Full Name
                  </span>
                  <p className="text-sm font-bold text-[#282c3f] mt-1">{user?.fullName}</p>
                </div>

                <div>
                  <span className="text-gray-400 uppercase font-bold text-[10px] block">
                    Email Address
                  </span>
                  <p className="text-sm font-bold text-[#282c3f] mt-1">{user?.email}</p>
                </div>

                <div>
                  <span className="text-gray-400 uppercase font-bold text-[10px] block">
                    Mobile Phone
                  </span>
                  <p className="text-sm font-bold text-[#282c3f] mt-1">
                    {user?.mobileNumber || '+91 98765 43210'}
                  </p>
                </div>

                <div>
                  <span className="text-gray-400 uppercase font-bold text-[10px] block">
                    Account Status
                  </span>
                  <p className="text-sm font-bold text-emerald-600 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified ELECTROVA Member</span>
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg text-xs text-gray-600 space-y-2">
                <p className="font-bold text-[#282c3f]">Security & Data Privacy</p>
                <p>
                  Your account is secured with Supabase Auth session token encryption.
                  Password and sensitive profile details are strictly confidential.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="bg-white border border-[#eaeaec] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-base font-bold text-[#282c3f]">My Product Reviews</h3>
                <p className="text-xs text-gray-500">All customer ratings submitted by you</p>
              </div>

              {allUserReviews.length > 0 ? (
                <div className="space-y-4">
                  {allUserReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 border border-gray-200 rounded-lg space-y-2 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 bg-emerald-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                          <span>{rev.rating}</span>
                          <Star className="w-3 h-3 fill-white" />
                        </div>
                        <span className="text-[11px] text-gray-400">{rev.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#282c3f]">{rev.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{rev.description}</p>
                      <div className="pt-2">
                        <button
                          onClick={() => openProductDetails(rev.productId)}
                          className="text-xs font-bold text-[#ff3f6c] hover:underline"
                        >
                          View Product →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-xs text-gray-400">
                  You haven't written any reviews yet. Visit any product page to submit your first review!
                </div>
              )}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="bg-white border border-[#eaeaec] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#282c3f]">Saved Delivery Addresses</h3>
                  <p className="text-xs text-gray-500">Addresses for faster checkout</p>
                </div>
              </div>

              <div className="p-4 border border-[#ff3f6c]/30 bg-[#ff3f6c]/5 rounded-lg space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#282c3f] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#ff3f6c]" />
                    <span>Home (Default)</span>
                  </span>
                  <span className="bg-[#ff3f6c] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    DEFAULT
                  </span>
                </div>
                <p className="font-semibold text-gray-800">{user?.fullName}</p>
                <p className="text-gray-600">Flat 402, High-Tech Residency, MG Road</p>
                <p className="text-gray-600">Bengaluru, Karnataka - 560001</p>
                <p className="text-gray-500">Phone: {user?.mobileNumber || '+91 98765 43210'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
