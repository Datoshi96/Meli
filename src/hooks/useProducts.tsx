import axios from "axios";
import { IProductResponse, IProductsResponse } from "../models/IProducts";

export function useProducts() {
  const getProducts = async (
    search: string | null
  ): Promise<IProductsResponse> => {
    const config = {
      method: "get",
      url: `http://localhost:8000/api/items?q=${search}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.request<IProductsResponse>(config);
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      return error;
    }
  };

  const getProductId = async (id: string): Promise<IProductResponse> => {
    const config = {
      method: "get",
      url: `http://localhost:8000/api/items/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.request<IProductResponse>(config);
      return response.data;
    } catch (error: unknown) {
      console.log(error);
      return error;
    }
  };

  return {
    getProducts,
    getProductId,
  };
}
