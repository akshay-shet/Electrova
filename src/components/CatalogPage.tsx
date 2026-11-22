import React from 'react';
import { useStore } from '../context/StoreContext';
import { ProductFilterSidebar } from './ProductFilterSidebar';
import { ProductCard } from './ProductCard';
import { SortOption } from '../types';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export const CatalogPage: React.FC = () => {
  const { filteredProducts, filters, setSortBy, selectCategory } = useStore();
  const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);

  const sortOptions: { label: string; value: SortOption }[] = [
    { label: 'Recommended', value: 'recommended' },
    { label: 'Price: Low to High', value: 'price-low-to-high' },
    { label: 'Price: High to Low', value: 'price-high-to-low' },
    { label: 'Customer Rating', value: 'customer-rating' },
    { label: 'Better Discount', value: 'better-discount' },
    { label: 'Newest Arrivals', value: 'newest' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb & Title Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#eaeaec] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <span
              onClick={() => selectCategory(null)}
              className="cursor-pointer hover:text-[#ff3f6c]"
            >
              Home
            </span>
            <span>/</span>
            <span className="font-semibold text-gray-800">
              {filters.category ? filters.category : 'All Electronics Products'}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-[#282c3f] tracking-tight uppercase flex items-center gap-3">
            <span>{filters.category ? filters.category : 'All Electronics Catalog'}</span>
            <span className="text-sm font-normal text-gray-400 lowercase">
              - {filteredProducts.length} items
            </span>
          </h1>
        </div>

        {/* Sorting Dropdown & Mobile Filter Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 border border-gray-300 rounded text-xs font-bold text-gray-700 bg-white"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 bg-white shadow-sm">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-xs text-gray-500 font-semibold hidden sm:inline">Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent text-xs font-bold text-[#282c3f] focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout: Left-Side Filter Sidebar + Right-Side Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
        {/* Left Filter Sidebar - desktop md:col-span-3 */}
        <div className="hidden md:block md:col-span-3">
          <div className="sticky top-28">
            <ProductFilterSidebar />
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="md:hidden col-span-1 mb-4">
            <ProductFilterSidebar />
          </div>
        )}

        {/* Right Product Grid - md:col-span-9 */}
        <div className="md:col-span-9">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#f5f5f6] rounded-xl border border-[#eaeaec] p-8">
              <p className="text-base font-bold text-[#282c3f]">No electronics found matching your filters</p>
              <p className="text-xs text-gray-500 mt-1 mb-4">Try clearing active brand or price filters to see more products.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
