var express = require('express');
var router = express.Router();
var usuarioController = require('../../controllers/api/usuarioAPI');

router.get('/', usuarioController.usuario_list);
router.post('/crear', usuarioController.usuario_create);
router.post('/reserva', usuarioController.usuario_reserva);

module.exports = router;