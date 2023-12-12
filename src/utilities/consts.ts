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
