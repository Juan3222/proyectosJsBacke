//Variables

/* let comision = 534345;

console.log(comision); */

//Funciones

/* function suma(a, b) {
  //calculo, validacion
  return console.log(a + b);
}

suma(2, 7);

const restar = (a, b) => a - b; */

//Funcion anonima

/* const saludar = function (nombre) {
  console.log(`Hola ${nombre} !`);
};
saludar("Juan"); */

//Clases

/* Atributos = caracteristicas (variables)
   Metodos() = Acciones (funciones) */

/* class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

let persona1 = new Persona("Pedro", 44);

persona1.saludar();

console.log(persona1); */

class Contador {
  static cuentaGlobal = 0;

  constructor(responsable) {
    this.responsable = responsable;
    this.cuentaIndividual = 0;
  }

  obtenerResponsable() {
    return this.responsable;
  }

  obtenerCuentaIndividual() {
    return this.cuentaIndividual;
  }

  static obtenerCuentaGlobal() {
    return Contador.cuentaGlobal;
  }

  contar() {
    this.cuentaIndividual++;
    Contador.cuentaGlobal++;
  }
}

const contador1 = new Contador("Persona A");
console.log(contador1.obtenerResponsable());
console.log(contador1.obtenerCuentaIndividual());

contador1.contar();
contador1.contar();
contador1.contar();

console.log(contador1.obtenerCuentaIndividual());
console.log(Contador.obtenerCuentaGlobal());
