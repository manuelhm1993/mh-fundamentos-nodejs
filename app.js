// Importar módulos
//
// Módulos externos
const express = require('express');

// Módulos propios
const { getRutaAbsoluta } = require('./src/mh-functions/funciones-globales');

// Variables globales
const app = express();
const hostname = 'localhost';
const port = 3000;

// Establecer el motor de plantillas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static(getRutaAbsoluta('public')));

// Rutas
app.get('/', (req, res) => {
    res.send('Mi primer servidor con express');
});

app.get('/servicios', (req, res) => {
    res.send('Estás en la página de servicios');
});

// Middleware para gestionar errores 404
app.use((req, res, next) => {
    res.status(404).sendFile(getRutaAbsoluta('public/404.html'));
});

// Oyentes
app.listen(port, hostname, () => {
    console.log(`Servidor ejecutándose en: http://${hostname}:${port}/`);
});
