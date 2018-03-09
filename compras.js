let itens = [
    {
        nome: 'feijao', 
        preco: 8, 
        quantidade: 2
    }, 
    {
        nome: 'vinho', 
        preco: 7, 
        quantidade: 1
    }, 
    {
        nome: 'miojo', 
        preco: 2.3, 
        quantidade: 5
    },
    {
        nome: 'sorvete',
        preco: 11.5,
        quantidade: 1
    },
    {
        nome: 'cookie',
        preco: 5.6,
        quantidade: 3
    }
];

let total = 0;

for(let item of itens){
    total = total + item.preco * item.quantidade;
}

console.log(total);