let homePage= require("./homePage");
let enCartelera = require("./enCartelera");
let masVotadas= require("./masVotadas");
let sucursales= require("./sucursales");
let contacto =require("./contacto");
let preguntasFrecuentes= require("./preguntasFrecuentes");


let index = {
  homePage: function(res){
      res.write("*************************************************************************************************************************"+'\n')
      res.write(""+ homePage.titulo+'\n');
      res.write("*************************************************************************************************************************"+'\n\n')
      res.write("\n\n");
      res.write("Total de peliculas:"+ homePage.cantidad()+'\n');
      res.write("\n\n");
      let titulos = homePage.listarPelis();
      for (let titulo of titulos){
          res.write(titulo);
          res.write('\n');
        };
        res.write( '\n' );
        res.write('-----------------------------------------'+'\n');
        res.write( 'Recorda que podes visitar las secciones:'+'\n');
        res.write('-----------------------------------------'+'\n');
        res.write( '-En Carteleta-' +'\n' );
        res.write( '-Mas Votadas-'+'\n' );
        res.write( '-Sucursales-'+'\n' );
        res.write( '-Contacto-' +'\n' );
        res.write( '-Preguntas Frecuentes-' );  
      res.end()
  },
  enCartelera:function(res){
          res.write("                                      **************************************************"+'\n\n')
          res.write("                                       "+enCartelera.titulo +"\n\n");
          res.write("                                      **************************************************"+'\n\n')
          let movies=enCartelera.leerJSON()
          movies.movies.forEach(function(movie){
            res.write('-------------------------------------------------'+'\n');
            res.write(`- ${movie.title}\n`)
            res.write(` ${movie.overview}\n\n\n`);
          })           
            
            
            res.end()
    
  },
  masVotadas: function(res){
        res.write("               *************************************************************************************************************************"+'\n')
        res.write("                                                         "+masVotadas.titulo +'\n');
        res.write("               *************************************************************************************************************************"+'\n')
        res.write('\n\n');
        res.write(` - Total de peliculas: ${masVotadas.cantidad()}\n\n`);
        res.write(` - Promedio de rating: ${masVotadas.ratingPromedio()}\n\n\n`);
        res.write('LISTADO DE PELICULAS\n\n');
        let filtradas= masVotadas.pelisFiltradas() ;   
        filtradas.forEach(function(movie){
        res.write(
 `
Titulo: ${movie.title}
Rating: ${movie.vote_average}
Reseña: ${movie.overview}
 `
                  )
            })
        res.end()          
  },
  sucursales:function(res){
    res.write("                                   **************************************************************************"+'\n');
    res.write ("                                     "+ sucursales.titulo +'\n');
    res.write("                                   **************************************************************************"+'\n\n');
    res.write("\n\n");
    res.write("Total:"+ sucursales.cantidad()+'\n' );
    let  salas  =  sucursales.leerJSON()
       salas.theaters.forEach(function(sala){
  res.write(`
----------------------------------------------------------------------------------------------------------------------
Nombre: ${sala.name } 
Dirección: ${ sala.address } 
Descripcion: ${ sala.description }

            `)
       } )
           res.end();
  },
  contacto: function(res){
        res.write("                        *****************************************************************************************************"+'\n');
        res.write("                                                      "+ contacto.titulo);
        res.write("                        *****************************************************************************************************"+'\n\n');
        res.write("\n\n");
        res.write(contacto.contenido+'\n');
        res.end()
  },
  preguntasFrecuentes:function(res){
    res.write("                            *****************************************************************************************************"+'\n');
    res.write("                                                        "+ preguntasFrecuentes.titulo);
    res.write("                            *****************************************************************************************************"+'\n\n');
    res.write("\n\n");
    res.write("Total de preguntas: " + preguntasFrecuentes.cantidad()+'\n\n\n')
    let faqs = preguntasFrecuentes.leerJSON();
       faqs.faqs.forEach(function(faq){
           res.write(
            `
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-Pregunta: ${faq.faq_title}  \n
-Respuesta: ${faq.faq_answer}\n\n\n 
              `
                    )
       })
       res.end()
  }, 
}

module.exports= index