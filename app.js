const http = require('http');
const router= require("./router");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // Route System
    router(req.url,res)

    
}).listen(3030, 'localhost', () => console.log('Servidor ejecutado en el puerto 3030 '));