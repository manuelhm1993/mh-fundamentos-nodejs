// Importar módulos
//
// Módulos externos
const express = require('express');

// Módulos propios
const { getRutaAbsoluta } = require('./src/mh-functions/funciones-globales');

// Variables globales
const app = express();
// const hostname = 'localhost';
const port = process.env.PORT || 3000;

console.log(process.env.PORT);
console.log(port);

// Establecer el directorio de vistas
app.set('views', getRutaAbsoluta('views', 'src'));

// Establecer el motor de plantillas
app.set('view engine', 'ejs');

// Middlewares registrar la carpeta pública
app.use(express.static(getRutaAbsoluta('public')));

// Importar las rutas ya tratadas con el Middleware web
app.use('/', require('./src/router/RutasWeb'));

// Equivalente a crear grupos, prefijos y nombres en las rutas
app.use('/mascotas', require('./src/router/Mascotas'));

// Middleware para gestionar errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Error. Página no encontrada' });
});

// Oyentes
// app.listen(port, hostname, () => {
app.listen(port, () => {
    // console.log(`Servidor ejecutándose en: http://${hostname}:${port}/`);
    console.log(`Servidor ejecutándose en el puerto: ${port}`);
});
