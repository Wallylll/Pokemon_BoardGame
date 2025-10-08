//Setando os botões, tela para o modal:
const play = document.querySelector("#play");
const modalNames = document.querySelector("#gameConfigs_playerName");
const closeModalName = document.querySelector("#closeModalName");
//Mostrando e fechando o modal;
play.onclick = ()=>{
    modalNames.showModal();
}
closeModalName.onclick = ()=>{
    modalNames.close();
}

//Setando o botão, lista e elemento onde indexar as informações:
const addPlayer = document.querySelector("#addPlayer");
const inputPlayer = document.querySelector("#inputPlayer");
const showPlayers = document.querySelector("#showPlayers");
var players = [];

addPlayer.addEventListener("click", ()=>{

    if(players.length < 4){
        if(inputPlayer.value === ""){
            alert("Insira um nome para o jogador!")
        } else {
            let player = inputPlayer.value;
            console.log(player);
            players.push(player);
            inputPlayer.value = "";
            
            let container = "";
            
            players.forEach(player =>{
            container += `
                <span>${player}</span>
            `
            })
            showPlayers.innerHTML = container;
        }
    } else {
        alert("Já atingiu o limite máximo de jogadores");
    }
})

//Se tentar jogar com numero insulficiente de jogadores:
const confirmPlayers = document.querySelector("#confirmPlayers");

confirmPlayers.addEventListener("click", ()=>{
    if(players.length < 2){
        alert("Quantidade de jogadore insuficiente");
    } else {
        window.location.href = "../templates/gameBattle.html"
    }
});

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