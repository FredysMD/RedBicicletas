var express = require('express');
var router = express.Router();
var bicicletacontrollerapi =  require('../../controllers/api/bicicletaAPI');

router.get('/', bicicletacontrollerapi.bicicleta_list);
router.post('/crear', bicicletacontrollerapi.bicicleta_crear);
router.delete('/eliminar', bicicletacontrollerapi.bicicleta_elimidarById);
router.put('/actualizar/:id', bicicletacontrollerapi.bicicleta_actualizarById);
module.exports = router;