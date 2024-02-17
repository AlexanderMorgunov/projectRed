import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPayloadApi, IProduct } from "../../types/types";
import { GetAllProductsForCategory, ProductsApi } from "../../api/serviceApi";
import { CategoriesApi } from "../../api/serviceApi";

interface IProductsState {
  products: Array<IProduct>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  categories: string[];
  activeCategory: string;
  productsForCategory: Array<IProduct>;
  productsTotal: number;
  productsSkip: number;
}

const initialState = {
  products: [],
  categories: [],
  status: "idle",
  error: null,
  activeCategory: "All",
  productsForCategory: [],
  productsTotal: 0,
  productsSkip: 0,
};

export const getProducts = createAsyncThunk<
  IPayloadApi,
  number,
  { rejectValue: string }
>("products/getProducts", async (skip, thunkAPI) => {
  try {
    const response = await ProductsApi(skip);
    return response;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    } else {
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
});

export const getCategories = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("products/getCategories", async (_, thunkAPI) => {
  try {
    const response = await CategoriesApi();
    return response;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

interface IGetProductsForCategory {
  category: string;
}

export const getProductsForCategory = createAsyncThunk<
  IPayloadApi,
  IGetProductsForCategory,
  { rejectValue: string }
>("products/getProductsForCategory", async (prop, thunkAPI) => {
  try {
    const response = await GetAllProductsForCategory(prop.category);
    return response;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    } else {
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: initialState as IProductsState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        (state.status = "loading"), (state.error = null);
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [...state.products, ...action.payload.products];
        state.error = null;
        state.productsTotal = action.payload.total;
        state.productsSkip = state.productsSkip + 10;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.error = null;
        state.status = "succeeded";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProductsForCategory.fulfilled, (state, action) => {
        state.productsForCategory =
          state.productsForCategory.length > 1 &&
          state.productsForCategory[0].category ===
            action.payload.products[0].category
            ? [...state.productsForCategory, ...action.payload.products]
            : action.payload.products;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getProductsForCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(getProductsForCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export default productsSlice.reducer;
export const { setActiveCategory } = productsSlice.actions;
