// const EDAD = 18 

// let edadDeUsuario = prompt("Ingrese su edad a continuacion: ")

// if (edadDeUsuario >= 18) {
    
//     let resultado = alert ("Usted es mayor de " + EDAD + " años, puede pasar")

//     console.log (resultado)

// } else {
    
//     let resultado = alert ("Usted es menor de " + EDAD + " años, no puede ingresar.")

//     console.log (resultado)
// }

// const MIL = 1000;

// let numeroIngresado = prompt ("Ingresar un numero: ");

// if (numeroIngresado == ""){
    
//     alert("No ha ingresado ningun valor. Intentelo nuevamente.")
    
//     console.warn("No ha ingresado ningun valor. Intentelo nuevamente.")

// } else if (numeroIngresado > MIL) {
    
//     alert("El numero ingresado es mayor a " + MIL +".")

//     console.log("El numero ingresado es mayor a " + MIL +".")

// } else if (numeroIngresado < 0 || numeroIngresado == 0) {
    
//     alert("El numero ingresado es negativo o igual a 0.")

//     console.log("El numero ingresado es negativo o igual a 0.")

// } else if (numeroIngresado < MIL) {
    
//     alert("El numero ingresado es menor a " + MIL +".")

//     console.log("El numero ingresado es menor a " + MIL +".")

// } else {
    
//     alert("El dato ingresado no es un numero. Intentelo nuevamente")

//     console.warn("El dato ingresado no es un numero. Intentelo nuevamente")
// }

const impuestoPais = x => x * 0.30;

const iva = x => x * 0.21; 

let precio = parseFloat(prompt("Ingrese el precio del producto: "));

console.log ("El precio ingresado es de $" + precio)

console.log ("El impuesto pais es de $"+ impuestoPais(precio))

console.log("El iva es de $" + iva(precio)) 

let precioTotal = x => precio + iva(precio) + impuestoPais(precio)

console.log("El precio total con iva e impuesto pais incluido es de $" + precioTotal())
















