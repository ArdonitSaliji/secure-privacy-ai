import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure, searchProductsSuccess, searchProductsFailure } from './product.actions';
import { ProductState } from './product.model';

export const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, loading: false, products, filteredProducts: products })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(searchProductsSuccess, (state, { products }) => ({ ...state, filteredProducts: products })),
  on(searchProductsFailure, (state, { error }) => ({ ...state, error }))
);