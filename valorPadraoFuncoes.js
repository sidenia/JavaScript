// PASSANDO VALORES PADRÃO NAS FUNÇÕES

//se chamar a função passando só um parametro ou sem nenhum, vai dar erro NaN
//se nao tiver valor padrão estipulado
function soma(a, b) {
    return a + b;
}
console.log(soma(1));
console.log(soma());


//porem estipulando valor ele retornará
function subtracao (a, b = 3){
    return a - b;
}
console.log(subtracao(5));


//se passar dois valores padrão e declarar só 1 ele sobrepoe o primeiro
//se passar dois ele sobrepõe os dois.
function div (a = 6, b = 3){
    return a / b;
}
console.log(div(15));
console.log(div(10,4))