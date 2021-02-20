const Profesor = require('../models/profesor');

async function ver(req, res, next) {
    let profesor = await Profesor.findOne({ no_empleado: req.params.profesor }).exec();

    if (!profesor) {
        return next(404);
    }

    res.render('profesores/ver', { profesor: profesor });
}


function crear(req, res, next) {
    res.render('profesores/crear');
}


async function guardar(req, res, next) {
    let profesor = {
        no_empleado: req.body.no_empleado,
        nombre: req.body.nombre,
        carrera: req.body.carrera,
        telefono: req.body.telefono
    };

    let result = await Profesor.create(profesor);

    if (result) {
        res.redirect('/');
    } else {
        res.redirect('/profesores/crear');
    }
}


module.exports = {
    ver,
    crear,
    guardar
};
