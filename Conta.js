export class Conta{
    constructor(saldo, cliente, agencia){
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            throw new Error("Você não deveria instaciar um objeto do tipo Conta diretamente, pois ele é uma classe abstrata!")
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){            
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    };
    
    // Método abstrato
    sacar(valor){
        throw new Error('O método sacar da conta é abstrato!')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;

        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    };

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste(){
        console.log("teste na classe conta")
    }
}