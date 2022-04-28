import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    constructor(cliente, agencia){
        super(0, cliente, agencia); //chama o construtor da classe pai: Conta
        ContaCorrente.numeroDeContas++;
    };

/*     sacar(valor){
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
    } */
};