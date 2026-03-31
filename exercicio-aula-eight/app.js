// Objeto pessoa
let pessoa = {
  nome: "Francisco",
  idade: 20,
  profissao: "Desempregado",
  apresentar: function () {
    console.log(
      "Olá, meu nome é " +
        this.nome +
        ", tenho " +
        this.idade +
        " anos, e sou " +
        this.profissao,
    );
  },
};
pessoa.apresentar(); // "Olá, meu nome é Francisco, tenho 20 anos, e sou Desempregado"

// Objeto carro
let carro = {
  marca: "Subaru",
  modelo: "Legacy Wagon",
  ano: 1998,
  ligar: function () {
    console.log("Carro Ligado.");
  },
};
carro.ligar();

// Objeto loja
let loja = {
  nome: "Alojada",
  produtos: ["TV de plasma", "Nokia tijolão", "Playstation One"],
};
for (let i in loja.produtos) {
  console.log(loja.produtos[i]);
}