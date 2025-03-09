export const Routes = {
  HOME: "/",
  LOGIN: "/login",
  PRODUCTS: "/dashboard/products",
  ADD_PRODUCT: "/dashboard/products/add",
  PRODUCT_DETAILS: (id: string) => `/products/${id}`,
  CATEGORIES: "/dashboard/categories",
  ADD_CATEGORY: "/dashboard/categories/add",
  BRANDS: "/dashboard/brands",
  ADD_BRAND: "/dashboard/brands/add",
  ALL_PRODUCTS: "/allproducts",
};
