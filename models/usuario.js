var mongoose = require('mongoose');
var Reserva = require('./reserva');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var Schema = mongoose.Schema;

const validaremail = function(email){
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return re.test(email);
}

var usuarioSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'el nombre es obligatorio']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'el email es obligatorio'],
        lowercase: true,
        validate: [validaremail,'Por favor, ingrese un email valido!'],
        match:[/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i]
    },
    password: {
        type: String,
        required: [true, 'el password es obligatorio']
    },
    passwordResetToken: String,
    
    passwordResetTokenExpires: Date,

    verificado:{
        type:Boolean,
        default: false
    }
});

usuarioSchema.pre('save', function (next) {
   
    if(this.isModified('password')){
        this.bcrypt.hashSync(this.password, saltRounds);
    }
    next();

});

usuarioSchema.methods.validarPassword = function (password) {
    return bcrypt.compareSync(pasword, this.password);
}

usuarioSchema.methods.reservar = function (biciId,desde,hasta,cb) {
    var reserva = new Reserva({usuario: this._id,bicicleta: biciId,desde: desde,hasta: hasta});
    console.log(reserva);
    reserva.save(cb)   
};

module.exports = mongoose.model('Usuario',usuarioSchema);