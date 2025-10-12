import { players, creatPlayer } from "../scripts/scr_jogadores.js";


const modalAddPokemon = document.querySelector("#modalAddPokemon");
modalAddPokemon.showModal();

players.forEach(player => {
    player.creatPlayer(players.name, players.color);
});