import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente = new Cliente('Guilherme de Aquino', 11122233309); //novo cliente
const contaCorrenteGuilherme = new ContaCorrente(0, cliente, 1001) //nova conta corrente do cliente1
const contaPoupanca = new ContaPoupanca(1300, cliente, 1001);
const contaSalario = new ContaSalario(cliente)
contaSalario.depositar(100)


console.log(contaPoupanca);
console.log(contaCorrenteGuilherme);
console.log(contaSalario);