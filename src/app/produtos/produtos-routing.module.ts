import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { DetalheProductoComponent } from './detalhe-producto/detalhe-producto.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path:":id", component: DetalheProductoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
