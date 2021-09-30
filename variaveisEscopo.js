///////////// Variáveis de Escopo
// ou seja, variaveis declaradas dentro de um contexto de chaves {}
// let = keyword


function teste(x) {
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x, y);
    }
}

console.log(teste(10))