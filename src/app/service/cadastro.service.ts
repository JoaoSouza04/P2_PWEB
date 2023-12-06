import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../cadastro/cadastro.model';
import { Login } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  public gravar(obj: Cadastro) {
    this.http.post<String>("http://localhost:4300/api/cliente", obj)
      .subscribe();
  }

  public alterar(obj: Cadastro) {
    this.http.put<String>("http://localhost:4300/api/cliente", obj)
      .subscribe();
  }

  public pesquisar(email: string): Observable<Cadastro> {
    return this.http.post<Cadastro>("http://localhost:4300/api/cliente", { email });
  }

  public login(obj: Cadastro): Observable<Login> {
    return this.http.post<Login>("http://localhost:4300/api/cliente/login", obj);
  }

  public esqueci(obj: Cadastro): Observable<Login> {
    return this.http.post<Login>("http://localhost:4300/api/cliente/esqueci", obj);
  }

}
