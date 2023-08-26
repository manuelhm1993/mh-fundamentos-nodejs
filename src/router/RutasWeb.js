const express = require('express');

// Crear un objeto router
const router = express.Router();

// Rutas
router.get('/', (req, res) => {
    res.render('index', { message: 'Primer renderizado'});
});

router.get('/servicios', (req, res) => {
    res.render('servicios', { message: 'Esta es la página de servicios MHenriquez' });
});

// Exportar el objeto router
module.exports = router;
