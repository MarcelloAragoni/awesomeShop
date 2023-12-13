export const BASE_URL = "http://localhost:8000/products";

export const DEFAULT_SORT = "name";
export const DEFAULT_SORT_ORDER = "DESC";

export const sortParams = {
  _sort: DEFAULT_SORT,
  _order: DEFAULT_SORT_ORDER,
};

export const CategoriesFilterOptions = [
  {
    name: "books",
  },
  {
    name: "food",
  },
  {
    name: "games",
  },
];

export const PriceFilterOptions = [
  {
    name: "10-20",
  },
  {
    name: "20-30",
  },
  {
    name: "30-40",
  },
];

export const Products = [
  {
    id: 1,
    name: "Whispers of Eternity",
    price: 20.0,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 2,
    name: "Chronicles of the Silver Serpent",
    price: 45.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 3,
    name: "The Enigma of Nebula's Veil",
    price: 32.0,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 4,
    name: "Echoes in the Shadows",
    price: 99.99,
    category: "fiction",
    image: "https://source.unsplash.com/random/800x600",
  },
];
