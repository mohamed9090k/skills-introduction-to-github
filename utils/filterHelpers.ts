import { Perfume, ScentFamily, Concentration } from '../types/perfume';

export const filterBySearch = (perfumes: Perfume[], search: string): Perfume[] => {
  if (!search) return perfumes;
  
  const searchLower = search.toLowerCase();
  return perfumes.filter((perfume) => {
    const searchableText = [
      perfume.name,
      perfume.house,
      perfume.description || '',
      ...perfume.notes.top,
      ...perfume.notes.heart,
      ...perfume.notes.base,
    ]
      .join(' ')
      .toLowerCase();
    return searchableText.includes(searchLower);
  });
};

export const filterByScentFamily = (
  perfumes: Perfume[],
  families: ScentFamily[]
): Perfume[] => {
  if (families.length === 0) return perfumes;
  return perfumes.filter((perfume) =>
    families.includes(perfume.scentFamily as ScentFamily)
  );
};

export const filterByConcentration = (
  perfumes: Perfume[],
  concentrations: Concentration[]
): Perfume[] => {
  if (concentrations.length === 0) return perfumes;
  return perfumes.filter((perfume) =>
    concentrations.includes(perfume.concentration as Concentration)
  );
};

export const filterByPriceRange = (
  perfumes: Perfume[],
  minPrice: number,
  maxPrice: number
): Perfume[] => {
  return perfumes.filter(
    (perfume) => perfume.price >= minPrice && perfume.price <= maxPrice
  );
};

export const sortPerfumes = (
  perfumes: Perfume[],
  sortOrder: string
): Perfume[] => {
  const sorted = [...perfumes];
  
  switch (sortOrder) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
};

export const getPriceRange = (perfumes: Perfume[]): [number, number] => {
  if (perfumes.length === 0) return [0, 1000];
  
  const prices = perfumes.map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
};

export const getScentFamilies = (perfumes: Perfume[]): ScentFamily[] => {
  const families = new Set<ScentFamily>();
  perfumes.forEach((perfume) => {
    families.add(perfume.scentFamily as ScentFamily);
  });
  return Array.from(families).sort();
};

export const getConcentrations = (perfumes: Perfume[]): Concentration[] => {
  const concentrations = new Set<Concentration>();
  perfumes.forEach((perfume) => {
    concentrations.add(perfume.concentration as Concentration);
  });
  return Array.from(concentrations).sort();
};

export const getTopRatedPerfumes = (
  perfumes: Perfume[],
  count: number = 10
): Perfume[] => {
  return [...perfumes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
};

export const getMostReviewedPerfumes = (
  perfumes: Perfume[],
  count: number = 10
): Perfume[] => {
  return [...perfumes]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, count);
};

export const getPerfumesByHouse = (
  perfumes: Perfume[],
  house: string
): Perfume[] => {
  return perfumes.filter(
    (perfume) => perfume.house.toLowerCase() === house.toLowerCase()
  );
};
