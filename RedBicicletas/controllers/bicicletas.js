const Bicicleta = require("../models/bicicletas");
var Bicicletas = require("../models/bicicletas");


exports.bicicletas_list = function(req,res) {
    res.render('bicicletas/index',{bicicletas:Bicicletas.allBicis});
}

exports.bicicletas_crear_get = function(req,res){
    res.render('bicicletas/crear');
}

exports.bicicletas_crear_post = function(req,res){
   
    var bicicleta = new Bicicletas(req.body.id, req.body.color, req.body.modelo,[req.body.latitud, req.body.longitud]);
    
    Bicicletas.add(bicicleta);

    res.redirect('/bicicletas');

}

exports.bicicletas_actualizar_get = function(req,res){
    
    var bicicleta = Bicicletas.findById(req.params.id);

    res.render('bicicletas/actualizar', {bicicleta});
}

exports.bicicletas_actualizar_post = function(req,res){
   
    var bicicleta = Bicicletas.findById(req.params.id);

    bicicleta.id = req.body.id;
    bicicleta.modelo = req.body.modelo;
    bicicleta.color = req.body.color;
    bicicleta.ubicacio = [req.body.latitud,req.body.longitud];

    res.redirect('/bicicletas');

}


exports.bicicleta_eliminar = function(req,res){

    Bicicletas.deleteById(req.body.id);
    
    res.redirect('/bicicletas');
    
}
