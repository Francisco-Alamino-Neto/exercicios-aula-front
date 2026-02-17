let texto = "JavaScript";               
let numero = 42;                        
let booleano = true;                    
let indefinido;                          
let vazio = null;                        
let numeroGrande = 12345678901234567890n;
let simbolo = Symbol("id");

console.log("texto:", typeof texto);
console.log("numero:", typeof numero);
console.log("booleano:", typeof booleano);
console.log("indefinido:", typeof indefinido);
console.log("vazio:", typeof vazio);
console.log("numeroGrande:", typeof numeroGrande);
console.log("simbolo:", typeof simbolo);

let stringNumero = "100";
let convertidoNumero = Number(stringNumero);
console.log("String para número:", convertidoNumero, "-", typeof convertidoNumero);

let numeroParaTexto = 50;
let convertidoTexto = String(numeroParaTexto);
console.log("Número para string:", convertidoTexto, "-", typeof convertidoTexto);

let numeroBoolean = 1;
let convertidoBoolean = Boolean(numeroBoolean);
console.log("Número para boolean:", convertidoBoolean, "-", typeof convertidoBoolean);