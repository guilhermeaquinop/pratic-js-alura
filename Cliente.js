export class Cliente{ //classe
    get cpf(){
        return this._cpf;
    };

    constructor(nome, _cpf){
        this.nome = nome;
        this._cpf = _cpf;
    }
};