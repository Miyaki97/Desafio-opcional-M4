class Propietario {
    constructor(nombre, telefono, direccion){
        this._nombre = nombre
        this._telefono = telefono
         this._direccion = direccion
    }
    

    datosPropietario(){
        return `El propietario de nombre ${this._nombre}, teléfono ${this._telefono} y dirección ${this._direccion} `
    }
        
    
}

class Animal extends Propietario{
    constructor(nombre, direccion, telefono){
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }

    get tipo(){
        return this._tipo 
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombre
    }

    get nombreMascota(){
        return this._nombreMascota
    }

    set nombreMascota(value){
        this._nombreMascota = value
    }
}

const formularioAnimales = document.getElementById("formulario")

formularioAnimales.addEventListener("submit", (event)=> {
    event.preventDefault()

    
const dueñoValue = document.getElementById("propietario").value;
const telefonoValue = document.getElementById("telefono").value;
const residenciaValue = document.getElementById("direccion").value;
const nombreMascotaValue = document.getElementById("nombreMascota").value;
const tipoMascotaValue = document.getElementById("tipo").value;
const consultaValue = document.getElementById("enfermedad").value;

//iteración de las constantes 
const registroMascota = new Mascota(dueñoValue,telefonoValue, residenciaValue, tipoMascotaValue, nombreMascotaValue )

console.log(registroMascota.datosPropietario())

const resultado = document.getElementById("resultado");

resultado.textContent = `${registroMascota.datosPropietario()}. Acudió a la consulta con su ${tipoMascotaValue} de nombre ${nombreMascotaValue} y vino a la consulta por el motivo de: ${consultaValue} `


})

