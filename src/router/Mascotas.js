const express = require('express');

const router = express.Router();
const Mascota = require('../models/Mascota');

// Como se van a usar promesas en las querys del modelo se debe usar async
router.get('/', async (req, res) => {
    try {
        const mascotas = await Mascota.find({});

        // Para renderizar una subcarpeta se parte desde el nombre sin '/'
        res.render('mascotas/index', {
            mascotas: mascotas
        });
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;
