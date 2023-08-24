// Módulo http: pertenece al core de nodejs y no require instalación, se puede usar el prefijo node: require(node:http);
const http = require('http');

// Crear el servidor con el objeto http
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Status http de respuesta exitosa
  res.setHeader('Content-Type', 'text/plain'); // tipo de contenido a devolver, en este caso texto plano
  res.end('Hola mundo, este es mi primer servidor nodejs v3'); // Configurar la respuesta para el usuario, en este caso un string
});

// Crear los parámetros de configuración el host y el puerto
const hostname = '127.0.0.1';
const port = 3000;

// Poner el servidor a la escucha en el puerto y el host configurados previamente
server.listen(port, hostname, () => {
  console.log(`Servidor ejecutándose en: http://${hostname}:${port}/`);
});
