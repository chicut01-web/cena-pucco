export type DishCategory = 'Antipasti' | 'Primo' | 'Secondi';

export interface Dish {
  id: string;
  name: string;
  description?: string;
  category: DishCategory;
  image: string;
  // New detailed fields
  ingredients?: string[];
  pairing?: string;
  curiosity?: string;
}

export interface GeneratedImageCache {
  [key: string]: string;
}