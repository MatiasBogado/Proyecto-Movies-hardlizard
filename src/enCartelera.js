const fs = require('fs')
let enCartelera = {
    db: './data/movies.json',
    titulo: "AQUI ESTAN,ESTAS SON LAS PELICULAS EN CARTELERA",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    listarPelis:function(){
        let movies = this.leerJSON();
        return movies
    }
}
module.exports = enCartelera
