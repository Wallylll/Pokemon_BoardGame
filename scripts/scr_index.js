import { creatPlayer, players } from "./scr_jogadores.js";


//Referenciando os elementos do modal:
const play = document.querySelector("#play");
const modalNames = document.querySelector("#gameConfigs_playerName");
const closeModalName = document.querySelector("#closeModalName");

//Funções de abertura e fechamento do modal:
play.onclick = ()=>{
    modalNames.showModal();
}
closeModalName.onclick = ()=>{
    modalNames.close();
}

//Referenciando elementos para indexar as informações coletadas:
const addPlayer = document.querySelector("#addPlayer");
const inputPlayer = document.querySelector("#inputPlayer");
const showPlayers = document.querySelector("#showPlayers");
const selectColor = document.querySelector("#selectColor");
let curColor;

//Armazenando as cores em variáveis:
let red = "#fb2c36";
let white = "#cad5e2";
let blue = "#2b7fff";
let yellow = "#fcc800";

selectColor.addEventListener("change", () => {
    
    let colorValue = selectColor.value;
    console.log(colorValue + " cor");
    
    switch (colorValue){
        case "red":
            console.log("aqui é o vermelho");
            if(players.find(player => player.color === "red")){
                alert("Um jogador já possui essa cor.");
            }else{
                curColor = red;
                inputPlayer.style.backgroundColor = red;
            }
            break;
        case "white":
            console.log("aqui é o branco")
            if(players.find(player => player.color === "white")){
                alert("Um jogador já possui essa cor.");
            }else{
                curColor = white;
                inputPlayer.style.backgroundColor = white;
            }
            break;
        case "blue":
               console.log("aqui é o azul")
            if(players.find(player => player.color === "blue")){
                alert("Um jogador já possui essa cor.");
            }else{
                curColor = blue;
                inputPlayer.style.backgroundColor = blue;
            }
            break;
         case "yellow":
                console.log("aqui é o branco")
            if(players.find(player => player.color === "yellow")){
                alert("Um jogador já possui essa cor.");
            }else{
                curColor = yellow;
                inputPlayer.style.backgroundColor = yellow;
            }
            break;
    }
})

//Evento de verificação, tratamento e implementação de valores:
addPlayer.addEventListener("click", ()=>{

    //Verificação para o caso do jogador tentar ultrapassar número máximo de jogadores:
    if(players.length < 4){
        //Verificação para o caso do jogador tentar nomear o jogador com um campo vazio:
        if(inputPlayer.value === ""){
            alert("Insira um nome para o jogador!");

        }else if(curColor === red && players.find(player => player.color === red)){
            alert("A cor VERMELHO já foi escolhido!");

        } else if(curColor === white && players.find(player => player.color === white)){
            alert("A cor BRANCO já foi escolhido!");

        }else if(curColor === blue && players.find(player => player.color === blue)){
            alert("A cor AZUL já foi escolhido!");

        }else if(curColor === yellow && players.find(player => player.color === yellow)){
            alert("A cor AMARELO já foi escolhido!");

        } else {
            let player = creatPlayer(inputPlayer.value, curColor);
            console.log(player);
            players.push(player);

            inputPlayer.value = "";
            console.log(players);

            let container = "";
            
            players.forEach(player =>{
                container += `
                <span>${player.name}</span>
                `
            })
            showPlayers.innerHTML = container;

            console.log(players)
        }
    } else {
        alert("Já atingiu o limite máximo de jogadores");
    }
})

//Referenenciando o botão confirm
const confirmPlayers = document.querySelector("#confirmPlayers");

//Função para o caso do jogador tentar iniciar com um número insulficiente de jogadores:
confirmPlayers.addEventListener("click", ()=>{
    if(players.length < 2){
        alert("Quantidade de jogadore insuficiente");
    } else {
        window.location.href = "../templates/giveCards.html"
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