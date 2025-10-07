class Player {
    constructor(name, color, pokemons, itens){
        this.name = name;
        this.color = color;
        this.pokemons = pokemons;
        this.itens = itens;
    }
}

let player1= new Player()

//---Gerando um número aleatório para "catar" o ID dos pokemons e adicionar na lista do DECK.
const pokemons = [];
const ids = [107, 25, 4, 150];

while(pokemons.length <= 4){
    let random = ids[Math.floor(Math.random()* ids.length)];
    pokemons.push(random);
}
console.log(pokemons);
//---



//const pokemon = new Player('pikachu', ["choque", "cabecada"], "saudavel", "paralisia")
//const pokemon2 = new Player('lutador', "murro", "saudavel", "none")

//pokemon2.dano(ataque.choque.dano)

