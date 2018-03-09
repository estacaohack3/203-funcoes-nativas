let tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

//LINHAS
if( tabuleiro[0][0] != '' &&
    tabuleiro[0][0] == tabuleiro[0][1] && 
    tabuleiro[0][0] == tabuleiro[0][2]){
        console.log('ganhou 1a linha');
}

if( tabuleiro[1][0] != '' &&
    tabuleiro[1][0] == tabuleiro[1][1] && 
    tabuleiro[1][0] == tabuleiro[1][2]){
        console.log('ganhou 2a linha');
}

if( tabuleiro[2][0] != '' &&
    tabuleiro[2][0] == tabuleiro[2][1] && 
    tabuleiro[2][0] == tabuleiro[2][2]){
        console.log('ganhou 3a linha');
}

//COLUNAS
if( tabuleiro[0][0] != '' &&
    tabuleiro[0][0] == tabuleiro[1][0] && 
    tabuleiro[0][0] == tabuleiro[2][0]){
        console.log('ganhou 1a coluna');
}

if( tabuleiro[0][1] != '' &&
    tabuleiro[0][1] == tabuleiro[1][1] && 
    tabuleiro[0][1] == tabuleiro[2][1]){
        console.log('ganhou 2a coluna');
}

if( tabuleiro[0][2] != '' &&
    tabuleiro[0][2] == tabuleiro[1][2] && 
    tabuleiro[0][2] == tabuleiro[2][2]){
        console.log('ganhou 3a coluna');
}

//DIAGONAIS

if( tabuleiro[0][0] != '' &&
    tabuleiro[0][0] == tabuleiro[1][1] && 
    tabuleiro[0][0] == tabuleiro[2][2]){
        console.log('ganhou 1a diagonal');
}

if( tabuleiro[0][2] != '' &&
    tabuleiro[0][2] == tabuleiro[1][1] && 
    tabuleiro[0][2] == tabuleiro[2][0]){
        console.log('ganhou 2a diagonal');
}