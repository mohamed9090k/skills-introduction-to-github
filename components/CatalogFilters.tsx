import { motion } from 'framer-motion';
import { FilterState, ScentFamily, Concentration, SortOrder } from '../types/perfume';

interface CatalogFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  resultCount: number;
  minPrice: number;
  maxPrice: number;
}

const scentFamilies: ScentFamily[] = ['Floral', 'Citrus', 'Woody', 'Oriental', 'Fresh', 'Gourmand'];
const concentrations: Concentration[] = ['Eau de Parfum', 'Eau de Toilette', 'Parfum', 'Eau de Cologne'];

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  filters,
  onFilterChange,
  resultCount,
  minPrice,
  maxPrice,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const toggleScentFamily = (family: ScentFamily) => {
    const newFamilies = filters.scentFamilies.includes(family)
      ? filters.scentFamilies.filter((f) => f !== family)
      : [...filters.scentFamilies, family];
    onFilterChange({ ...filters, scentFamilies: newFamilies });
  };

  const toggleConcentration = (concentration: Concentration) => {
    const newConcentrations = filters.concentrations.includes(concentration)
      ? filters.concentrations.filter((c) => c !== concentration)
      : [...filters.concentrations, concentration];
    onFilterChange({ ...filters, concentrations: newConcentrations });
  };

  const handlePriceChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = [...filters.priceRange] as [number, number];
    newRange[index] = value;
    onFilterChange({ ...filters, priceRange: newRange });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, sortOrder: e.target.value as SortOrder });
  };

  const clearFilters = () => {
    onFilterChange({
      search: '',
      scentFamilies: [],
      concentrations: [],
      priceRange: [minPrice, maxPrice],
      sortOrder: 'name-asc',
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.scentFamilies.length > 0 ||
    filters.concentrations.length > 0 ||
    filters.priceRange[0] !== minPrice ||
    filters.priceRange[1] !== maxPrice;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Discover Perfumes</h2>
          <p className="text-sm text-gray-600 mt-1">
            {resultCount} {resultCount === 1 ? 'fragrance' : 'fragrances'} found
          </p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              value={filters.search}
              onChange={handleSearchChange}
              placeholder="Search by name, house, or notes..."
              className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Scent Family
          </label>
          <div className="flex flex-wrap gap-2">
            {scentFamilies.map((family) => {
              const isActive = filters.scentFamilies.includes(family);
              return (
                <motion.button
                  key={family}
                  onClick={() => toggleScentFamily(family)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {family}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Concentration
          </label>
          <div className="grid grid-cols-2 gap-2">
            {concentrations.map((concentration) => {
              const isActive = filters.concentrations.includes(concentration);
              return (
                <button
                  key={concentration}
                  onClick={() => toggleConcentration(concentration)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    isActive
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {concentration}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
          </div>
        </div>

        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            id="sort"
            value={filters.sortOrder}
            onChange={handleSortChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-white"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating-desc">Rating (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
