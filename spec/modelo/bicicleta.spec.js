var Bicicleta = require('../../models/bicicletas');

beforeEach(()=>{ Bicicleta.allBicis = []});
// Inicializar con cero bicicletas, lo que significa que en cada prueba se deben crear bicicletas

describe('Todas las bicicletas',()=>{
 
    it('Hay cero bicicletas',()=>{

        expect(Bicicleta.allBicis.length).toBe(0);
    });

});

describe('Agreagar bicicleta' ,()=>{

    it('Agregando una bicicleta',()=>{
       
        var bicicleta_1 = new Bicicleta(1,"Verde","Clásica",[-1,1]);
        Bicicleta.add(bicicleta_1);
        
        expect(Bicicleta.allBicis.length).toBe(1);
    });

});

describe('Encontrar por id', () => {
 
     it('encontrar una bicicleta por su id', () =>{

        var bicicleta_1 = new Bicicleta(1,"roja","montaña");
        var bicicleta_2 = new Bicicleta(2,"roja","ruta",[]);
        
        Bicicleta.add(bicicleta_1);
        Bicicleta.add(bicicleta_2);

        expect(Bicicleta.allBicis.length).toBe(2);
        expect(Bicicleta.findById(1).color).toBe("roja");
        expect(Bicicleta.findById(2).ubicacion).toEqual([]);

     });
});


describe('Eliminar bicicleta', ()=> {

    it('Eliminar bicicleta por id',()=>{
        var bicicleta_1 = new Bicicleta(1,"roja","montaña");
        var bicicleta_2 = new Bicicleta(2,"roja","ruta",[]);
        
        Bicicleta.add(bicicleta_1);
        Bicicleta.add(bicicleta_2);

        Bicicleta.deleteById(1);

        expect(Bicicleta.allBicis.length).toBe(1);

    });

});