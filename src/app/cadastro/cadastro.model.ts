export class Cadastro{
    codigo: number = 0;
    nome: string = "";
    email: string = "";
    telefone: string = "";
    senha: string = "";
   
    constructor(obj?:Cadastro){
        if(obj!=undefined){
            this.codigo = obj.codigo;
            this.nome = obj.nome;
            this.email = obj.email;
            this.telefone = obj.telefone;
            this.senha = obj.senha;
        }
    }
}
