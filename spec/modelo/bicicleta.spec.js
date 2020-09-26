var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicletas');

describe('Testing',function(){
    beforeEach( function(done) {
        var mongodb = 'mongodb://localhost/testdb';
        mongoose.connect(mongodb, {useNewUrlParser:true, useUnifiedTopology: true});
    
        const db = mongoose.connection;
        db.on('error',console.error.bind(console,'connection error'));
        db.once('open', function () {
            console.log('connected!');
            done();
        });
    });

    afterEach(function (done) {
        Bicicleta.deleteMany({}, function (err,success) {
            if(err) console.log(err);
            done();
        });
    });
    describe('Bicicleta', ()=>{
        it('Crear bicicletas',()=>{
            var bicicleta = Bicicleta.CrateInstance(1,"negra","ruta",[-31,-15]);
            const posicion = 0;
    
            expect(bicicleta.code).toBe(1);
            expect(bicicleta.color).toBe("negra");
            expect(bicicleta.ubicacion[posicion]).toEqual(-31);
        });
    });

    describe('Todas Bicicleta', ()=>{
        it(' bicicletas vacias',function(done){
            Bicicleta.allBicis(function(err,bicis){
                expect(bicis.length).toBe(0);
                done();
            });
        });
    });
    describe('Bicicleta.add', ()=>{
        it('agregar bicicletas', function(done){
            var bicicleta = new Bicicleta({code:1,color:"verde",modelo:"ruta"});
            Bicicleta.add(bicicleta, function(err,nuevabicicleta){
                if(err) console.log(err);
                Bicicleta.allBicis(function(err,bicis){
                    expect(bicis.length).toEqual(1);
                    expect(bicis[0].code).toEqual(1);
                    done();
                });

            });

        });
    });

    describe('Bicicleta.findBycode', ()=>{
        it('buscar bicicleta',function(done){
                Bicicleta.allBicis(function(err,bicis){
                    expect(bicis.length).toBe(0);

                    var bicicleta = new Bicicleta({code:1,color:"verde",modelo:"ruta"});
                    Bicicleta.add(bicicleta, function(err,nuevabicicleta){
                        if(err) console.log(err);
                        
                        var bicicleta2 = new Bicicleta({code:2,color:"gris",modelo:"ruta"});
                         Bicicleta.add(bicicleta, function(err,nuevabicicleta){
                            if(err) console.log(err);
                             
                            Bicicleta.findByCode(1, function(err,bicicletaCode){

                                expect(bicicletaCode.code).toBe(bicicleta.code);
                                expect(bicicletaCode.color).toBe(bicicleta.color);
                                expect(bicicletaCode.modelo).toBe(bicicleta.modelo);
                                done();
                            });

                        });
                    });
                });
         });
    });
    describe('Bicicleta.removeByCode', () => {
        it('se debe eliminar una bicicleta y quedaravacia', (done) => {
            Bicicleta.allBicis(function (err, bicis) {
                expect(bicis.length).toBe(0);

                var bicicleta = new Bicicleta({ code: 1, color: 'verde', modelo: 'ruta' });
                Bicicleta.add(bicicleta, function (err, newBici) {
                    if (err) console.log(err);

                    Bicicleta.removeByCode(1, function (error) {
                        expect(bicis.length).toBe(0);

                        done();
                    })
                })
            })
        })
    })
 
});

