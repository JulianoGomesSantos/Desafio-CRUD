    // src/app/components/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      error => {
        console.error('Error fetching products: ', error);
        // Handle error scenarios appropriately
      }
    );
  }
}
