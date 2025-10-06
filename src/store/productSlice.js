import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";
export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     (async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const result = await response.json();
//         dispatch(fetchProducts(result));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     })();
//   };
// }
