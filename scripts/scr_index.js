const play = document.querySelector("#play");
const modalNames = document.querySelector("#gameConfigs_playerName");

//Mostrando e fechando os modais;
const confirmPlayers = document.querySelector("#confirmPlayersNumber");

play.onclick = ()=>{
    modalNames.showModal();
}
/*closeModalNumber.onclick = ()=>{
    modalNames.close();
}*/

const addPlayer = document.querySelector("#addPlayer");
const inputPlayer = document.querySelector("#inputPlayer");
const showPlayer = document.querySelector("#showPlayer");
let players = [];

addPlayer.addEventListener("click", ()=>{

   let player = inputPlayer.value;
   console.log(player);
   players.push(player);
   inputPlayer.value = "";
    console.log(inputPlayer.value);
   let container = "";

   players.forEach(el =>{
    container += `
        <span>${el}</span>

    `
   })
   showPlayer.innerHTML = container;
})


//Configurando o número de jogadores corretamente:
/*confirmPlayers.addEventListener("click", ()=>{


 
    let numberPlayers = 

    if(numberPlayers <= 1){
        alert("Erro, quantidade de jogadores insuficiente.");
    } else if(numberPlayers > 4) {
        alert("O número de jogadores excede o máximo!");
    } else {
        modalNumbers.close();
        modalNames.showModal();
    }

    
});
           <input type="text" id="namePlayer1" placeholder="Jogador 1" name="red">
            <input type="text" id="namePlayer2" placeholder="Jogador 2" name="white">
            <input type="text" id="namePlayer3" placeholder="Jogador 3" name="blue">
            <input type="text" id="namePlayer4" placeholder="Jogador 4" name="yellow">
*/