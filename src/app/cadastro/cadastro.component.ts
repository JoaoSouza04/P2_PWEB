import { Component } from '@angular/core';
import { Cadastro } from './cadastro.model';
import { CadastroService } from '../service/cadastro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  obj: Cadastro = new Cadastro();
  mensagem: string = " ";

  constructor(private CadastroService: CadastroService,
    private activeRoute: ActivatedRoute) {}
  
  public gravar(){
    try{
      if(this.obj.codigo==0){
        this.CadastroService.gravar(this.obj);
        this.mensagem = "Cliente gravado com sucesso!";
      }  else {
        this.CadastroService.alterar(this.obj);
        this.mensagem = "Cliente alterado com sucesso!";
      }      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }
}

