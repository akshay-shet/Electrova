import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Star,
  Heart,
  ShoppingBag,
  Zap,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  Lock,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';

export const ProductDetailsPage: React.FC = () => {
  const {
    products,
    selectedProductId,
    backToProducts,
    addToCart,
    toggleWishlist,
    isInWishlist,
    user,
    isAuthenticated,
    setActiveView,
    reviewsByProduct,
    addReview,
    recentlyViewedIds,
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  // Image Gallery Active Index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Selected Variant and Color
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : 'Default'
  );
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants && product.variants.length > 0 ? product.variants[0] : 'Standard'
  );

  // Quantity selector
  const [quantity, setQuantity] = useState(1);

  // Delivery Pincode Checker
  const [pincode, setPincode] = useState('560001');
  const [pincodeChecked, setPincodeChecked] = useState(true);

  // Review Form State
  const [formRating, setFormRating] = useState(5);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSuccessMessage, setReviewSuccessMessage] = useState('');
  const [reviewErrorMessage, setReviewErrorMessage] = useState('');

  // Horizontal review reel reference
  const reviewScrollRef = useRef<HTMLDivElement>(null);

  const isProductWishlisted = isInWishlist(product.id);

  // Product reviews
  const currentReviews = reviewsByProduct[product.id] || [];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Horizontal scroll buttons
  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      reviewScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Submit Review Handler
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewErrorMessage('');
    setReviewSuccessMessage('');

    if (!isAuthenticated) {
      setReviewErrorMessage('Please sign in to your ELECTROVA account to write a review.');
      return;
    }

    if (!formTitle.trim()) {
      setReviewErrorMessage('Please provide a title for your review.');
      return;
    }

    if (!formDesc.trim()) {
      setReviewErrorMessage('Please write your review experience in detail.');
      return;
    }

    setIsSubmittingReview(true);
    const res = await addReview(
      product.id,
      formRating,
      formTitle,
      formDesc,
      user?.fullName
    );
    setIsSubmittingReview(false);

    if (res.success) {
      setReviewSuccessMessage('Thank you! Your verified review has been published.');
      setFormTitle('');
      setFormDesc('');
      setFormRating(5);

      // Scroll horizontal reel to the beginning so newly submitted review is visible immediately
      setTimeout(() => {
        if (reviewScrollRef.current) {
          reviewScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      setReviewErrorMessage(res.error || 'Failed to submit review. Please try again.');
    }
  };

  // Add to Bag & Buy Now Handlers
  const handleAddToBag = () => {
    addToCart(product, quantity, selectedColor, selectedVariant);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedVariant);
    setActiveView('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Product sections for continuous vertical scrolling below reviews:
  // 1. Related Electronics (same category, different products)
  const relatedElectronics = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  // 2. Similar Products (same or similar price range)
  const similarProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        Math.abs(p.price - product.price) <= product.price * 0.45
    )
    .slice(0, 5);

  // 3. You May Also Like
  const youMayAlsoLike = products
    .filter((p) => p.id !== product.id && (p.isBestSeller || p.rating >= 4.8))
    .slice(0, 5);

  // 4. Frequently Bought Together (complementary category, e.g. chargers/docks/accessories/monitors)
  const frequentlyBoughtTogether = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === 'Computer Accessories' ||
          p.category === 'Chargers and Cables' ||
          p.category === 'Headphones' ||
          p.category === 'Keyboards' ||
          p.category === 'Power Banks')
    )
    .slice(0, 5);

  // 5. Recently Viewed Products
  const recentlyViewedProducts = products
    .filter((p) => recentlyViewedIds.includes(p.id) && p.id !== product.id)
    .slice(0, 5);

  // 6. Trending Electronics
  const trendingElectronics = products
    .filter((p) => p.isTrending && p.id !== product.id)
    .slice(0, 5);

  // 7. More Product Collections (New Arrivals & Deals)
  const moreProductCollections = products
    .filter((p) => (p.isNewArrival || p.isDealOfTheDay) && p.id !== product.id)
    .slice(0, 5);

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.thumbnail];

  return (
    <div className="min-h-screen bg-white text-[#282c3f]">
      {/* Top Breadcrumb & Visible BACK TO PRODUCTS Button */}
      <div className="bg-[#f5f5f6] border-b border-[#eaeaec] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={backToProducts}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#ff3f6c] text-[#282c3f] hover:text-white rounded-md border border-[#eaeaec] text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-[#ff3f6c] group-hover:text-white transition-colors" />
            <span>BACK TO PRODUCTS</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span className="font-semibold text-gray-700">{product.category}</span>
            <span>/</span>
            <span className="text-[#ff3f6c] font-bold">{product.brand}</span>
          </div>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: Image Gallery (Large + Thumbnails) - lg:col-span-6 */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Featured Large Image Preview */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#f5f5f6] border border-[#eaeaec] group">
              <img
                src={imagesList[activeImageIndex] || product.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Wishlist Button floating on image */}
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-[#ff3f6c] shadow-md hover:scale-110 transition-all duration-150"
                title={isProductWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isProductWishlisted ? 'fill-[#ff3f6c] text-[#ff3f6c]' : ''
                  }`}
                />
              </button>

              {/* Badges */}
              {product.isBestSeller && (
                <span className="absolute top-4 left-4 bg-[#ff3f6c] text-white text-xs font-extrabold px-3 py-1 rounded tracking-wider uppercase shadow-md">
                  Best Seller
                </span>
              )}
            </div>

            {/* Multiple Image Gallery Thumbnails */}
            {imagesList.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {imagesList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#ff3f6c] ring-2 ring-[#ff3f6c]/20 shadow-sm'
                        : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Genuine Electronics Guarantee Callouts */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100 text-center">
              <div className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-[11px] font-bold text-gray-800">100% Genuine</span>
                <span className="text-[10px] text-gray-500">Brand Sealed</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                <RotateCcw className="w-5 h-5 text-blue-600 mb-1" />
                <span className="text-[11px] font-bold text-gray-800">7 Days Return</span>
                <span className="text-[10px] text-gray-500">Replacement Guarantee</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                <Truck className="w-5 h-5 text-purple-600 mb-1" />
                <span className="text-[11px] font-bold text-gray-800">Express Shipping</span>
                <span className="text-[10px] text-gray-500">Air Delivery</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Details, Pricing, Options, Action Buttons - lg:col-span-6 */}
          <div className="lg:col-span-6 space-y-6">
            {/* Brand & Name */}
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#282c3f]">
                {product.brand}
              </h2>
              <h1 className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mt-1">
                {product.name}
              </h1>

              {/* Ratings Summary Banner */}
              <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded bg-gray-50 border border-gray-200 text-xs font-bold text-[#282c3f]">
                <div className="flex items-center gap-1 text-emerald-700 font-black">
                  <span>{product.rating.toFixed(1)}</span>
                  <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600 font-medium">
                  {product.ratingCount.toLocaleString('en-IN')} Ratings & {currentReviews.length} Verified Reviews
                </span>
              </div>
            </div>

            {/* Price and Discounts */}
            <div className="pt-4 border-t border-[#eaeaec] space-y-1">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black text-[#282c3f]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-base text-gray-400 line-through">
                      MRP {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-base font-bold text-[#ff905a]">
                      ({product.discountPercent}% OFF)
                    </span>
                  </>
                )}
              </div>
              <p className="text-[11px] font-bold text-emerald-600">inclusive of all taxes</p>
            </div>

            {/* Colors Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Select Color: <span className="text-[#282c3f]">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                        selectedColor === color
                          ? 'border-2 border-[#ff3f6c] bg-[#ff3f6c]/5 text-[#ff3f6c]'
                          : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Variants Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Select Variant: <span className="text-[#282c3f]">{selectedVariant}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                        selectedVariant === v
                          ? 'border-2 border-[#ff3f6c] bg-[#ff3f6c]/5 text-[#ff3f6c]'
                          : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm font-bold text-gray-700"
                >
                  -
                </button>
                <span className="px-4 py-1 text-xs font-bold text-[#282c3f]">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-sm font-bold text-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: ADD TO CART, BUY NOW, WISHLIST */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToBag}
                className="flex-1 py-3.5 px-6 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 py-3.5 px-6 bg-[#282c3f] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Buy Now</span>
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`py-3.5 px-5 border rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  isProductWishlisted
                    ? 'border-[#ff3f6c] text-[#ff3f6c] bg-[#ff3f6c]/5'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-black'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isProductWishlisted ? 'fill-[#ff3f6c] text-[#ff3f6c]' : ''
                  }`}
                />
                <span>{isProductWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
              </button>
            </div>

            {/* Delivery Pincode Options Checker */}
            <div className="pt-4 border-t border-[#eaeaec] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#282c3f] flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#ff3f6c]" />
                <span>Delivery Options</span>
              </span>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value.replace(/\D/g, ''));
                    setPincodeChecked(false);
                  }}
                  placeholder="Enter 6-digit Pincode"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-[#ff3f6c]"
                />
                <button
                  type="button"
                  onClick={() => setPincodeChecked(true)}
                  className="px-4 py-2 text-xs font-bold uppercase text-[#ff3f6c] hover:bg-[#ff3f6c]/5 rounded border border-[#ff3f6c]"
                >
                  Check
                </button>
              </div>

              {pincodeChecked && (
                <div className="space-y-1 pt-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Delivery by tomorrow, 8:00 PM</span>
                  </div>
                  <p className="text-[11px] text-gray-500">Free Express Delivery on orders above ₹999</p>
                  <p className="text-[11px] text-gray-500">Cash on Delivery available</p>
                </div>
              )}
            </div>

            {/* Warranty Details */}
            <div className="p-3.5 bg-[#f5f5f6] rounded-lg border border-[#eaeaec] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#ff3f6c] flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-[#282c3f]">Warranty Coverage</p>
                <p className="text-gray-600 mt-0.5">{product.warranty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Full Description & Tech Specs Table */}
        <section className="mt-14 pt-8 border-t border-[#eaeaec] space-y-8">
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-[#282c3f]">
              Product Overview & Key Features
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-4xl">
              {product.description}
            </p>
            {product.features && product.features.length > 0 && (
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff3f6c] flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Technical Specifications Table */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider text-[#282c3f] mb-4">
                Technical Specifications
              </h3>
              <div className="border border-[#eaeaec] rounded-lg overflow-hidden max-w-3xl">
                <table className="w-full text-xs text-left">
                  <tbody>
                    {Object.entries(product.specs).map(([specKey, specVal], idx) => (
                      <tr
                        key={specKey}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}
                      >
                        <td className="px-4 py-3 font-bold text-gray-500 w-1/3 border-b border-gray-100">
                          {specKey}
                        </td>
                        <td className="px-4 py-3 text-gray-800 border-b border-gray-100 font-medium">
                          {specVal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* SECTION 5 & 6: PRODUCT REVIEW SYSTEM & HORIZONTAL REVIEW SCROLLING */}
        {/* ========================================================= */}
        <section className="mt-16 pt-10 border-t-2 border-[#eaeaec] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#282c3f]">
                CUSTOMER RATINGS & REVIEWS
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Verified customer experiences with the {product.name}
              </p>
            </div>

            {/* Horizontal reel scroll arrow controls */}
            {currentReviews.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollReviews('left')}
                  className="w-9 h-9 rounded-full border border-gray-300 hover:border-[#ff3f6c] hover:text-[#ff3f6c] bg-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Previous Reviews"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollReviews('right')}
                  className="w-9 h-9 rounded-full border border-gray-300 hover:border-[#ff3f6c] hover:text-[#ff3f6c] bg-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Next Reviews"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* HORIZONTAL REVIEW SCROLLING REEL */}
          {/* VERY IMPORTANT: Displays saved reviews inside horizontal cards, left to right */}
          <div
            ref={reviewScrollRef}
            className="flex items-stretch gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {currentReviews.map((rev) => (
              <div
                key={rev.id}
                className="flex-shrink-0 w-[300px] sm:w-[360px] bg-[#fdfdfd] border border-[#eaeaec] rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div>
                  {/* Star Rating & Verified Badge */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1 bg-emerald-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                      <span>{rev.rating}</span>
                      <Star className="w-3 h-3 fill-white text-white" />
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Buyer</span>
                    </div>
                  </div>

                  {/* Review Title */}
                  <h4 className="text-sm font-bold text-[#282c3f] line-clamp-1 mb-1.5">
                    {rev.title}
                  </h4>

                  {/* Review Description */}
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                    {rev.description}
                  </p>
                </div>

                {/* Reviewer Name and Date */}
                <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="font-bold text-gray-700">{rev.customerName}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span>{rev.date}</span>
                  </div>
                </div>
              </div>
            ))}

            {currentReviews.length === 0 && (
              <div className="w-full py-8 text-center text-xs text-gray-400 bg-gray-50 rounded-lg">
                No reviews yet. Be the first customer to review this product!
              </div>
            )}
          </div>

          {/* WRITE A REVIEW FORM (Only for logged-in customers) */}
          <div className="bg-[#f5f5f6] rounded-xl p-6 sm:p-8 border border-[#eaeaec] max-w-3xl">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#282c3f] flex items-center gap-2">
              <Star className="w-4 h-4 text-[#ff3f6c]" />
              <span>Write a Customer Review</span>
            </h4>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              Share your genuine feedback to help other electronics shoppers
            </p>

            {isAuthenticated ? (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                {reviewSuccessMessage && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{reviewSuccessMessage}</span>
                  </div>
                )}

                {reviewErrorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded font-medium">
                    {reviewErrorMessage}
                  </div>
                )}

                {/* Customer Name (Prefilled from logged-in account) */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    disabled
                    value={user?.fullName || 'Customer'}
                    className="w-full px-3 py-2 bg-gray-200 text-gray-600 border border-gray-300 rounded text-xs cursor-not-allowed"
                  />
                </div>

                {/* Interactive Star Rating (1 to 5) */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Overall Rating (1 to 5 Stars)
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((starVal) => {
                      const isFilled = (formHoverRating || formRating) >= starVal;
                      return (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setFormRating(starVal)}
                          onMouseEnter={() => setFormHoverRating(starVal)}
                          onMouseLeave={() => setFormHoverRating(0)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              isFilled
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      );
                    })}
                    <span className="text-xs font-bold text-gray-700 ml-2">
                      {formRating} Star{formRating > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* Review Title */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Review Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Exceptional sound clarity and premium finish!"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded text-xs text-[#282c3f] focus:outline-none focus:border-[#ff3f6c]"
                    required
                  />
                </div>

                {/* Review Description */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Detailed Review
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe build quality, real-world battery endurance, display clarity, setup experience..."
                    value={formDesc}
                    onChange={(e) => setFormDesc(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded text-xs text-[#282c3f] focus:outline-none focus:border-[#ff3f6c]"
                    required
                  />
                </div>

                {/* Submit Review Button */}
                <button
                  type="submit"
                  disabled={isSubmittingReview}
                  className="px-6 py-2.5 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmittingReview ? 'Submitting...' : 'Submit Review'}</span>
                </button>
              </form>
            ) : (
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-500">
                  <Lock className="w-5 h-5" />
                </div>
                <h5 className="text-xs font-bold text-[#282c3f]">
                  Only logged-in customers can write and submit reviews
                </h5>
                <p className="text-[11px] text-gray-500 max-w-sm mx-auto">
                  Please sign in to verify your purchase and leave an authentic customer review.
                </p>
                <button
                  onClick={() => {
                    setActiveView('signin');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Sign In to Write Review
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: CONTINUOUS VERTICAL SCROLLING AFTER REVIEWS    */}
        {/* ========================================================= */}
        {/*
          CRITICAL REQUIREMENT:
          "THIS IS EXTREMELY IMPORTANT.
          After the horizontal review section, the customer must be able to continue scrolling DOWN naturally.
          Below reviews, display:
          - Related Electronics
          - Similar Products
          - You May Also Like
          - Frequently Bought Together
          - Recently Viewed Products
          - Trending Electronics
          - More Product Collections
          Keep adding product sections below one another. Do not stop the page after reviews.
          Avoid fixed-height page containers and nested vertical scrollbars.
          The complete product details page must scroll naturally from top to bottom."
        */}

        <div className="mt-20 space-y-16">
          {/* 1. Related Electronics */}
          {relatedElectronics.length > 0 && (
            <section className="pt-6 border-t border-[#eaeaec]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#282c3f]">
                    RELATED ELECTRONICS
                  </h3>
                  <p className="text-xs text-gray-500">
                    More premium choices in {product.category}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {relatedElectronics.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* 2. Similar Products */}
          {similarProducts.length > 0 && (
            <section className="pt-6 border-t border-[#eaeaec]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#282c3f]">
                    SIMILAR PRODUCTS
                  </h3>
                  <p className="text-xs text-gray-500">
                    Comparable specs and value in this price segment
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {similarProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* 3. You May Also Like */}
          {youMayAlsoLike.length > 0 && (
            <section className="pt-6 border-t border-[#eaeaec]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#282c3f]">
                    YOU MAY ALSO LIKE
                  </h3>
                  <p className="text-xs text-gray-500">
                    Curated top-rated electronics recommended for you
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {youMayAlsoLike.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* 4. Frequently Bought Together */}
          {frequentlyBoughtTogether.length > 0 && (
            <section className="pt-6 border-t border-[#eaeaec]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#282c3f]">
                    FREQUENTLY BOUGHT TOGETHER
                  </h3>
                  <p className="text-xs text-gray-500">
                    Popular pairing accessories, fast chargers & peripherals
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {frequentlyBoughtTogether.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* 5. Recently Viewed Products */}
          {recentlyViewedProducts.length > 0 && (
            <section className="pt-6 border-t border-[#eaeaec]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#282c3f]">
                    RECENTLY VIEWED PRODUCTS
                  </h3>
                  <p className="text-xs text-gray-500">
                    Continue browsing items you previously looked at
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {recentlyViewedProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* 6. Trending Electronics */}
          {trendingElectronics.length > 0 && (
            <section className="pt-6 border-t border-[#eaeaec]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#282c3f]">
                    TRENDING ELECTRONICS
                  </h3>
                  <p className="text-xs text-gray-500">
                    Most popular gadgets flying off shelves this week
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {trendingElectronics.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}

          {/* 7. More Product Collections */}
          {moreProductCollections.length > 0 && (
            <section className="pt-6 border-t border-[#eaeaec] pb-12">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#282c3f]">
                    MORE PRODUCT COLLECTIONS
                  </h3>
                  <p className="text-xs text-gray-500">
                    Discover new arrivals and limited-time deals
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {moreProductCollections.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
