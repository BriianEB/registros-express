const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    matricula: {
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
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});

const Alumno = mongoose.model('Alumno', alumnoSchema);
module.exports = Alumno;
