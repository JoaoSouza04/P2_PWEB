import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro.model';
import { CadastroService } from '../service/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensagem: any;
  obj: Cadastro = new Cadastro();

  constructor(private service: CadastroService) { }

  fazerLogin() {
    try {
      this.service.login(this.obj).subscribe(
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

