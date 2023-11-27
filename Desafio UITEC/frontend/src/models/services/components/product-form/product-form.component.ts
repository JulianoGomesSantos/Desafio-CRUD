// src/app/components/product-form/product-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: '',
    category_id: 0,
    value: 0,
    expiration_date: '',
    stock_quantity: 0,
    perishable: false
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  saveProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      (createdProduct: Product) => {
        console.log('Product created: ', createdProduct);
        // Handle success scenarios, e.g., show success message, redirect, etc.
      },
      error => {
        console.error('Error creating product: ', error);
        // Handle error scenarios appropriately
      }
    );
  }
}
