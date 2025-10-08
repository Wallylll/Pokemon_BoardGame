class Player {
    pokemons = [];
    itens = [];
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    //
    //Fazendo um factory para adicionar na lista:
    addItem(name, effect){
        return {
            name: name,
            effect: effect
        }
    }
    //
    //
    //
}

let player1 = new Player("James", "Green");

player1.addItem("Faca", "Esfaqueia");

console.log(player1.itens)



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
