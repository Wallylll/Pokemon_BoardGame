import { players, creatPlayer } from "./scr_jogadores.js";

let red = "oklch(63.7% 0.237 25.331)";
let whi = "oklch(86.9% 0.022 252.894)"
let blu = "oklch(62.3% 0.214 259.815)"
let yel = "oklch(85.2% 0.199 91.936)"

const btn_playerRed = document.querySelector("#player");
const playerWhite = document.querySelector("#player");
const playerBlue = document.querySelector("#player");
const playerYellow = document.querySelector("#player");

let player1 = creatPlayer("James", "oklch(63.7% 0.237 25.331)");
players.push(player1);
console.log(players);

/*
let player2 = creatPlayer("Jaison", "Yellow");
players.push(player2);

let player3 = creatPlayer("Wally", "Blue");
players.push(player3);

let player4 = creatPlayer("Lani", "White");
players.push(player4);

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
        <button class="btn_addPokemon id="btn_player${player.color}"">Adicionar Pokémon</button>
        
        <h3>Itens</h3>
        <div class="invetory" id="invenory${player.color}">
        ${player.inventory}
        </div>
        <button class="btn_addItem" id="player${player.color}">Adicionar Item</button>
        </div>
    `
    playersCards.innerHTML = container;
});

/*
btn_addPokemon.forEach(pokemon =>{
    'pokemon'.addEventListener("click", ()=> {
        player.addPokemon();
        console.log(player);
    });
});
btn_addItem.forEach(item =>{
    item.addEventListener("click", ()=> {
        player.addItem();
        
        console.log(player);
    });
});
*/


const battle = document.querySelector("#battle");
battle.onclick = ()=> window.location.href = "./gameBattle.html";