import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCategory } from '../types';

interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  category: ProductCategory;
  bgGradient: string;
  image: string;
}

const BANNERS: BannerSlide[] = [
  {
    id: 'b1',
    badge: 'FLAGSHIP LAUNCH',
    title: 'Apple MacBook Pro M3 Max',
    highlight: 'Up to ₹25,000 Off + No Cost EMI',
    description: '16-core CPU powerhouse with Liquid Retina XDR 120Hz display for creators.',
    buttonText: 'Shop Pro Laptops',
    category: 'Laptops',
    bgGradient: 'from-gray-950 via-slate-900 to-zinc-900',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&auto=format&fit=crop&q=80',
  },
  {
    id: 'b2',
    badge: 'SOUND REVOLUTION',
    title: 'Sony WH-1000XM5 & Bose Ultra',
    highlight: 'Flat 20% Off + Free Travel Case',
    description: 'Industry-leading noise cancellation with spatial audio & 30-hour battery life.',
    buttonText: 'Explore Audio Gear',
    category: 'Headphones',
    bgGradient: 'from-zinc-900 via-neutral-900 to-stone-900',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=80',
  },
  {
    id: 'b3',
    badge: 'NEXT-GEN GAMING FEST',
    title: 'PlayStation 5 Slim & Xbox Series X',
    highlight: 'Bundles starting ₹49,990',
    description: 'True 4K 120FPS ray-traced gaming with ultra-fast NVMe SSD loading.',
    buttonText: 'Grab Gaming Deals',
    category: 'Gaming Consoles',
    bgGradient: 'from-slate-950 via-indigo-950 to-neutral-950',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1000&auto=format&fit=crop&q=80',
  },
  {
    id: 'b4',
    badge: 'CINEMATIC LIVING',
    title: 'Sony BRAVIA & Samsung Neo QLED TVs',
    highlight: 'Up to 30% Off + 3 Years Warranty',
    description: 'Cognitive Processor XR & Quantum Mini LEDs transform your living room.',
    buttonText: 'View Smart TVs',
    category: 'Smart TVs',
    bgGradient: 'from-gray-900 via-zinc-900 to-black',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1000&auto=format&fit=crop&q=80',
  },
];

export const HeroBanners: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { selectCategory } = useStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = BANNERS[current];

  return (
    <section className="relative overflow-hidden bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-r ${slide.bgGradient} text-white shadow-xl min-h-[380px] sm:min-h-[420px] flex items-center transition-all duration-700`}>
          {/* Background image overlay */}
          <div className="absolute right-0 inset-y-0 w-full lg:w-1/2 overflow-hidden opacity-35 lg:opacity-75 mix-blend-luminosity lg:mix-blend-normal">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transition-all duration-700 transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 lg:via-transparent to-transparent"></div>
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-xl p-6 sm:p-12 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff3f6c] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>{slide.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {slide.title}
            </h1>

            <p className="text-base sm:text-xl font-bold text-[#ff6b8b] tracking-wide">
              {slide.highlight}
            </p>

            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed line-clamp-2 max-w-md">
              {slide.description}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => selectCategory(slide.category)}
                className="px-6 py-3 bg-white hover:bg-gray-100 text-[#282c3f] font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-lg flex items-center gap-2 group"
              >
                <span>{slide.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-[#ff3f6c] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine Brand Warranty</span>
              </div>
            </div>
          </div>

          {/* Previous / Next Slide buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % BANNERS.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? 'w-8 bg-[#ff3f6c]' : 'w-2 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
