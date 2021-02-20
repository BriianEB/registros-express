const Alumno = require('../models/alumno');
const Profesor = require('../models/profesor');

async function index(req, res, next) {
    let alumnos = await Alumno.find({});
    let profesores = await Profesor.find({});

    let model = {
        alumnos: alumnos,
        profesores: profesores
    }

    res.render('home/index', model);
}

function color(req, res, next) {
    res.render('home/color');
}

module.exports = {
    index,
    color
};
