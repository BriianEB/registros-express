var express = require('express');
var router = express.Router();

var homeController = require('./controllers/home');
var alumnosController = require('./controllers/alumnos');
var profesoresController = require('./controllers/profesores');


router.get('/', homeController.index);
router.get('/color', homeController.color);

router.get('/alumnos/crear', alumnosController.crear);
router.get('/alumnos/:alumno', alumnosController.ver);
router.post('/alumnos/guardar', alumnosController.guardar);

router.get('/profesores/crear', profesoresController.crear);
router.get('/profesores/:profesor', profesoresController.ver);
router.post('/profesores/guardar', profesoresController.guardar);

module.exports = router;
