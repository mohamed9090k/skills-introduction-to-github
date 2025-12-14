import { motion, AnimatePresence } from 'framer-motion';
import { perfumes } from '../data/perfumes';
import { useCatalog } from '../hooks/useCatalog';
import { CatalogFilters } from './CatalogFilters';
import { ProductCard } from './ProductCard';

export const Catalog: React.FC = () => {
  const { filters, setFilters, filteredPerfumes, minPrice, maxPrice } = useCatalog(perfumes);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Premium Fragrances
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Discover your signature scent from our curated collection
          </motion.p>
        </header>

        <CatalogFilters
          filters={filters}
          onFilterChange={setFilters}
          resultCount={filteredPerfumes.length}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        <AnimatePresence mode="wait">
          {filteredPerfumes.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No fragrances found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We couldn't find any perfumes matching your criteria. Try adjusting your filters.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredPerfumes.map((perfume, index) => (
                <ProductCard key={perfume.id} perfume={perfume} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredPerfumes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center text-gray-600"
          >
            <p className="text-sm">
              Showing {filteredPerfumes.length} of {perfumes.length} fragrances
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
