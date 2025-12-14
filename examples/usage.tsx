import { Catalog, CatalogFilters, ProductCard } from '../components';
import { perfumes } from '../data/perfumes';
import { useCatalog } from '../hooks/useCatalog';

// Example 1: Using the complete Catalog component (recommended)
export function Example1() {
  return <Catalog />;
}

// Example 2: Using individual components with custom layout
export function Example2() {
  const { filters, setFilters, filteredPerfumes, minPrice, maxPrice } = useCatalog(perfumes);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex lg:gap-8">
        {/* Sidebar filters */}
        <aside className="lg:w-1/4 mb-8 lg:mb-0">
          <CatalogFilters
            filters={filters}
            onFilterChange={setFilters}
            resultCount={filteredPerfumes.length}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </aside>

        {/* Products grid */}
        <main className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPerfumes.map((perfume, index) => (
              <ProductCard key={perfume.id} perfume={perfume} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// Example 3: Custom product card with different styling
export function Example3() {
  const { filteredPerfumes } = useCatalog(perfumes);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {filteredPerfumes.slice(0, 12).map((perfume, index) => (
        <ProductCard key={perfume.id} perfume={perfume} index={index} />
      ))}
    </div>
  );
}

// Example 4: Featured products section
export function Example4() {
  const featuredPerfumes = perfumes
    .filter(p => p.rating >= 4.7)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Fragrances</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {featuredPerfumes.map((perfume, index) => (
          <ProductCard key={perfume.id} perfume={perfume} index={index} />
        ))}
      </div>
    </section>
  );
}

// Example 5: Filter by specific scent family
export function Example5() {
  const woodyPerfumes = perfumes.filter(p => p.scentFamily === 'Woody');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Woody Fragrances</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {woodyPerfumes.map((perfume, index) => (
          <ProductCard key={perfume.id} perfume={perfume} index={index} />
        ))}
      </div>
    </div>
  );
}
