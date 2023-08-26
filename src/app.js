// Importar módulos
//
// Módulos externos e internos
const express = require('express');
const { getRutaAbsoluta } = require('./mh-functions/funciones-globales');

// Variables globales
const app = express();
const port = process.env.PORT || 3000;
const currentDir = __dirname;

// Establecer el directorio de vistas
app.set('views', getRutaAbsoluta(currentDir, 'views', true));

// Establecer el motor de plantillas
app.set('view engine', 'ejs');

console.log(getRutaAbsoluta(currentDir, 'public', false));
console.log(getRutaAbsoluta(currentDir, 'views', true));

// Middlewares registrar la carpeta pública || Eliminar src de la ruta
app.use(express.static(getRutaAbsoluta(currentDir, 'public', false)));

// Importar las rutas ya tratadas con el Middleware web
app.use('/', require('./router/RutasWeb'));

// Equivalente a crear grupos, prefijos y nombres en las rutas
app.use('/mascotas', require('./router/Mascotas'));

// Middleware para gestionar errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Error. Página no encontrada' });
});

// Oyentes
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto: ${port}`);
});
