let valor = 10.5;

let valorComDecimais = valor.toFixed(2);
let valorComVirgula = valorComDecimais.replace('.', ',');
let valorEmReais = 'R$' + valorComVirgula

console.log(valorComDecimais);
console.log(valorComVirgula);
console.log(valorEmReais);

//Em uma linha só
let valorEmReais2 = 'R$' + valor.toFixed(2).replace('.', ',');