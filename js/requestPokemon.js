this.idPokemon = 1;
this.idUltimoPokemon = 898;

identificarObjetosDaPagina();

findPokemon(idPokemon);

function identificarObjetosDaPagina() {
    this.nomePokemonObject = document.getElementById("nomePokemon")
    this.imagemPokemonObject = document.getElementById("imagemPokemon")
    this.tipo1Pokemon = document.getElementById("tipo1Pokemon")
    this.tipo2Pokemon = document.getElementById("tipo2Pokemon")
    this.altura = document.getElementById("altura")
    this.hp = document.getElementById("hp")
    this.ataque = document.getElementById("ataque")
    this.defesa = document.getElementById("defesa")
    this.ataqueEspecial = document.getElementById("ataqueEspecial")
    this.defesaEspecial = document.getElementById("defesaEspecial")
    this.speed = document.getElementById("speed")
}

function findPokemon(nameOrId) {

    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/"+nameOrId,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        atualizarConteudoDaPagina(response);
        console.log(response);
    });
}

function atualizarConteudoDaPagina(response) {

    nomePokemonObject.textContent = capitalizeFirstLetter(response.name);
    let valorImagem = prepararValorDaImagem(response.id);
    console.log(valorImagem)

    imagemPokemonObject.src =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+valorImagem+".png"

    altura.textContent = parseInt(response.height)/10;
    hp.textContent = response.stats[0].base_stat;
    ataque.textContent = response.stats[1].base_stat;
    defesa.textContent = response.stats[2].base_stat;
    ataqueEspecial.textContent = response.stats[3].base_stat;
    defesaEspecial.textContent = response.stats[4].base_stat;
    speed.textContent = response.stats[5].base_stat;

    definirTiposDoPokemon(response);

    modificarFundoTipo(response,tipo1Pokemon,0);
    modificarFundoTipo(response,tipo2Pokemon,1);

}

function modificarFundoTipo(response, tipoPokemonButton,id) {
    if(response.types[id].type.name === "grass" || response.types[id].type.name === "bug" ){
        tipoPokemonButton.className = "btn bg-verde text-white";
    }
    if(response.types[id].type.name === "fire"){
        tipoPokemonButton.className = "btn bg-vermelho text-white";
    }
    if(response.types[id].type.name === "water"){
        tipoPokemonButton.className = "btn bg-azul text-white";
    }
    if(response.types[id].type.name === "normal"){
        tipoPokemonButton.className = "btn bg-cinza text-white";
    }
    if(response.types[id].type.name === "poison"){
        tipoPokemonButton.className = "btn bg-roxo text-white";
    }
    if(response.types[id].type.name === "electric" || response.types[0].type.name === "ground"){
        tipoPokemonButton.className = "btn bg-amarelo text-white";
    }
    if(response.types[id].type.name === "fairy" || response.types[id].type.name === "psychic"){
        tipoPokemonButton.className = "btn bg-roxo-claro text-white";
    }
    if(response.types[id].type.name === "dark"){
        tipoPokemonButton.className = "btn bg-cinza-escuro text-white";
    }


}

function definirTiposDoPokemon(response) {
    if(response.types.length ===1){
        tipo1Pokemon.textContent = response.types[0].type.name;
        tipo2Pokemon.hidden = true;
    }
    if(response.types.length ===2){
        tipo2Pokemon.hidden = false;

        tipo1Pokemon.textContent = response.types[0].type.name;
        tipo2Pokemon.textContent = response.types[1].type.name;
    }
}

function irParaPokemonPosterior(){
    idPokemon = idPokemon +1;
    if(idPokemon >= idUltimoPokemon){
        idPokemon = 1;
    }
    findPokemon(idPokemon);

}

function irParaPokemonAnterior(){
   idPokemon = idPokemon -1;
   if (idPokemon === 0){
       idPokemon = idUltimoPokemon;
   }
   findPokemon(idPokemon);

}

function prepararValorDaImagem(valorImagem){

    valorImagem = valorImagem.toString()

    if(valorImagem.length ===1 ){
        return "00"+ valorImagem;
    }
    if(valorImagem.length ===2 ){
        return "0"+ valorImagem;
    }
    return valorImagem
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

