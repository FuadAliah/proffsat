/* eslint-disable no-unused-vars */
export interface ProductType {
  id: string;
  descriptionAR: string;
  descriptionEN: string;
  image: string;
  createdAt: string;
  nameAR: string;
  size: string;
  brand: string;
  nameEN: string;
  price: string;
  category: string;
}

export interface ProductAPI {
  map(
    arg0: (doc: ProductType) => {
      id: string;
      nameEN: string;
      nameAR: string;
      brand: string;
      category: string;
      price: string;
      descriptionEN: string;
      descriptionAR: string;
      size: string;
      image: string;
    }
  ): unknown;
  id: string;
  descriptionEN: { stringValue: string };
  brand: { stringValue: string };
  size: { stringValue: string };
  image: { stringValue: string };
  nameEN: { stringValue: string };
  category: { stringValue: string };
  createdAt: {
    stringValue: string;
    timestampValue: string;
  };
  price: { stringValue: string };
  nameAR: { stringValue: string };
  descriptionAR: { stringValue: string };
}
