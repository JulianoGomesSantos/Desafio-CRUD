// src/app/models/product.model.ts

export interface Product {
    id?: number;
    name: string;
    category_id: number;
    value: number;
    expiration_date: string;
    stock_quantity: number;
    perishable: boolean;
  }
  