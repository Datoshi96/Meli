export interface IProductsResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: [string];
  items: [
    {
      id: string;
      title: string;
      price: {
        currency: string;
        amount: number;
        decimals: number;
      };
      picture: string;
      condition: string;
      free_shipping: boolean;
    }
  ];
}

export interface IProductResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: [string];
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  };
}
