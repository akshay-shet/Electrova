import React from 'react';
import { CATEGORIES } from '../data/categories';
import { useStore } from '../context/StoreContext';
import { ProductCategory } from '../types';

export const CategoryNav: React.FC = () => {
  const { selectCategory, filters } = useStore();

  return (
    <section className="bg-white py-6 border-b border-[#eaeaec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-[#282c3f] tracking-tight uppercase">
              SHOP BY CATEGORY
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Explore premium electronics across 20 specialized categories
            </p>
          </div>
          <button
            onClick={() => selectCategory(null)}
            className="text-xs font-bold text-[#ff3f6c] hover:underline"
          >
            View All ({CATEGORIES.length})
          </button>
        </div>

        {/* Scrollable Category Grid / Carousel */}
        <div className="flex items-center gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.id as ProductCategory)}
                className={`flex flex-col items-center flex-shrink-0 w-24 sm:w-28 group text-center transition-all ${
                  isSelected ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 transition-all duration-200 ${
                    isSelected
                      ? 'ring-2 ring-[#ff3f6c] shadow-md'
                      : 'border-2 border-transparent group-hover:border-[#ff3f6c] group-hover:shadow-sm'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span
                  className={`mt-2 text-xs font-bold truncate w-full tracking-tight transition-colors ${
                    isSelected ? 'text-[#ff3f6c]' : 'text-[#282c3f] group-hover:text-[#ff3f6c]'
                  }`}
                >
                  {cat.shortName}
                </span>
                <span className="text-[10px] text-gray-400 font-normal truncate w-full hidden sm:block">
                  {cat.tagline.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
