import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product-service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './state/product/product.reducer';
import { ProductEffects } from './state/product/product.effects';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(withFetch()),
    ProductService,
    CommonModule,
    provideStore({ productState: productReducer }),
    provideEffects([ProductEffects]),

  ]
};
