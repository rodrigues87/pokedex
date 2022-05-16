const idInicial = 1;
const idAnterior = idInicial - 1;
const idPosterior = idInicial + 1;

findPokemonById(idInicial);

function findPokemonById(id) {
    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/"+id,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}