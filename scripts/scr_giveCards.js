import { players, creatPlayer } from "./scr_jogadores.js";


let player1 = creatPlayer("James", "red");
players.push(player1);


let player2 = creatPlayer("Jaison Gay", "Yellow");
players.push(player2)
console.log(players)
/*
const playerRed = document.querySelector("#playerRed");
const playerWhite = document.querySelector("#playerWhite");
const playerBlue = document.querySelector("#playerBlue");
const playerYellow = document.querySelector("#playerYellow");
*/
const playersCards = document.querySelector("#playersCards");

let container = "";

players.forEach(player => {
    container += `
            <div class="player" id="player${player.color}">
                <h2 id="tit_curPlayer">Jogador: ${player.name} </h2>

                <h3>Pokédex: </h3>
                <div class="pokedex" id="pokedex${player.color}">
                    ${player.pokedex}
                </div>
                <button class="btn_addPokemon">Adicionar Pokémon</button>

                <h3>Itens</h3>
                <div class="invetory" id="invenory${player.color}">
                    ${player.inventory}
                </div>
                <button class="btn_addItem">Adicionar Item</button>
            </div>
    `
    
    playersCards.innerHTML = container;
});
//O código não adiciona ao player automaticamente...
const adicionarPoke = document.querySelectorAll(".btn_addPokemon")
const addItem = document.querySelectorAll(".btn_addItem")

addItem.forEach(item =>{
    item.addEventListener("click", ()=> {
        console.log("eu sou um erro ")
    });

})
adicionarPoke.forEach(pokemon =>{
    pokemon.addEventListener("click", ()=> {
        //É preciso especificar o jogador para a função ser executada
        player1.addPokemon();
        console.log(player1)
    });
})

    





//const cont = document.querySelector("#continue");
//cont.onclick = ()=> window.location.href = "./gameBattle.html";