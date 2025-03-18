export const Routes = {
  HOME: "/",
  LOGIN: "/login",
  ALL_PRODUCTS: "/allproducts",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,

  // Dashboard
  PRODUCTS: "/dashboard/products",
  ADD_PRODUCT: "/dashboard/products/add",
  CATEGORIES: "/dashboard/categories",
  ADD_CATEGORY: "/dashboard/categories/add",
  BRANDS: "/dashboard/brands",
  ADD_BRAND: "/dashboard/brands/add",
};
