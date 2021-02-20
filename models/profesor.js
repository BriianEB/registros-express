const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
    no_empleado: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});

const Profesor = mongoose.model('Profesor', profesorSchema, 'profesores');
module.exports = Profesor;
