const Usuario = require('../../models/usuario');

exports.usuario_list = function(req, res){
    Usuario.find({}, function (err, usuario) {  
        res.status(200).json({
            dato: usuario
        });
    });
};

exports.usuario_create = function (req, res) {  
    const usuario = new Usuario({
        nombre: req.body.nombre
    });

    usuario.save(function (err) { 
        res.status(200).json(usuario);
    });
};

exports.usuario_reserva = function (req, res) {  
    Usuario.findById(req.body.id, function(err, usuario) {
        usuario.reservar(req.body.biciId, req.body.desde, req.body.hasta, function (err) {
            res.status(200).send();
        })
    })
};