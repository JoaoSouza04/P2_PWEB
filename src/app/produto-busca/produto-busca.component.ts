import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';
import { Subscriber } from 'rxjs';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-busca',
  templateUrl: './produto-busca.component.html',
  styleUrls: ['./produto-busca.component.css']
})
export class ProdutoBuscaComponent {
  Produtos: Produto[] = [];
  constructor (private route: ActivatedRoute, private http: HttpClient, private produtoService: ProdutoService) {};
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const busca = params['query'];

      if(busca){
        this.produtoService.atualizarTermoPesquisa(busca);
        this.buscarProdutos(busca);
      }else{
        
      }
    }); 
  }
  buscarProdutos(query: string) {
    this.http.get<Produto[]>('url' + query)
      .subscribe(produtos => this.Produtos = produtos);
  }
}
