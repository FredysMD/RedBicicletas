var mongoose = require('mongoose');
var Usuario = require('../../models/usuario');
var Bicicleta = require('../../models/bicicletas');
var Reserva = require('../../models/reserva');


describe('Testing Usuarios', () => {
    beforeAll((done) => { 
        mongoose.connection.close(done) 
    });

    beforeEach( (done) => {
        mongoose.disconnect();
        var mongoDB = "mongodb://localhost/testdb";

        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});

        mongoose.connection.on('connected', () => {
            console.log('Connected!');
            done();
        });
    });

    afterEach( (done) => {
        Reserva.deleteMany({}, function (err, success) {
            if (err) 
                console.log(err);
            
            Usuario.deleteMany({}, function (err, success) {
                if (err) 
                    console.log(err);
                
                Bicicleta.deleteMany({}, function (err, success) {
                    if (err) 
                        console.log(err);
                    
                    mongoose.connection.close(done);
                });
            })
        });
    });

    describe('Reservar una Bicicleta', () => {
        it('Debe existir la reserva', (done) => {
            var user = new Usuario({ nombre: 'Fredys' });
            user.save();

            var bicicleta = new Bicicleta({ code: 1, color: 'verde', modelo: 'clásica' });
            bicicleta.save();

            var hoy = new Date();
            var mañana = new Date();
            mañana.setDate(hoy.getDate() + 1);

            user.reservar(bicicleta.id, hoy, mañana, function (err, reserva) {
                Reserva.find({}).populate('bicicleta').populate('usuario').exec(function (err, reservas) {
                    
                    expect(reservas.length).toBe(1);
                    expect(reservas[0].diasDeReserva()).toBe(2);
                    expect(reservas[0].bicicleta.code).toBe(1);
                    expect(reservas[0].usuario.nombre).toBe(user.nombre);

                    done();
                });
            });
        });
    });


});