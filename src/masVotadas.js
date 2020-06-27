const fs = require('fs')
let masVotadas = {
    db: './data/movies.json',
    titulo: "TE MOSTRAMOS LAS PELICULAS MAS VOTADAS",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad:function(){
        let movies = this.leerJSON();
        let masVotadas =movies.movies.filter(function(movie){
            return movie.vote_average >= 7
        })
            return masVotadas.length;
    },
    pelisFiltradas:function(){
        let movies = this.leerJSON();
        let masVotadas =movies.movies.filter(function(movie){
            return movie.vote_average >= 7
        })
            return masVotadas;
    },    
    ratingPromedio: function(){

          let movies =  this.pelisFiltradas( ) ; 
          let rating=[];
        movies.filter(function(movie){
            return rating.push(movie.vote_average)
        })
        let sumatoria = rating.reduce(function(acum,num){
            return acum+num;
        })
        return (sumatoria/movies.length).toFixed(2)    
        
        }
        
    }
module.exports= masVotadas    