import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductInsertComponent } from './components/product-insert/product-insert.component';

export const routes: Routes = [ 
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/insert', component: ProductInsertComponent },
  {
    path: '**',
    redirectTo: '/',
  },
];
