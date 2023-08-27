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

// Create
router.get('/create', (req, res) => {
    res.render('mascotas/create');
});

// Store
router.post('/', async (req, res) => {
    const body = req.body;

    if(!body) return;

    try {
        // Crear una nueva mascota con el modelo correspondiente
        const mascota = await Mascota.create(body);   

        // Redireccionar al index
        res.redirect('/mascotas');
    } 
    catch (err) {
        console.log(err);
    }
});

module.exports = router;
