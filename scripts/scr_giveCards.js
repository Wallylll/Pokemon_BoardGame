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
               
            </div>
            <button class="btn_addPokemon" id="addPokemon_${player.name}">Adicionar Pokémon</button>
            <span><button id="btn_hidPokemon_${player.name}">Esconder Pokémons</button></span>
            
            <h3>Itens:</h3>
            <div class="invetory" id="inventory_${player.name}">
                ${player.inventory}
            </div>
            <button class="btn_addItem" id="addItem_${player.name}">Adicionar Item</button>
            <span><button id="btn_hidItem_${player.name}">Esconder Itens</button></span>
        </div>
    `
});
playersCards.innerHTML = container;

const containerPlayer = document.querySelectorAll(".player");


//Adicionar funcionalidade de esconder as cartas no evento click abaixo;
//Ideia: Fazer a mesma busca, somando com um contains add ou remove no id;
containerPlayer.forEach(container => {
    container.addEventListener("click", (event) => {
        const playerClicked = players.find(player => event.target.id.includes(player.name));
        
        //Div onde vai ficar todos conteudos de cada player:
        const containerPlayer = document.querySelectorAll(".player");
        
        //Referenciando a div criada pós script imprimindo a img dos pokemons e itens:
        const pokedexDiv = document.querySelector(`#pokedex_${playerClicked.name}`);
        const inventoryDiv = document.querySelector(`#inventory_${playerClicked.name}`);
        
        if(playerClicked){
            if(event.target.classList.contains("btn_addPokemon")){
                let pokedexT = playerClicked.pokedex;
                if(pokedexT.length < 6){
                    playerClicked.addPokemon();

                    //Criando um jeito de armazenar o pokemon automático e referenci´-lo no código abaixo:
                    pokedexDiv.innerHTML = playerClicked.pokedex.map(pokemon => `
                        <img class="pokemon_${playerClicked.name} "src="${pokemon.img}" alt="Carta: ${pokemon.name}">
                    `).join("");//Adicionando uma classe para todas as cartas de cada jogador para alterá-las
                } else {
                    alert(`${playerClicked.name}, já atingiu o limite de 6 Pokémons`);
                }
            }
            if(event.target.classList.contains("btn_addItem")){
                let inventoryT = playerClicked.inventory;
                if(inventoryT.length < 3){
                    playerClicked.addItem();

                    inventoryDiv.innerHTML = playerClicked.inventory.map(item =>{
                        `img src="${item.img}" alt="Carta: ${item.name}">`
                    }).join("");
                } else {
                    alert(`${playerClicked.name}, já atingiu o limite de 3 itens`);
                }
            }
            //Verificação de botão HID, substitui todas as imagens do jogador que clicou:
            if(event.target.id.includes("hid") && event.target.id.includes("Pokemon")){
                let pokeHid = document.querySelectorAll(`.pokemon_${playerClicked.name}`);
                pokeHid.forEach(img => img.src = "../imgs/versoCard.webp");
            }
            console.log(event.target)
        }
        console.log(players);
    });
});
    /*
    Retirado da linha 72: 
        playerClicked.pokedex.forEach(pokemon => {
            let img = document.createElement("img");
            img.src = pokemon.img;
            img.alt = pokemon.name;
            pokedexDiv.appendChild(img);
        });
    */
const battle = document.querySelector("#btn_battle");

battle.addEventListener("click", (event)=>{
    if(players.every(player => player.pokedex.length > 0)){
        window.location.href = "./gameBattle.html";
    } else {
        let missing = players.filter(player => player.pokedex.length < 1);
        missing.forEach(without  => {
            alert(`${without.name} não pode jogar sem pokémons!`);
        });
    }
});