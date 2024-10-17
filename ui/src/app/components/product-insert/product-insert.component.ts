import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service';
import { Product } from '../../entities/product';

@Component({
  selector: 'app-product-insert',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-insert.component.html',
  styleUrl: './product-insert.component.css'
})
export class ProductInsertComponent {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    // Initialize the form with default values and validation
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      isAvailable: [false]
    });
  }

  // This method is triggered when the form is submitted
  onSubmit() {
    if (this.productForm.valid) {
      // Create a product object from form values
      const newProduct: Product = this.productForm.value;

      // Call the service method to create the product via POST
      this.productService.createProduct(newProduct).subscribe({
        next: (product) => {
          console.log('Product inserted successfully:', product);
          // Optionally, reset the form after submission
          this.productForm.reset();
        },
        error: (error) => {
          console.error('Error inserting product:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

}
