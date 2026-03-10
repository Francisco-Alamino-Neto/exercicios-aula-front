// FOR
for (let i = 1; i <= 10; i++) {
  console.log("FOR:", i);
}

// WHILE
let contador = 1;
while (contador <= 20) {
  if (contador % 2 == 0) {
    console.log("WHILE:", contador);
  }
  contador++;
}

// DO...WHILE
let senha;
do {
  senha = prompt("Digite a senha: ");
} while (senha !== "1234");
console.log("Acesso permitido!");
