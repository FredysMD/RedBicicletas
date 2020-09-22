var Bicicletas = require('../../models/bicicletas');
var request = require('request');
var server = require('../../bin/www');



describe('Bicicleta api',()=>{

     describe('GET',()=>{
        it('Status 200',()=>{
            expect(Bicicletas.allBicis.length).toBe(0);

            request('http://localhost:3000/api/bicicletas/',function(error,response,body){
                expect(response.statusCode).toBe(200);
            });
        });

     });

     describe('POST',()=>{
        it('Status 200',(done)=>{
           
            var headers = {'Content-Type':'application/json'};
            var bicicleta = '{"id":10,"color":"rojo","modelo":"clásica","latitud":-31,"longitud":131}';

            request.post(
               { 
                headers:headers,
                url:'http://localhost:3000/api/bicicletas/crear',
                body:bicicleta
               },
                function(error,response,body){
                  expect(response.statusCode).toBe(200);
                  expect(Bicicletas.allBicis.length).toBe(1);
                  done();
                });
        });

     });
});