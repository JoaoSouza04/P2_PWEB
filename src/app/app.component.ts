import { Component } from '@angular/core';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p1';
  termoPesquisa: string = "";

  constructor (private produtoService: ProdutoService) {};

  pesquisarProdutos(): void {
    this.produtoService.atualizarTermoPesquisa(this.termoPesquisa);
  }
}



