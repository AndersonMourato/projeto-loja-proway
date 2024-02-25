import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacoesService } from 'src/app/notificacoes.service';
import { ProdutoService } from 'src/app/produto.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-detalhe-producto',
  templateUrl: './detalhe-producto.component.html',
  styleUrls: ['./detalhe-producto.component.css']
})
export class DetalheProductoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private notificacao: NotificacoesService,  
    private carrinhoService: CarrinhoService,

  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacao.notificar("Produto adicionado ao carrinho.");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarCarrinho(produto);
  }

}
