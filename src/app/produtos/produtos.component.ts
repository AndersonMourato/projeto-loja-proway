import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const produtos = this.produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const search = params.get("search")?.toLowerCase();
      if(search){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(search));
        return
      }
      
      this.produtos = produtos;
    });

  }


}
