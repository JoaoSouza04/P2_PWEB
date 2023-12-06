import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { Produto } from '../models/produto.model';

 
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(private http : HttpClient) {}

  private termoPesquisa = new BehaviorSubject<string>('');
  termoPesquisa$ = this.termoPesquisa.asObservable();

  atualizarTermoPesquisa(termo: string) {
    this.termoPesquisa.next(termo);
  }

  public carregar(codigo: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:4300/api/produto/${codigo}`)
      .pipe(
        catchError((error: any) => {
          console.error('Erro na requisição:', error);
          throw error;  // Pode personalizar a manipulação de erros conforme necessário
        })
      );
  }
  
 
  public listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>("http://localhost:4300/api/clientes");        
  }
 
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:4300/api/produto");
  }

}