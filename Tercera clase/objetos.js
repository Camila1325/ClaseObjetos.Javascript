//Objetos

const person = {
    primerNombre: 'Mery',
    apellido: 'Muñoz',
    edad: 22,
    documentIdentidad: 45986443,
    caracteristicas:{
        colorCabello: 'Rojo',
        etnia: 'Indioeurope',
        idiomaMaterno: 'Español'
    },

    //Método
    saludar:function(){
        return 'Hola ${this.primerNombre} ${this.apellidoUsuario}'
    }
};

//Accediendo al método
console.log(person);
console.log(person.saludar());

//Acceder a una propiedad. Forma 1.
console.log(person.apellido);
//Acceder a una propiedad. Forma 2.
console.log(person['primerNombre']);

//Clases

class Persona{
    constructor(primerNombreUsuario, apellidoUsuario){
    this.primerNombreUsuario =primerNombreUsuario;
    this.apellidoUsuario = apellidoUsuario;
    }

    //Método
    saludarPersona(){
        return "Hola ${this.primerNombreUsuario} ${this.apellidoUsuario}"
    }
}

//Se usa la clase para construir una persona (objeto)

const Personita = new Persona('Jose', 'Taborda');
Personita.primerNombreUsuario = 'Mario';
Personita.apellidoUsuario = 'Lopez';
console.log(Personita);
console.log(Personita.saludarPersona());

//Herencia
class Animales{
    constructor(nombre, edad, sonido)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }

    //Métodos
    sonido(){
        return '$(this.nombre} tiene el sonido: ${this.sonido}'; 
    }
}

//Herencia. Palabra clave extends
class Gatos extends Animales{
    //Constructor de la clase Gatos
    constructor(nombre, edad, sonido, cazador){
        super(nombre, edad, sonido)
        this.cazador = cazador;
    }

    //Método
    maullar(){
        return 'Yo puedo hacer el sonido ${this.sonido}';
    }
}

//Crear un animal, especificamente un gato

let gato = new Gatos ('Piolin', '6', 'Meow', true);
console.log(gato);

//Tarea
/*
1. Crear un objeto que tenga un mínimo dos métodos,
además debe tener una propiedad que sea un objeto

2. Crear una clase que herede de otra. 
Debe poseer mínimo 3 propiedades para el constructor

3. Crear una función tipo fleca que hago uso de la clase
construida y el objeto declarado
*/