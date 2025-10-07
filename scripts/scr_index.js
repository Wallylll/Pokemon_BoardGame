//Configurando o número de jogadores corretamente:
const confirmPlayers = document.querySelector("#confirmPlayers");

confirmPlayers.addEventListener("click", ()=>{
    let numberPlayers = document.querySelector("#numberPlayers").value;
    console.log(numberPlayers);

    if(numberPlayers <= 1){
        console.log("Erro, quantidade de jogadores insuficiente.");
    } else if(numberPlayers > 4) {
        console.log("O número de jogadores excede o máximo!");
    } else {
        window.location.href = "templates/gameBattle.html"
    }
});



