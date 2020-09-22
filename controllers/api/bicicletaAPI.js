var Bicicletas = require('../../models/bicicletas');


exports.bicicleta_list = function(req,res){
    res.status(200).json({
        bicicletas:Bicicletas.allBicis
    });
}


exports.bicicleta_crear = function(req,res){

    var bicicleta = new Bicicletas(req.body.id, req.body.color, req.body.modelo,[req.body.latitud, req.body.longitud]);
    Bicicletas.add(bicicleta);

    res.status(200).json({
        bicicleta:bicicleta
    });

}

exports.bicicleta_elimidarById = function(req,res){

    Bicicletas.deleteById(req.body.id);

    res.status(200).send();

}

exports.bicicleta_actualizarById = function(req,res){

    var bicicleta = Bicicletas.findById(req.params.id);

    bicicleta.id = req.body.id;
    bicicleta.modelo = req.body.modelo;
    bicicleta.color = req.body.color;
    bicicleta.ubicacio = [req.body.latitud,req.body.longitud];

    res.status(200).send();



}