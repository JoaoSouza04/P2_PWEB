import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro.model';
import { CadastroService } from '../service/cadastro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-esqueci',
  templateUrl: '../esqueci/esqueci.component.html',
  styleUrls: ['../esqueci/esqueci.component.css']
})
export class EsqueciComponent {
  obj: Cadastro = new Cadastro();
  mensagem: String = " ";

  constructor(private CadastroService: CadastroService,
    private activeRoute: ActivatedRoute) { }

  verificar() {
    try {
      this.CadastroService.esqueci(this.obj).subscribe(
        response => {
          this.mensagem = response.mensagem;
          alert(this.mensagem);
        },
        error => {
          console.error("Ocorreu um erro na requisição:", error);
          this.mensagem = "Ocorreu um erro!";
        }
      );
    } catch {
      this.mensagem = "Ocorreu um erro!";
    }
  }
}
