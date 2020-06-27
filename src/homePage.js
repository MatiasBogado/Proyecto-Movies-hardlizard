const fs = require('fs')
let homePage = {
    db: './data/movies.json',
    titulo: "BIENVENIDOS A DH MOVIES,EL MEJOR SITIO PARA ENCONTRAR LAS MEJORES PELICULAS, INCLUSO MEJOR QUE NETFLIX, CUEVANA Y POPCORN",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    listarPelis: function() {
        let movies = this.leerJSON();
        let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push(movie.title)
        })
        titleMovies.sort()
        return titleMovies
    }
}
module.exports = homePage
