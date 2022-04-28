export class Conta{
    constructor(saldo, cliente, agencia){
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
    };

    sacar(valor){
        taxa = 1.1 * valor;

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
}