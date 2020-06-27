const fs = require('fs');
let preguntasFrecuentes = {
    db: './data/faqs.json',
    titulo: "TE DEJAMOS POR AQUI LAS PREGUNTAS MAS FRECUENTES.\n\n",
    leerJSON: function() {
        let preguntasJson = fs.readFileSync(this.db, 'utf-8');
        let preguntas = JSON.parse(preguntasJson);
        return preguntas
    },
    cantidad: function(){
        return this.leerJSON().total_faqs 
    },

    }

module.exports = preguntasFrecuentes