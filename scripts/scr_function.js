import {players, creatPlayer} from "../scripts/scr_jogadores.js";


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


function round(){
    
}