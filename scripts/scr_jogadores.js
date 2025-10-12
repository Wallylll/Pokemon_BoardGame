import random from "./scr_random.js";
import pokemons from "./scr_pokemonsArray.js";
import itens from "./scr_itensArray.js"

let players = [];

class Player {
    pokedex = [];
    inventory = [];
    
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    //Funções para adicionar pokemons á pokedex e itens á inventory:
    addPokemon(){
        //Adicionar um cerificador para limmitar o numero de pokemons;
        let pulledPokemon = pokemons[random(pokemons.length)];
        this.pokedex.push(pulledPokemon);
        return this.pokedex;
    }
    addItem(){
        //Adicionar um cerificador para limmitar o numero de itens;
        let pulledItem = itens[random(itens.length)]; //Criar um array para os itens;
        this.inventory.push(pulledItem);
        return this.inventory;
    }
}

//Função factory para criar jogadores:
function creatPlayer(name, color){
    let player = new Player(name, color);
    return player;
}

let playerTest = new Player("James", "Red");
playerTest.addPokemon();
playerTest.addItem();
console.log(playerTest);


export {players};
export {creatPlayer};
/*
const pokemons = [];
const ids = [107, 25, 4, 150];

console.log(pokemons);

//const pokemon = new Player('pikachu', ["choque", "cabecada"], "saudavel", "paralisia")
//const pokemon2 = new Player('lutador', "murro", "saudavel", "none")

//pokemon2.dano(ataque.choque.dano)
 */
