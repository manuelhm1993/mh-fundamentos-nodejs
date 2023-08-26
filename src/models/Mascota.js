// Importar a mongoose ORM
const mongoose = require('mongoose');

// Schema: estructura de la colección (tabla)
const Schema = mongoose.Schema;

// Crear los campos del modelo
const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String,
});

// Modelo
const Mascota = new mongoose.model('Mascota', mascotaSchema);

// Exportar el modelo
module.exports = Mascota;
