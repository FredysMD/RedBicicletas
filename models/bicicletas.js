var Bicicleta = function(id,color,modelo,ubicacion){
    
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: '+ this.id + ' color: '+ this.color;
}

Bicicleta.allBicis = [];

Bicicleta.add = function(agregarBicicleta){
    Bicicleta.allBicis.push(agregarBicicleta);
}

Bicicleta.findById = function(id){
     var biciId = Bicicleta.allBicis.find(x => x.id == id);
     
     if(biciId){
         return biciId
     }else{
         throw new Error(`Error, ${id}`);
     }
}

Bicicleta.deleteById = function(idbicicleta){

    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if(Bicicleta.allBicis[i].id == idbicicleta){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
        
    }
}


var bici1 = new Bicicleta(1,"rojo", "urbana",[10.5952489,-74.19438]);
var bici2 = new Bicicleta(1,"verde", "clasica",[10.5952412,-74.19438]);

Bicicleta.add(bici1);
Bicicleta.add(bici2);

module.exports = Bicicleta;