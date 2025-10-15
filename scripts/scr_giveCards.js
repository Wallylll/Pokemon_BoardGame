import { players, creatPlayer } from "./scr_jogadores.js";


/*
const btn_playerRed = document.querySelector("#player");
const playerWhite = document.querySelector("#player");
const playerBlue = document.querySelector("#player");
const playerYellow = document.querySelector("#player");
*/

let red = "#fb2c36";
let white = "#cad5e2";
let blue = "#2b7fff";
let yellow = "#fcc800";

let player1 = creatPlayer("James", red);
players.push(player1);
let player2 = creatPlayer("Jaison", yellow);
players.push(player2);
let player3 = creatPlayer("Wally", blue);
players.push(player3);
let player4 = creatPlayer("Lani", white);
players.push(player4);

console.log(players);

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
            <button class="btn_addPokemon" id="addPokemon_${player.name}">Adicionar Pokémon</button>
            
            <h3>Itens</h3>
            <div class="invetory" id="invenory${player.color}">
                ${player.inventory}
            </div>
            <button class="btn_addItem">Adicionar Item</button>
        </div>
    ` 
});
playersCards.innerHTML = container;

const containerPlayer = document.querySelectorAll(".player");

containerPlayer.forEach(container => {
    container.addEventListener("click", (event) => {
        //console.log(event.target);
        const playerClicked = players.find(player => event.target.id.includes(player.name));
        
        if(playerClicked){
            console.log(playerClicked);

            if(event.target.classList.contains("btn_addPokemon")){
                playerClicked.addPokemon();
            }
            if(event.target.classList.contains("btn_addItem")){
                playerClicked.addItem();
            }
        }

        //Testar lógica buscando pelo indicie e não pelo ID.
        /*
        let index = players.findIndex(p => p.color === red);
        console.log(index);
        */
    });


    /**
     btn_addPokemon.forEach(pokemon =>{
        pokemon.addEventListener("click", ()=> {
            players[0].addPokemon();
            console.log(player);
            console.log(players)
        });
    });
    btn_addItem.forEach(item =>{
        item.addEventListener("click", ()=> {
            player.addItem();
            console.log(player);
        });
    });
    
    *  * */
});

const battle = document.querySelector("#battle");
battle.onclick = ()=> window.location.href = "./gameBattle.html";