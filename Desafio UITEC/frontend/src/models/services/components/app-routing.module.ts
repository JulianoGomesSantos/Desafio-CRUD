// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Rota padrão redireciona para a lista de produtos
  { path: 'products', component: ProductListComponent }, // Rota para listar os produtos
  { path: 'products/new', component: ProductFormComponent }, // Rota para criar um novo produto
  // Pode adicionar mais rotas aqui conforme necessário para edição, detalhes, etc.
  { path: '**', redirectTo: '/products' } // Rota curinga, redireciona para a lista de produtos caso a rota não seja encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
