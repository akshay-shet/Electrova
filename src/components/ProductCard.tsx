import React from 'react';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openProductDetails, toggleWishlist, isInWishlist, addToCart } = useStore();
  const wishlisted = isInWishlist(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      onClick={() => openProductDetails(product.id)}
      className="group relative bg-white rounded-lg border border-[#eaeaec] hover:border-gray-300 hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f6]">
        <img
          src={product.thumbnail}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Rating Pill - Myntra style on bottom-left of image */}
        <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-bold text-[#282c3f] flex items-center gap-1 shadow-sm border border-gray-100">
          <span>{product.rating.toFixed(1)}</span>
          <Star className="w-3 h-3 fill-[#14958f] text-[#14958f]" />
          <span className="text-gray-400 font-normal">|</span>
          <span className="text-gray-500 font-medium">
            {product.ratingCount >= 1000
              ? `${(product.ratingCount / 1000).toFixed(1)}k`
              : product.ratingCount}
          </span>
        </div>

        {/* Wishlist Heart Icon - Myntra style top-right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-[#ff3f6c] shadow-sm hover:scale-110 transition-all duration-150"
          title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? 'fill-[#ff3f6c] text-[#ff3f6c]' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Badges (Best Seller, Trending, etc.) */}
        {product.isBestSeller && (
          <span className="absolute top-2.5 left-2.5 bg-[#ff3f6c] text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase shadow-sm">
            Best Seller
          </span>
        )}
        {!product.isBestSeller && product.isTrending && (
          <span className="absolute top-2.5 left-2.5 bg-[#282c3f] text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase shadow-sm">
            Trending
          </span>
        )}
        {!product.isBestSeller && !product.isTrending && product.isDealOfTheDay && (
          <span className="absolute top-2.5 left-2.5 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase shadow-sm">
            Special Deal
          </span>
        )}

        {/* Quick Add to Cart button on hover for desktop */}
        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full py-2 bg-white hover:bg-[#ff3f6c] text-[#282c3f] hover:text-white text-xs font-bold uppercase tracking-wider rounded shadow flex items-center justify-center gap-1.5 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add To Bag</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3.5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Brand Name */}
          <div className="text-[13px] font-bold uppercase tracking-wider text-[#282c3f]">
            {product.brand}
          </div>

          {/* Product Name */}
          <h3
            className="text-xs text-gray-600 font-normal line-clamp-1 mt-0.5 title-hover group-hover:text-[#282c3f]"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Discounts */}
        <div className="mt-2.5 pt-1.5 border-t border-gray-100 flex items-center flex-wrap gap-x-2 gap-y-0.5">
          <span className="text-sm font-bold text-[#282c3f]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-[11px] text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-[11px] font-bold text-[#ff905a]">
                ({product.discountPercent}% OFF)
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
