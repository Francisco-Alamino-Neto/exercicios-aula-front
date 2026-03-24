// Array de frutas
let frutas = ["Maçã", "Banana", "Tomate", "Laranja", "Limão"];
console.log("Inicial:", frutas);
frutas.push("Caqui"); // ["Maçã", "Banana", "Tomate", "Laranja", "Limão", "Caqui"]
console.log("Após push:", frutas);
frutas.pop(); // ["Maçã", "Banana", "Tomate", "Laranja", "Limão"]
console.log("Após pop:", frutas);
frutas.unshift("Uva"); // ["Uva", "Maçã", "Banana", "Tomate", "Laranja", "Limão"]
console.log("Após unshift:", frutas);
frutas.shift(); // ["Maçã", "Banana", "Tomate", "Laranja", "Limão"]
console.log("Após shift:", frutas);

// Array de números
let numeros = [5, 1, 8, 10, 9, 3, 2, 4, 7, 6];
console.log("Números:", numeros);

// Pares
let pares = numeros.filter((n) => n % 2 === 0); // [8, 10, 2, 4, 6]
console.log("Pares:", pares);

// Ao quadrado
let aoQuadrado = numeros.map((n) => n * n); // [25, 1, 64, 100, 81, 9, 4, 16, 49, 36]
console.log("Ao quadrado:", aoQuadrado);

// Soma
let soma = numeros.reduce((acc, n) => acc + n, 0); // 55
console.log("Soma:", soma);

// Ordenar
numeros.sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Ordenado:", numeros);

// Inverter
numeros.reverse(); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("Invertido:", numeros);