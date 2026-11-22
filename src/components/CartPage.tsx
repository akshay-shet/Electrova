import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Trash2,
  Heart,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Tag,
  CreditCard,
  Truck,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ShippingAddress, Order } from '../types';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    toggleWishlist,
    isInWishlist,
    setActiveView,
    user,
    isAuthenticated,
    placeOrder,
  } = useStore();

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<Order | null>(null);

  // Checkout address state
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    id: 'addr-1',
    name: user?.fullName || 'Harish Kumar',
    phone: user?.mobileNumber || '+91 98765 43210',
    pincode: '560001',
    addressLine: 'Flat 402, High-Tech Residency, MG Road',
    city: 'Bengaluru',
    state: 'Karnataka',
  });

  const [paymentMethod, setPaymentMethod] = useState<Order['paymentMethod']>('UPI');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'ELECTROVA500') {
      setCouponApplied(true);
      setCouponDiscount(500);
    } else if (couponCode.toUpperCase() === 'VIPFEST') {
      setCouponApplied(true);
      setCouponDiscount(2000);
    } else {
      alert('Invalid coupon. Try "ELECTROVA500" or "VIPFEST"');
    }
  };

  const finalTotal = Math.max(0, cartTotal - couponDiscount);

  const handlePlaceOrder = async () => {
    const newOrder = await placeOrder(shippingAddress, paymentMethod);
    setOrderSuccess(newOrder);

    // Trigger celebration confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  if (orderSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-[#282c3f]">
            Order Confirmed Successfully!
          </h1>
          <p className="text-sm text-gray-600">
            Order Reference ID: <span className="font-bold text-[#ff3f6c]">{orderSuccess.id}</span>
          </p>
          <p className="text-xs text-gray-500">
            A confirmation receipt and tracking link has been registered to your profile.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-left max-w-md mx-auto space-y-3 text-xs">
          <div className="flex justify-between font-bold text-gray-700">
            <span>Estimated Delivery:</span>
            <span className="text-emerald-700">{orderSuccess.estimatedDeliveryDate}</span>
          </div>
          <div className="flex justify-between font-bold text-gray-700">
            <span>Payment Method:</span>
            <span>{orderSuccess.paymentMethod}</span>
          </div>
          <div className="flex justify-between font-bold text-[#282c3f] border-t border-gray-200 pt-2 text-sm">
            <span>Total Paid:</span>
            <span className="text-[#ff3f6c]">{formatPrice(orderSuccess.totalAmount)}</span>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => {
              setActiveView('orders');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#282c3f] hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-md"
          >
            Track in My Orders
          </button>
          <button
            onClick={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-black text-[#282c3f]">Hey, your shopping bag is empty!</h2>
          <p className="text-xs text-gray-500">
            There is nothing in your bag. Let's add some flagship electronics.
          </p>
        </div>
        <button
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md"
        >
          Explore Electronics
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#282c3f] mb-8 flex items-center gap-2">
        <span>Shopping Bag</span>
        <span className="text-sm font-normal text-gray-400">({cart.length} items)</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Cart Items List / Checkout Form - lg:col-span-8 */}
        <div className="lg:col-span-8 space-y-4">
          {!isCheckingOut ? (
            cart.map((item) => {
              const isWish = isInWishlist(item.product.id);
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#eaeaec] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover bg-gray-50 border border-gray-100 flex-shrink-0"
                    />
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
                        {item.product.brand}
                      </p>
                      <h3 className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-1 max-w-md">
                        {item.product.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-gray-500">
                        {item.selectedColor && (
                          <span className="bg-gray-100 px-2 py-0.5 rounded">
                            Color: {item.selectedColor}
                          </span>
                        )}
                        {item.selectedVariant && (
                          <span className="bg-gray-100 px-2 py-0.5 rounded">
                            Variant: {item.selectedVariant}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-sm font-bold text-[#282c3f]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          {formatPrice(item.product.originalPrice * item.quantity)}
                        </span>
                        <span className="text-[11px] font-bold text-[#ff905a]">
                          ({item.product.discountPercent}% OFF)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    {/* Quantity Inc/Dec */}
                    <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                      <button
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="px-2.5 py-0.5 bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-700"
                      >
                        -
                      </button>
                      <span className="px-3 py-0.5 text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="px-2.5 py-0.5 bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-700"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <button
                        onClick={() => toggleWishlist(item.product)}
                        className="text-gray-500 hover:text-[#ff3f6c] flex items-center gap-1 font-semibold"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            isWish ? 'fill-[#ff3f6c] text-[#ff3f6c]' : ''
                          }`}
                        />
                        <span className="hidden sm:inline">
                          {isWish ? 'Wishlisted' : 'Move to Wishlist'}
                        </span>
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 flex items-center gap-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Checkout Form */
            <div className="bg-white border border-[#eaeaec] rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h3 className="text-base font-bold text-[#282c3f] flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#ff3f6c]" />
                  <span>Delivery Address</span>
                </h3>
                <button
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs font-bold text-[#ff3f6c] hover:underline"
                >
                  Edit Cart Items
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Contact Name</label>
                  <input
                    type="text"
                    value={shippingAddress.name}
                    onChange={(e) =>
                      setShippingAddress({ ...shippingAddress, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ff3f6c]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="text"
                    value={shippingAddress.phone}
                    onChange={(e) =>
                      setShippingAddress({ ...shippingAddress, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ff3f6c]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    value={shippingAddress.pincode}
                    onChange={(e) =>
                      setShippingAddress({ ...shippingAddress, pincode: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ff3f6c]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={shippingAddress.city}
                    onChange={(e) =>
                      setShippingAddress({ ...shippingAddress, city: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ff3f6c]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-bold text-gray-700 mb-1">Complete Address</label>
                  <input
                    type="text"
                    value={shippingAddress.addressLine}
                    onChange={(e) =>
                      setShippingAddress({ ...shippingAddress, addressLine: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ff3f6c]"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-bold text-[#282c3f] mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#ff3f6c]" />
                  <span>Choose Payment Method</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {(['UPI', 'Credit/Debit Card', 'Net Banking', 'Cash on Delivery'] as const).map(
                    (method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentMethod(method)}
                        className={`p-3 rounded-lg border text-center font-bold transition-all ${
                          paymentMethod === method
                            ? 'border-[#ff3f6c] bg-[#ff3f6c]/5 text-[#ff3f6c] ring-1 ring-[#ff3f6c]'
                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {method}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Price Details & Order Summary - lg:col-span-4 */}
        <div className="lg:col-span-4 space-y-4">
          {/* Coupon Code Section */}
          <div className="bg-white border border-[#eaeaec] rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              <Tag className="w-4 h-4 text-[#ff3f6c]" />
              <span>Apply Coupons</span>
            </div>
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Try VIPFEST or ELECTROVA500"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded text-xs uppercase focus:outline-none focus:border-[#ff3f6c]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#282c3f] hover:bg-black text-white text-xs font-bold rounded"
              >
                Apply
              </button>
            </form>
            {couponApplied && (
              <p className="text-[11px] text-emerald-600 font-bold mt-2 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Coupon Applied! ₹{couponDiscount} discount credited.</span>
              </p>
            )}
          </div>

          {/* Price Breakdown */}
          <div className="bg-white border border-[#eaeaec] rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              PRICE DETAILS ({cart.length} Items)
            </h3>

            <div className="space-y-2.5 text-xs text-gray-700">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>{formatPrice(cartSubtotal)}</span>
              </div>

              <div className="flex justify-between text-emerald-600">
                <span>Discount on MRP</span>
                <span>- {formatPrice(cartDiscount)}</span>
              </div>

              {couponApplied && (
                <div className="flex justify-between text-emerald-600">
                  <span>Coupon Discount</span>
                  <span>- {formatPrice(couponDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-emerald-600 font-bold">FREE</span>
              </div>

              <div className="pt-3 border-t border-gray-200 flex justify-between text-sm font-black text-[#282c3f]">
                <span>Total Amount</span>
                <span className="text-lg text-[#ff3f6c]">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Place Order / Proceed to Checkout Button */}
            {!isCheckingOut ? (
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handlePlaceOrder}
                className="w-full py-3.5 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Confirm & Place Order ({formatPrice(finalTotal)})</span>
              </button>
            )}

            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe & Secure 256-bit Encrypted Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
