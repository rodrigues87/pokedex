const idInicial = 3;
const idAnterior = idInicial - 1;
const idPosterior = idInicial + 1;

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

findPokemonById(idInicial);

function findPokemonById(id) {
    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/"+id,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        nomePokemonObject.textContent = response.name;
        imagemPokemonObject.src =
            "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00"+idInicial+".png"

        tipo1Pokemon.textContent = response.types[0].type.name;
        tipo2Pokemon.textContent = response.types[1].type.name;
        altura.textContent = parseInt(response.height)/10;
        hp.textContent = response.stats[0].base_stat;
        ataque.textContent = response.stats[1].base_stat;
        defesa.textContent = response.stats[2].base_stat;
        ataqueEspecial.textContent = response.stats[3].base_stat;
        defesaEspecial.textContent = response.stats[4].base_stat;
        speed.textContent = response.stats[5].base_stat;

        console.log(response);


    });
}