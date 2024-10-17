import { createSelector } from '@ngrx/store';
import { ProductState } from './product.model';

export const selectProductState = (state: { productState: ProductState }) => state.productState;

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading
);

export const selectFilteredProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.filteredProducts
);

