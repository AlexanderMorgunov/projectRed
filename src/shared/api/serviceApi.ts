import { AxiosResponse } from "axios";
import { IPayloadApi } from "../types/types";
import { $api } from ".";

export const ProductsApi = async (skip?: number): Promise<IPayloadApi> => {
  const response: AxiosResponse<IPayloadApi> = await $api.get<IPayloadApi>(
    `products?limit=10${skip ? `&skip=${skip}` : ""}`
  );
  return response.data;
};

export const CategoriesApi = async (): Promise<string[]> => {
  const response: AxiosResponse<string[]> = await $api.get<string[]>(
    "products/categories"
  );
  return response.data;
};
