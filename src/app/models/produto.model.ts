export class Produto {
    codigo: number = 0;
    sabor: string = "";
    tamanho: string = "";
    preco: number = 0;
    descricao: string = "";
    quantidade: number = 0;

    constructor(obj?:Produto){
        if(obj!=undefined){
            this.codigo = obj.codigo;
            this.sabor = obj.sabor;
            this.tamanho = obj.tamanho;
            this.preco = obj.preco;
            this.descricao = obj.descricao;
            this.quantidade = obj.quantidade;
        }
    }
}