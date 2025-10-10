//---Gerando um número aleatório para "catar" o ID dos pokemons e adicionar na lista do DECK.
function random(length){
    let index = Math.floor(Math.random() * length);
    return index;
}

export default random;