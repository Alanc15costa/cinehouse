let filmes = require('./database/catalogo.json')
let cinema = 'Cine Belas Artes 2.4.5.6'

const filme4 = {
    codigo: 4,
    titulo: 'Rambo 2',
    duracao: 240,
    genero: 'terror',
    emCartaz: true
}

filmes.push(filme4) // add no finally

function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(function (filme) {
        return filme.codigo == codigo // o retorno tem que ser booleana
    })

    return filmeEncontrado
}

const filmeEnc = buscarFilme(1)

function adicionarFilme(codigo, titulo, duracao, genero, emCartaz) {
    const filme = {
        codigo,
        titulo,
        duracao,
        genero,
        emCartaz
    }

    filmes.push(filme)
}

adicionarFilme(5, 'Harry Potter 5', 180, 'fantasia', true)

function alterarFilmeEmCartaz(codigo) {
    const filmeEncontrado = filmes.find(function (filme) {
        return filme.codigo == codigo
    })

    // filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
    filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true

}

alterarFilmeEmCartaz(5)
