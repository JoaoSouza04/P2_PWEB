import { Component } from '@angular/core';
import { Produto } from '../models/produto.model';
import { CestaService } from '../service/cesta.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: '../cesta/cesta.component.html',
  styleUrls: ['../vitrine/vitrine.component.css']
})
export class CestaComponent {
  produtos: Produto[] = [];
  total: number = 0;

  constructor(private cestaService: CestaService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.cestaService.getProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
        produtos.forEach(produto => {
          this.total += produto.preco;
        });
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  limparCarrinho(): void {
    this.cestaService.apagarProdutos().subscribe()
  }
}
