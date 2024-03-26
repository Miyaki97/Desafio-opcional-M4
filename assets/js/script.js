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
    event.preventDefault()// previene el ingreso de cualquier info errónea
