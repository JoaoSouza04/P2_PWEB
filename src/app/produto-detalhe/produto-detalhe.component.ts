import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../service/produto.service';
import { CestaService } from '../service/cesta.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent {
  produto: Produto = new Produto();
  mensagem: string = "";

  constructor(private ProdutoService: ProdutoService,
    private activeRoute: ActivatedRoute,
    private cestaService: CestaService) {}
  
  ngOnInit() {
    let codigo = this.activeRoute.snapshot.paramMap.get("codigo");
    if(codigo != null){
      this.produto.codigo = Number(codigo);
      this.pesquisar();
    }
  } 

  adicionarAoCarrinho() {
    this.cestaService.gravar(this.produto);
  }

  public pesquisar(){
    this.mensagem = "";
    try{      
      this.ProdutoService.carregar(this.produto.codigo).subscribe(
        (retorno: Produto) => {            
          this.produto.sabor = retorno.sabor; 
          this.produto.tamanho = retorno.tamanho;
          this.produto.preco = retorno.preco;
          this.produto.descricao = retorno.descricao;
          this.produto.quantidade = retorno.quantidade;
          
          if (retorno.descricao == null) {
            this.mensagem = "Registro não encontrado!";
          }          
        },
        (error) => {
          console.error('Erro na requisição:', error);
          this.mensagem = "Ocorreu um erro, verifique!";
        }
      );
      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }
}

