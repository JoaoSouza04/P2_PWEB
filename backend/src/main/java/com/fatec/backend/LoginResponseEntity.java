package com.fatec.backend;

public class LoginResponseEntity {
  public String mensagem;

  public LoginResponseEntity(String mensagem) {
    this.mensagem = mensagem;
  }

  public String getMensagem() {
    return mensagem;
  }

  public void setMensagem(String mensagem) {
    this.mensagem = mensagem;
  }
}
