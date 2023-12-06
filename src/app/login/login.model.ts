export class Login {
  public mensagem: String = "";

  public LoginResponse(mensagem: String) {
    this.mensagem = mensagem;
  }

  public getMensagem(): String {
    return this.mensagem;
  }

  public setMensagem(mensagem: String): void {
    this.mensagem = mensagem;
  }
}
