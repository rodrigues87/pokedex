this.idInicial = 1;
this.idFinal = 898;



identificarObjetosDaPagina();

findPokemonById(idInicial);

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

function findPokemonById(id) {
    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/"+id,
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
    imagemPokemonObject.src =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00"+idInicial+".png"

    altura.textContent = parseInt(response.height)/10;
    hp.textContent = response.stats[0].base_stat;
    ataque.textContent = response.stats[1].base_stat;
    defesa.textContent = response.stats[2].base_stat;
    ataqueEspecial.textContent = response.stats[3].base_stat;
    defesaEspecial.textContent = response.stats[4].base_stat;
    speed.textContent = response.stats[5].base_stat;

    atualizarFundoImagemPokemon(response)

    tipo1Pokemon.textContent = response.types[0].type.name;
    tipo2Pokemon.textContent = response.types[1].type.name;
}

function atualizarFundoImagemPokemon(response){
    let tipo = response.types[0].type.name;
    if(tipo === "grass"){

        this.imagemPokemonObject.className = "bg-verde"
    }
    if(tipo === "fire"){
        this.imagemPokemonObject.className = "bg-vermelho"
    }
    if(tipo === "water"){
        this.imagemPokemonObject.className = "bg-azul"
    }
}

function  irParaPokemonPosterior(){

    idInicial = idInicial +1;

    if(idInicial >= idFinal){
        idInicial = 1;
    }

    findPokemonById(idInicial)

}

function irParaPokemonAnterior(){

    idInicial = idInicial -1;

    if(idInicial === 0){
        idInicial = idFinal;
    }

    findPokemonById(idInicial)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

