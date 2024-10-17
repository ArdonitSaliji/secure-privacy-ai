import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../entities/product';
import { Observable } from 'rxjs';
import { ProductState } from '../../state/product/product.model';
import { Store } from '@ngrx/store';
import { selectLoading, selectFilteredProducts } from '../../state/product/product.selectors';
import { loadProducts, searchProducts } from '../../state/product/product.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  searchTerm: string = '';


  constructor(private store: Store<{ productState: ProductState }>) {
    this.products$ = this.store.select(selectFilteredProducts);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  onSearch(): void {
    this.store.dispatch(searchProducts({ searchTerm: this.searchTerm }));
  }

}