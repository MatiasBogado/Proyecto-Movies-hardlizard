const fs = require('fs');
let sucursales = {
    db: './data/theaters.json',
    titulo: "PODRAS DISFRUTAR UNA EXPERIENCIA DISTINTA EN NUESTRAS SALAS EXCLUSIVAS",
    leerJSON: function() {
        let sucursalesJson = fs.readFileSync(this.db, 'utf-8');
        let sucursales = JSON.parse(sucursalesJson);
        return sucursales
    },
    cantidad: function() {
        return this.leerJSON().total_theaters
    }
    
}
module.exports= sucursales    