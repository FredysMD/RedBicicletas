
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bicicletaSchema = Schema({
    code : Number,
    color:String,
    modelo:String,
    ubicacion:{
        type: [Number], idex:{type:'2dsphere', sparse:true}
    }
});

bicicletaSchema.statics.CrateInstance = function(code,color, modelo, ubicacion){

    return new this({
        code:code,
        color:color,
        modelo:modelo,
        ubicacion:ubicacion
    });
}

bicicletaSchema.methods.toString = function(){
    return 'code '+this.code + ' color'+this.color;
}

bicicletaSchema.statics.allBicis = function(cb){
    return this.find({},cb);
}
bicicletaSchema.statics.add = function(bicicleta,cb){
    this.create(bicicleta,cb);
}
bicicletaSchema.statics.findByCode = function(code,cb){
    return this.findOne({code:code},cb);
}
bicicletaSchema.statics.removeId = function(code,cb){
    return this.deleteOne({code:code},cb);
}

module.exports = mongoose.model('Bicicletas',bicicletaSchema);

