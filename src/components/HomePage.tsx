import React from 'react';
import { HeroBanners } from './HeroBanners';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';
import { Sparkles, TrendingUp, Award, Zap, Gamepad2, Headphones, Laptop, Home, ArrowRight } from 'lucide-react';
import { ProductCategory } from '../types';

export const HomePage: React.FC = () => {
  const { products, selectCategory } = useStore();

  // Curated collections for the homepage sections
  const trendingProducts = products.filter((p) => p.isTrending).slice(0, 5);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 5);
  const todaysDeals = products.filter((p) => p.isDealOfTheDay || p.discountPercent >= 18).slice(0, 5);
  const gamingCollection = products.filter((p) => p.category === 'Gaming Consoles' || p.category === 'Gaming Accessories').slice(0, 5);
  const audioCollection = products.filter((p) => p.category === 'Headphones' || p.category === 'Earbuds' || p.category === 'Bluetooth Speakers').slice(0, 5);
  const laptopCollection = products.filter((p) => p.category === 'Laptops').slice(0, 5);
  const smartHomeElectronics = products.filter((p) => p.category === 'Home Appliances' || p.category === 'Smart TVs' || p.category === 'Networking Devices').slice(0, 5);
  const newArrivals = products.filter((p) => p.isNewArrival || p.discountPercent <= 12).slice(0, 5);

  const topBrands = [
    { name: 'Apple', logo: '🍎', desc: 'M3 Silicon & Pro Gear' },
    { name: 'Sony', logo: '⚡', desc: 'Audio & Alpha Cameras' },
    { name: 'Samsung', logo: '🌌', desc: 'Neo QLED & Tablets' },
    { name: 'Dell', logo: '💻', desc: 'XPS & UltraSharp' },
    { name: 'Logitech', logo: '🖱️', desc: 'MX Master & G PRO' },
    { name: 'Dyson', logo: '🌀', desc: 'Laser V15 Vacuums' },
    { name: 'Bose', logo: '🎧', desc: 'QuietComfort Ultra' },
    { name: 'Razer', logo: '🐍', desc: 'Viper & Huntsman' },
  ];

  const renderSectionHeader = (
    title: string,
    subtitle: string,
    icon: React.ReactNode,
    categoryTarget?: ProductCategory
  ) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#f5f5f6] border border-[#eaeaec] flex items-center justify-center text-[#ff3f6c]">
          {icon}
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-black text-[#282c3f] tracking-tight uppercase">
            {title}
          </h2>
          <p className="text-xs text-gray-500 font-medium">{subtitle}</p>
        </div>
      </div>
      <button
        onClick={() => selectCategory(categoryTarget || null)}
        className="text-xs font-bold text-[#ff3f6c] hover:underline flex items-center gap-1 self-start sm:self-auto"
      >
        <span>View All</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );

  return (
    <div className="space-y-12 pb-16 bg-[#ffffff]">
      {/* 1. Promotional Hero Banners */}
      <HeroBanners />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* 3. Trending Electronics */}
        <section>
          {renderSectionHeader(
            'Trending Electronics',
            'Hot right now across India - top searched gadgets and tech',
            <TrendingUp className="w-5 h-5" />
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {trendingProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* 4. Best Sellers */}
        <section className="bg-[#f5f5f6] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-10 rounded-2xl">
          {renderSectionHeader(
            'Best Sellers',
            'Customer-favorite electronics with highest repeat ratings',
            <Award className="w-5 h-5 text-amber-500" />
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* 5. Top Brands Showcase Strip */}
        <section className="py-4">
          <div className="text-center mb-6">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              OFFICIAL BRAND PARTNERS
            </h2>
            <p className="text-base sm:text-lg font-black text-[#282c3f] mt-1">
              Shop 100% Genuine Certified Brands
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {topBrands.map((b) => (
              <div
                key={b.name}
                onClick={() => selectCategory(null)}
                className="bg-white border border-[#eaeaec] rounded-xl p-3.5 text-center hover:border-[#ff3f6c] hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                  {b.logo}
                </div>
                <h3 className="text-xs font-black text-[#282c3f] group-hover:text-[#ff3f6c]">
                  {b.name}
                </h3>
                <p className="text-[10px] text-gray-400 truncate mt-0.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Today's Deals */}
        <section>
          {renderSectionHeader(
            "Today's Deals",
            'Unbeatable limited-time discounts with express same-day shipping',
            <Zap className="w-5 h-5 text-amber-500" />
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {todaysDeals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* 7. Gaming Collections */}
        <section className="bg-gradient-to-r from-gray-900 to-slate-900 text-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-10 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#ff3f6c]">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase">
                  Gaming Consoles & Gear
                </h2>
                <p className="text-xs text-gray-300 font-medium">
                  PlayStation 5, Xbox Series X, Nintendo Switch & Esports Gear
                </p>
              </div>
            </div>
            <button
              onClick={() => selectCategory('Gaming Consoles')}
              className="text-xs font-bold text-[#ff6b8b] hover:underline flex items-center gap-1"
            >
              <span>Explore Gaming Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-[#282c3f]">
            {gamingCollection.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* 8. Audio Collections */}
        <section>
          {renderSectionHeader(
            'Audio Collections',
            'Over-ear studio ANC headphones, true wireless earbuds & Marshall speakers',
            <Headphones className="w-5 h-5" />,
            'Headphones'
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {audioCollection.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* 9. Laptop Collections */}
        <section>
          {renderSectionHeader(
            'Laptop Collections',
            'Apple M3 silicon, OLED workstations, and ultra-thin executive notebooks',
            <Laptop className="w-5 h-5" />,
            'Laptops'
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {laptopCollection.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* 10. Smart Home Electronics */}
        <section className="bg-[#f5f5f6] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-10 rounded-2xl">
          {renderSectionHeader(
            'Smart Home Electronics',
            '4K OLED TVs, Dyson smart purifiers, robotic vacuums & Wi-Fi 7 mesh',
            <Home className="w-5 h-5" />,
            'Smart TVs'
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {smartHomeElectronics.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* 11. New Arrivals */}
        <section>
          {renderSectionHeader(
            'New Arrivals',
            'Freshly launched high-end electronics just added to the catalog',
            <Sparkles className="w-5 h-5 text-indigo-500" />
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
