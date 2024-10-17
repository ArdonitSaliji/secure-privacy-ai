// src/app/state/product/product.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product-service';
import { loadProducts, loadProductsSuccess, loadProductsFailure, searchProducts, searchProductsSuccess, searchProductsFailure } from './product.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '../../entities/product';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}


  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getAllProducts().pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );

  searchProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchProducts),
      mergeMap(({ searchTerm }) =>
        this.productService.searchProducts(searchTerm).pipe( // Call your service method here
          map((products: Product[]) => searchProductsSuccess({ products })),
          catchError(error => of(searchProductsFailure({ error })))
        )
      )
    )
  );

}
