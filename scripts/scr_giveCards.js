import { players, creatPlayer } from "./scr_jogadores.js";


//Definindo as cores usadas nos players para automatizar as condições:
const red = "#fb2c36";
const white = "#cad5e2";
const blue = "#2b7fff";
const yellow = "#fcc800";

//Teste. Apagar após trazer os players da página 'index.html':
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
        <div class="player" id="player_${player.name}" style="background: ${player.color};">
            <h2>Jogador: ${player.name} </h2>
        
            <h3>Pokédex: </h3>
            <div class="pokedex" id="pokedex_${player.name}">
                ${player.pokedex}
            </div>
            <button class="btn_addPokemon" id="addPokemon_${player.name}">Adicionar Pokémon</button>
            
            <h3>Itens:</h3>
            <div class="invetory" id="invenory_${player.name}">
                ${player.inventory}
            </div>
            <button class="btn_addItem" id="addItem_${player.name}"">Adicionar Item</button>
        </div>
    ` 
});
playersCards.innerHTML = container;

const containerPlayer = document.querySelectorAll(".player");

containerPlayer.forEach(container => {
    container.addEventListener("click", (event) => {
        const playerClicked = players.find(player => event.target.id.includes(player.name));

        if(playerClicked){
            if(event.target.classList.contains("btn_addPokemon")){
                let pokedexT = playerClicked.pokedex;
                if(pokedexT.length < 6){
                    playerClicked.addPokemon();

                } else {
                    alert(`${playerClicked.name}, já atingiu o limite de 6 Pokémons`);
                }
            }
            if(event.target.classList.contains("btn_addItem")){
                let inventoryT = playerClicked.inventory;
                if(inventoryT.length < 3){
                    playerClicked.addItem();
                } else {
                    alert(`${playerClicked.name}, já atingiu o limite de 3 itens`);
                }
            }
        }
        console.log(players);
    });
});
    /*
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
    */
const battle = document.querySelector("#battle");
battle.onclick = ()=> window.location.href = "./gameBattle.html";