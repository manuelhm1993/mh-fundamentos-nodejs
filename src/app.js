// Módulos externos e internos
const express = require('express');
const bodyParser = require('body-parser');

// ORM de mongoDB
const mongoose = require('mongoose');

// Equivalente al helper env() de laravel
require('dotenv').config();

// Módulos propios
const { getRutaAbsoluta } = require('./mh-functions/funciones-globales');

// Variables globales
const app = express();
const port = process.env.PORT || 3000;
const currentDir = __dirname;

// URL de conexión BBDD
const uri = `${process.env.DB_CONNECTION}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`;

// Manipular verbos HTTP de formulario: parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Uso de GET para FETCHAPI: parse application/json
app.use(bodyParser.json());

// Establecer el directorio de vistas
app.set('views', getRutaAbsoluta(currentDir, 'views', true));

// Establecer el motor de plantillas
app.set('view engine', 'ejs');

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

// Realizar la conexión a la BBDD y luego poner a la escucha al servidor
(async () => {
    // Conexión a la BBDD
    try {
        await mongoose.connect(uri);

        console.log('Conexión establecida');
    } 
    catch (err) {
        console.log(err);
    }

    // Oyentes
    app.listen(port, () => {
        console.log(`Servidor ejecutándose en el puerto: ${port}`);
    });
})();
