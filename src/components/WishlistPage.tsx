import React from 'react';
import { useStore } from '../context/StoreContext';
import { Heart, ShoppingBag, X } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, moveWishlistToCart, openProductDetails, setActiveView } = useStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (wishlist.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-rose-50 text-[#ff3f6c] flex items-center justify-center mx-auto">
          <Heart className="w-10 h-10" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-black text-[#282c3f]">Your Wishlist is Empty</h2>
          <p className="text-xs text-gray-500">
            Explore our curated high-tech electronics catalog and save items you desire.
          </p>
        </div>
        <button
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md"
        >
          Discover Electronics
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between pb-4 border-b border-[#eaeaec] mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#282c3f] flex items-center gap-2">
            <span>My Wishlist</span>
            <span className="text-sm font-normal text-gray-400">({wishlist.length} items)</span>
          </h1>
          <p className="text-xs text-gray-500">Items saved for later purchase</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {wishlist.map(({ product }) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg border border-[#eaeaec] hover:border-gray-300 hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Remove button */}
            <button
              onClick={() => removeFromWishlist(product.id)}
              className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/90 shadow text-gray-400 hover:text-black flex items-center justify-center"
              title="Remove from wishlist"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Product image */}
            <div
              onClick={() => openProductDetails(product.id)}
              className="aspect-square w-full overflow-hidden bg-gray-50 cursor-pointer"
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-3.5 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
                  {product.brand}
                </p>
                <h3
                  onClick={() => openProductDetails(product.id)}
                  className="text-xs text-gray-600 font-medium line-clamp-1 mt-0.5 cursor-pointer hover:text-black"
                >
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-[#282c3f]">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-[11px] text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-[10px] font-bold text-[#ff905a]">
                    ({product.discountPercent}% OFF)
                  </span>
                </div>
              </div>

              {/* Move to Bag Button */}
              <button
                onClick={() => moveWishlistToCart(product.id)}
                className="mt-3 w-full py-2 bg-white hover:bg-[#ff3f6c] border border-[#ff3f6c] text-[#ff3f6c] hover:text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Move to Bag</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
