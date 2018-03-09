let numeros = [1, 5, 7, 51, 31, 10, 4, 10, 12, 64, 15, 17, 19];

let pares = [];
let impares = [];

for(let item of numeros ){
    //é par
    if(item % 2 == 0){
        pares.push(item);
    }else{//é ímpar
        impares.push(item);
    }
}

console.log(pares);
console.log(impares);