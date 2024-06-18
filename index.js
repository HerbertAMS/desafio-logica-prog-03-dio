class atributosHeroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes maciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque desconhecido";
    }
    console.log(`O ${this.tipo.toUpperCase()} atacou usando ${ataque.toUpperCase()}`);
  }
}

let monge = new atributosHeroi("Herbert", 150, "monge");
let mago = new atributosHeroi("Merlin", 150, "mago");
let guerreiro = new atributosHeroi("Herbert", 150, "guerreiro");

monge.atacar() // Saída: O MONGE atacou usando ARTES MACIAIS
mago.atacar(); // Saída: O mago atacou usando magia
guerreiro.atacar(); // Saída: O GUERREIRO atacou usando ESPADA
