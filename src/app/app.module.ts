import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './service/cadastro.service';
import { ProdutoService } from './service/produto.service';
import { FormsModule } from '@angular/forms';
import { LocalizacaoComponent } from './localizacao/localizacao.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    ProdutoDetalheComponent,
    ProdutoBuscaComponent,
    CestaComponent,
    LoginComponent,
    EsqueciComponent,
    CadastroComponent,
    LocalizacaoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ CadastroService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
