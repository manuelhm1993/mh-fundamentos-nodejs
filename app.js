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

// Establecer el directorio de vistas
app.set('views', getRutaAbsoluta('views', 'src'));

// Establecer el motor de plantillas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static(getRutaAbsoluta('public')));

// Rutas
app.get('/', (req, res) => {
    // Como se está usando un motor de plantillas, ahora se deben renderizar las vistas usar el método render
    // Render recibe el nombre de la plantilla y un objeto con parámetros (opcional)
    res.render('index', { title: 'Título dinámico', message: 'Primer renderizado'});
});

app.get('/servicios', (req, res) => {
    // El método render ya sabe la unicación del directorio views y no es necesario usar el método getRusaAbsoluta
    res.render('servicios', { title: 'Esta es la página de servicios MHenriquez' });
});

// Middleware para gestionar errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Error. Página no encontrada' });
});

// Oyentes
app.listen(port, hostname, () => {
    console.log(`Servidor ejecutándose en: http://${hostname}:${port}/`);
});
