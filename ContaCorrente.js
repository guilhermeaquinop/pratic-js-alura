import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    constructor(cliente, agencia){
        super(0, cliente, agencia); //chama o construtor da classe pai: Conta
        ContaCorrente.numeroDeContas++;
    };

    teste(){
        super.teste()
        console.log("teste na classe conta")
    }

    // Sobrescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.5;
        return this._sacar(valor, taxa)
    }

};