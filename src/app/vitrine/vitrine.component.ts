import { Component } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: '../vitrine/vitrine.component.html',
  styleUrls: ['../vitrine/vitrine.component.css']
})
export class VitrineComponent {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }
}