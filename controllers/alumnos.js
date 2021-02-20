const Alumno = require('../models/alumno');

async function ver(req, res, next) {
    let alumno = await Alumno.findOne({ matricula: req.params.alumno }).exec();

    if (!alumno) {
        return next(404);
    }

    res.render('alumnos/ver', { alumno: alumno });
}


function crear(req, res, next) {
    res.render('alumnos/crear');
}


async function guardar(req, res, next) {
    let alumno = {
        matricula: req.body.matricula,
        nombre: req.body.nombre,
        carrera: req.body.carrera,
        email: req.body.email,
        telefono: req.body.telefono
    };

    let result = await Alumno.create(alumno);

    console.log(result);

    if (result) {
        res.redirect('/');
    } else {
        res.redirect('/alumnos/crear');
    }
}


module.exports = {
    ver,
    crear,
    guardar
};
