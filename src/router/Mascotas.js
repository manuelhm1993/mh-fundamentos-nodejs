const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // Para renderizar una subcarpeta se parte desde el nombre sin '/'
    res.render('mascotas/index', {
        arrayMascotas: [
            { id: 'ms-1', nombre: 'Raquel', descripcion: 'Perra callejera en busca de hogar' },
            { id: 'ms-2', nombre: 'Luis', descripcion: 'Mi nuevo estudiante de programación' },
        ]
    });
});

module.exports = router;
