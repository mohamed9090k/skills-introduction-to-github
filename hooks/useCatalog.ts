import { useState, useMemo } from 'react';
import { Perfume, FilterState } from '../types/perfume';

export const useCatalog = (perfumes: Perfume[]) => {
  const minPrice = Math.min(...perfumes.map((p) => p.price));
  const maxPrice = Math.max(...perfumes.map((p) => p.price));

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    scentFamilies: [],
    concentrations: [],
    priceRange: [minPrice, maxPrice],
    sortOrder: 'name-asc',
  });

  const filteredAndSortedPerfumes = useMemo(() => {
    let result = [...perfumes];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter((perfume) => {
        const searchableText = [
          perfume.name,
          perfume.house,
          ...perfume.notes.top,
          ...perfume.notes.heart,
          ...perfume.notes.base,
        ]
          .join(' ')
          .toLowerCase();
        return searchableText.includes(searchLower);
      });
    }

    if (filters.scentFamilies.length > 0) {
      result = result.filter((perfume) =>
        filters.scentFamilies.includes(perfume.scentFamily as any)
      );
    }

    if (filters.concentrations.length > 0) {
      result = result.filter((perfume) =>
        filters.concentrations.includes(perfume.concentration as any)
      );
    }

    result = result.filter(
      (perfume) =>
        perfume.price >= filters.priceRange[0] &&
        perfume.price <= filters.priceRange[1]
    );

    switch (filters.sortOrder) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
      default:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [perfumes, filters]);

  return {
    filters,
    setFilters,
    filteredPerfumes: filteredAndSortedPerfumes,
    minPrice,
    maxPrice,
  };
};
