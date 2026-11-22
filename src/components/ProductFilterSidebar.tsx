import React from 'react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/categories';
import { ProductCategory } from '../types';
import { RotateCcw } from 'lucide-react';

export const ProductFilterSidebar: React.FC = () => {
  const { products, filters, setFilters, resetFilters } = useStore();

  // Extract all unique brands from products
  const allBrands = React.useMemo(() => {
    const brandMap: Record<string, number> = {};
    products.forEach((p) => {
      brandMap[p.brand] = (brandMap[p.brand] || 0) + 1;
    });
    return Object.entries(brandMap).sort((a, b) => b[1] - a[1]);
  }, [products]);

  const handleCategorySelect = (cat: ProductCategory | null) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === cat ? null : cat,
    }));
  };

  const handleBrandToggle = (brand: string) => {
    setFilters((prev) => {
      const exists = prev.brands.includes(brand);
      return {
        ...prev,
        brands: exists ? prev.brands.filter((b) => b !== brand) : [...prev.brands, brand],
      };
    });
  };

  const handleRatingSelect = (rating: number) => {
    setFilters((prev) => ({
      ...prev,
      minRating: prev.minRating === rating ? 0 : rating,
    }));
  };

  const handleDiscountSelect = (discount: number) => {
    setFilters((prev) => ({
      ...prev,
      minDiscount: prev.minDiscount === discount ? 0 : discount,
    }));
  };

  return (
    <aside className="w-full bg-white rounded-lg border border-[#eaeaec] p-4 text-[#282c3f] space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#eaeaec]">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
          Filters
        </h2>
        <button
          onClick={resetFilters}
          className="text-[11px] font-bold text-[#ff3f6c] hover:underline flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear All</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
          Categories ({CATEGORIES.length})
        </h3>
        <div className="max-h-52 overflow-y-auto space-y-1.5 pr-1 text-xs">
          <label className="flex items-center gap-2 cursor-pointer py-0.5 hover:text-[#ff3f6c]">
            <input
              type="radio"
              name="cat-filter"
              checked={filters.category === null}
              onChange={() => handleCategorySelect(null)}
              className="accent-[#ff3f6c]"
            />
            <span className="font-semibold text-gray-800">All Categories</span>
          </label>
          {CATEGORIES.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center justify-between gap-2 cursor-pointer py-0.5 hover:text-[#ff3f6c]"
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="cat-filter"
                  checked={filters.category === cat.id}
                  onChange={() => handleCategorySelect(cat.id)}
                  className="accent-[#ff3f6c]"
                />
                <span className="text-gray-700">{cat.name}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="space-y-2.5 pt-4 border-t border-[#eaeaec]">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
          Brand
        </h3>
        <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1 text-xs">
          {allBrands.map(([brand, count]) => {
            const isChecked = filters.brands.includes(brand);
            return (
              <label
                key={brand}
                className="flex items-center justify-between cursor-pointer py-0.5 hover:text-[#ff3f6c]"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleBrandToggle(brand)}
                    className="accent-[#ff3f6c] rounded"
                  />
                  <span className={`text-gray-700 ${isChecked ? 'font-bold text-[#ff3f6c]' : ''}`}>
                    {brand}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2.5 pt-4 border-t border-[#eaeaec]">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
            Price Limit
          </h3>
          <span className="text-xs font-bold text-[#ff3f6c]">
            Up to ₹{filters.priceRange[1].toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min={1000}
          max={400000}
          step={5000}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priceRange: [prev.priceRange[0], Number(e.target.value)],
            }))
          }
          className="w-full accent-[#ff3f6c] cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-gray-400">
          <span>₹1,000</span>
          <span>₹4,00,000+</span>
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="space-y-2 pt-4 border-t border-[#eaeaec]">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
          Customer Rating
        </h3>
        <div className="space-y-1.5 text-xs">
          {[4.5, 4.0, 3.5].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer py-0.5 hover:text-[#ff3f6c]"
            >
              <input
                type="radio"
                name="rating-filter"
                checked={filters.minRating === rating}
                onChange={() => handleRatingSelect(rating)}
                className="accent-[#ff3f6c]"
              />
              <span className="text-gray-700">
                {rating}★ & above
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Discount Range */}
      <div className="space-y-2 pt-4 border-t border-[#eaeaec]">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#282c3f]">
          Discount Range
        </h3>
        <div className="space-y-1.5 text-xs">
          {[10, 15, 20, 25].map((disc) => (
            <label
              key={disc}
              className="flex items-center gap-2 cursor-pointer py-0.5 hover:text-[#ff3f6c]"
            >
              <input
                type="radio"
                name="discount-filter"
                checked={filters.minDiscount === disc}
                onChange={() => handleDiscountSelect(disc)}
                className="accent-[#ff3f6c]"
              />
              <span className="text-gray-700">{disc}% and above</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
