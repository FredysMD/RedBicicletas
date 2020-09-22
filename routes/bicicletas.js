var express = require('express');
var router = express.Router();
var bicicletacontroller =  require('../controllers/bicicletas');

router.get('/', bicicletacontroller.bicicletas_list);
router.get('/crear', bicicletacontroller.bicicletas_crear_get);
router.post('/crear', bicicletacontroller.bicicletas_crear_post);
router.get('/actualizar/:id', bicicletacontroller.bicicletas_actualizar_get);
router.post('/actualizar/:id', bicicletacontroller.bicicletas_actualizar_post);
router.post('/eliminar/:id', bicicletacontroller.bicicleta_eliminar);



module.exports = router;