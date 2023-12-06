import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CestaService {
  private carrinho: Produto[] = [];
  private carrinhoSubject = new BehaviorSubject<Produto[]>(this.carrinho);

  constructor(private http: HttpClient) { }

  getCarrinho(): Observable<Produto[]> {
    return this.carrinhoSubject.asObservable();
  }

  adicionarItemAoCarrinho(item: Produto): void {
    const itemExistente = this.carrinho.find((i) => i.codigo === item.codigo);

    if (itemExistente) {
      itemExistente.quantidade += item.quantidade;
    } else {
      this.carrinho.push({ ...item });
    }

    this.atualizarCarrinho();
  }

  private atualizarCarrinho(): void {
    this.carrinhoSubject.next([...this.carrinho]);
  }

  adicionarProduto(produto: Produto) {
    const produtosNaCesta = this.carrinhoSubject.value;
    produtosNaCesta.push(produto);
    this.carrinhoSubject.next(produtosNaCesta);
  }

  public gravar(obj: Produto) {
    this.http.post<String>("http://localhost:4300/api/cesta", obj)
      .subscribe();
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:4300/api/cesta");
  }

  apagarProdutos(): Observable<String> {
    return this.http.delete<String>("http://localhost:4300/api/cesta");
  }
}