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
        res.redirect('mascotas');
    } 
    catch (err) {
        console.log(err);
    }
});

// Show
router.get('/:_id', async (req, res) => {
    const _id = req.params._id;

    try {
        const mascota = await Mascota.findOne({ _id: _id });

        res.render('mascotas/show', { 
            mascota: mascota,
            error: false,
        });
    } 
    catch (err) {
        console.log(err);

        res.render('mascotas/show', { 
            error: true,
            message: "No se encontró el id seleccionado 😭",
        });
    }
});

// Edit
router.get('/:_id/edit', async (req, res) => {
    const _id = req.params._id;

    try {
        const mascota = await Mascota.findOne({ _id: _id });

        res.render('mascotas/edit', { 
            mascota: mascota,
            error: false,
        });
    } 
    catch (err) {
        console.log(err);

        res.render('mascotas/edit', { 
            error: true,
            message: "No se encontró el id seleccionado 😭",
        });
    }
});

// Delete
router.delete('/:_id', async (req, res) => {
    const _id = req.params._id;

    try {
        const mascota = await Mascota.findByIdAndDelete({ _id: _id });

        // Comprobar desde acá, porque el redirect falla y usar json con fetch
        if(mascota) {
            res.json({ 
                estado: true,
                message: "Mascota eliminada exitosamente",
            });
        }
        else {
            res.json({ 
                estado: false,
                message: "No se pudo eliminar la mascota 😭",
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;
