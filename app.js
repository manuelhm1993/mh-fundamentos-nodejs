// Importar módulos
//
// Módulos externos e internos
const path = require('path'); 
const express = require('express');

// Variables globales
const app = express();
const port = process.env.PORT || 3000;

// Establecer el directorio de vistas
app.set('views', path.join(__dirname, 'src/views'));

// Establecer el motor de plantillas
app.set('view engine', 'ejs');

// Middlewares registrar la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Importar las rutas ya tratadas con el Middleware web
app.use('/', require('./src/router/RutasWeb'));

// Equivalente a crear grupos, prefijos y nombres en las rutas
app.use('/mascotas', require('./src/router/Mascotas'));

// Middleware para gestionar errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: 'Error. Página no encontrada' });
});

// Oyentes
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto: ${port}`);
});
