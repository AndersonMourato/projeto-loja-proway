import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalheProductoComponent } from './detalhe-producto/detalhe-producto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalheProductoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
