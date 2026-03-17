// Função tradicional     
function apresentar(nome, idade) {          
    return `Meu nome é ${nome} e tenho ${idade} anos.`;       
}
console.log(apresentar("Francisco", 20));
        
// Função anônima 
const dobro = function(n) {
    return n * 2;      
};
console.log("Dobro:", dobro(4));
        
// Arrow Function
const soma = (a, b) => a + b;
console.log("Soma:", soma(4, 6));
        
// Par ou ímpar
function verificarNumero(n) {
    if (n % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";       
    }       
}        
console.log("Resultado:", verificarNumero(7));