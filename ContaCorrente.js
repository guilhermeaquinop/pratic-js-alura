import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0

    constructor(agencia, _cliente){
        this.agencia = agencia;
        this._cliente = _cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas++;
    };

    set  cliente(novoValor){
        if(novoValor instanceof Cliente){            
            this._cliente = novoValor;
        };
    };

    get cliente(){
        return this._cliente;
    };


    get saldo(){
        return this._saldo;
    };


    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        };
    };

    depositar(valor){
        if(valor <= 100){
            return; //early return
        }
        this._saldo += valor;
    };

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
};