import React from 'react';
import { useStore } from '../context/StoreContext';
import { Package, Truck, Calendar, MapPin, ArrowRight } from 'lucide-react';

export const OrdersPage: React.FC = () => {
  const { orders, setActiveView, openProductDetails } = useStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (orders.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
          <Package className="w-10 h-10" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-black text-[#282c3f]">You have no orders yet</h2>
          <p className="text-xs text-gray-500">
            Once you order items, you can track their live delivery progress here.
          </p>
        </div>
        <button
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3 bg-[#ff3f6c] hover:bg-[#e63960] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="border-b border-[#eaeaec] pb-4">
        <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#282c3f] flex items-center gap-2">
          <span>My Orders</span>
          <span className="text-sm font-normal text-gray-400">({orders.length})</span>
        </h1>
        <p className="text-xs text-gray-500">View and track all your electronics purchases</p>
      </div>

      <div className="space-y-6">
        {orders.map((ord) => (
          <div
            key={ord.id}
            className="bg-white border border-[#eaeaec] rounded-xl overflow-hidden shadow-sm"
          >
            {/* Order Header bar */}
            <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-gray-400 uppercase text-[10px] font-bold block">
                    Order Placed
                  </span>
                  <span className="font-semibold text-gray-700">
                    {new Date(ord.orderDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 uppercase text-[10px] font-bold block">
                    Total Amount
                  </span>
                  <span className="font-bold text-[#282c3f]">
                    {formatPrice(ord.totalAmount)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 uppercase text-[10px] font-bold block">
                    Ship To
                  </span>
                  <span className="font-semibold text-gray-700">
                    {ord.shippingAddress?.name || 'Customer'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-[10px] uppercase font-bold">Order ID:</span>
                <span className="font-mono font-bold text-gray-800">{ord.id}</span>
              </div>
            </div>

            {/* Order status banner */}
            <div className="px-6 py-3 bg-emerald-50/50 border-b border-emerald-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Estimated Delivery by {ord.estimatedDeliveryDate}</span>
              </div>
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {ord.status}
              </span>
            </div>

            {/* Items in this order */}
            <div className="p-6 divide-y divide-gray-100">
              {ord.items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-16 h-16 rounded-md object-cover bg-gray-50 border border-gray-100 cursor-pointer"
                      onClick={() => openProductDetails(item.productId)}
                    />
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-bold uppercase text-[#ff3f6c]">
                        {item.brand}
                      </p>
                      <h4
                        onClick={() => openProductDetails(item.productId)}
                        className="text-xs sm:text-sm font-semibold text-gray-800 hover:underline cursor-pointer"
                      >
                        {item.productName}
                      </h4>
                      <p className="text-[11px] text-gray-500">
                        Qty: {item.quantity} {item.color ? `| Color: ${item.color}` : ''}
                      </p>
                      <p className="text-xs font-bold text-[#282c3f]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => openProductDetails(item.productId)}
                    className="px-3.5 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:border-[#ff3f6c] hover:text-[#ff3f6c] transition-colors flex items-center gap-1"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Shipping Address Footer */}
            <div className="bg-gray-50/50 px-6 py-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span>
                Delivering to: {ord.shippingAddress?.addressLine}, {ord.shippingAddress?.city} - {ord.shippingAddress?.pincode}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
