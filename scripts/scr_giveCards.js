import { players, creatPlayer } from "./scr_jogadores.js";


/*
const btn_playerRed = document.querySelector("#player");
const playerWhite = document.querySelector("#player");
const playerBlue = document.querySelector("#player");
const playerYellow = document.querySelector("#player");
*/

let player1 = creatPlayer("James", "red");
players.push(player1);
let player2 = creatPlayer("Jaison", "Yellow");
players.push(player2);
let player3 = creatPlayer("Wally", "Blue");
players.push(player3);
let player4 = creatPlayer("Lani", "White");
players.push(player4);


player1.addPokemon();

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
            <button class="btn_addPokemon" id="addPokemon_${player.color}">Adicionar Pokémon</button>
            
            <h3>Itens</h3>
            <div class="invetory" id="invenory${player.color}">
                ${player.inventory}
            </div>
            <button class="btn_addItem">Adicionar Item</button>
        </div>
    `
    playersCards.innerHTML = container;
        
    const btn_addPokemon = document.querySelectorAll(".btn_addPokemon");
    const btn_addItem = document.querySelectorAll(".btn_addItem");

    const containerPlayer = document.querySelectorAll(".player")
    
    containerPlayer.forEach(container => {
        container.addEventListener("click", (evento) => {
            //console.log(evento.target)
            
            if(evento.target.contains(addPokemon_red)){{
                playerred.addPokemon();
                }
                
                }
                })
                })
                
                
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