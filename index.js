import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente('Guilherme de Aquino', 11122233309); //novo cliente
const contaCorrenteGuilherme = new Conta(0, cliente1, 1001) //nova conta corrente do cliente1
contaCorrenteGuilherme.depositar(1000);

/* contaCorrenteGuilherme.agencia = 1001;
contaCorrenteGuilherme.cliente = cliente1;
contaCorrenteGuilherme.depositar(1000); */

const contaPoupanca = new Conta(1300, cliente1, 1001);
console.log(contaPoupanca);
console.log(contaCorrenteGuilherme);
