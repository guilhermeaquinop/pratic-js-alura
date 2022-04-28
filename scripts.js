const listaDestinos = new Array(
    "Salvador",
    "São Paulo ",
    "Rio de Janeiro"
);

listaDestinos.push('São Luis'); //.push() adiciona itens na lista

console.log(listaDestinos);

let contador = 0;
for (let i = 0; i < 3; i++){
    contador++;
    console.log(listaDestinos[1]);
};
               
console.log(contador);

listaDestinos.splice(1,1); //remove um elemento da lista (pos, qtd de elementos)
console.log(listaDestinos);


const cpf = "60624875377";
console.log(cpf[0]);
const cpfFormatado = cpf.split()
console.log(cpfFormatado);


