import React from 'react';
import { ShieldCheck, RotateCcw, Truck, Award, Cpu, Mail, Phone, MapPin } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/categories';

export const Footer: React.FC = () => {
  const { selectCategory, setActiveView } = useStore();

  return (
    <footer className="bg-[#f5f5f6] border-t border-[#eaeaec] text-[#282c3f]">
      {/* Brand Value Pillars */}
      <div className="border-b border-[#eaeaec] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#ff3f6c] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#282c3f]">
                100% ORIGINAL
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">guarantee for all products</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#282c3f]">
                Return within 7 days
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">hassle-free replacement</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#282c3f]">
                Express Delivery
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">fast air transit nationwide</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#282c3f]">
                Brand Warranty
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">official authorized service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Bio */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff3f6c] to-[#ff6b8b] flex items-center justify-center text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-[#282c3f]">
                ELECTRO<span className="text-[#ff3f6c]">VA</span>
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              India's premium electronics shopping destination. Curating high-performance laptops,
              audio, OLED TVs, gaming systems and intelligent home appliances.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span>1800-420-ELECTRO (Toll Free)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <span>support@electrova.com</span>
              </p>
            </div>
          </div>

          {/* Col 2: Major Electronics */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Personal Tech
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <button
                  onClick={() => selectCategory('Laptops')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Laptops & Ultrabooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Tablets')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Tablets & Graphic Pads
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Smart Watches')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Smart Watches & Fitness
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Headphones')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Studio ANC Headphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Earbuds')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  True Wireless Earbuds
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Bluetooth Speakers')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Bluetooth Speakers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Entertainment & Gaming */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Cinema & Gaming
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <button
                  onClick={() => selectCategory('Smart TVs')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  4K OLED & QLED TVs
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Gaming Consoles')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Next-Gen Gaming Consoles
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Gaming Accessories')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Pro Gaming Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Digital Cameras')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Mirrorless Cameras
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Projectors')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  4K Laser Projectors
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Home Appliances')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Robotic Cleaners & Dyson
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Computer & Peripherals */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Work & Productivity
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <button
                  onClick={() => selectCategory('Monitors')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Curved & 4K Monitors
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Keyboards')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Mechanical Keyboards
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Computer Mouse')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Precision Mice
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Printers')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  InkTank & Laser Printers
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Power Banks')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Laptop Power Banks
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectCategory('Networking Devices')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Wi-Fi 7 Mesh Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Customer Policies */}
          <div className="space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Customer Support
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <button
                  onClick={() => setActiveView('orders')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Track Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('profile')}
                  className="hover:text-[#ff3f6c] transition-colors"
                >
                  Customer Account
                </button>
              </li>
              <li>
                <span className="text-gray-500">Shipping & Returns</span>
              </li>
              <li>
                <span className="text-gray-500">Warranty Policy</span>
              </li>
              <li>
                <span className="text-gray-500">Privacy & Terms</span>
              </li>
              <li>
                <span className="text-gray-500">Grievance Officer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-[#eaeaec] flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <p>© 2026 ELECTROVA Electronics Retail Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with precision for seamless electronics shopping</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
