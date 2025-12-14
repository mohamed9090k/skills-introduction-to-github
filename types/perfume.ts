export interface Perfume {
  id: string;
  name: string;
  house: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  scentFamily: string;
  concentration: string;
  description?: string;
}

export type ScentFamily = 'Floral' | 'Citrus' | 'Woody' | 'Oriental' | 'Fresh' | 'Gourmand';
export type Concentration = 'Eau de Parfum' | 'Eau de Toilette' | 'Parfum' | 'Eau de Cologne';
export type SortOrder = 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';

export interface FilterState {
  search: string;
  scentFamilies: ScentFamily[];
  concentrations: Concentration[];
  priceRange: [number, number];
  sortOrder: SortOrder;
}
