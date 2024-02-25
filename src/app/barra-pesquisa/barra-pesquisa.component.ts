import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produtos } from '../produtos';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  search: string = "";

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){

    if(this.search){
      this.route.navigate(["produtos"], {queryParams: {search: this.search}});
      return
    }

    this.route.navigate(["produtos"]);

  }

}
