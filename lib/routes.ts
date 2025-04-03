export const Routes = {
  HOME: "/",
  LOGIN: "/login",
  ALL_PRODUCTS: "/products",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,

  // Dashboard
  PRODUCTS: "/dashboard/products",
  ADD_PRODUCT: "/dashboard/products/add",
  CATEGORIES: "/dashboard/lookups",
  MESSAGES: "/dashboard/inbox",
};
