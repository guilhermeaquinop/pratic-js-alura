export class ContaPoupanca{
    constructor(saldoInicial, cliente, agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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
};