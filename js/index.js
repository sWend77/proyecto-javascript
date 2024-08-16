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

// Actividades---------------------------------------------------------------------------------------------------------------------------------------------

// for (i = 1; i <= 10; i++){
//     console.log(i)
// }

// let suma = 0;

// for (let i = 1; i <= 100; i++) {
    
//     suma += i;

//     console.log(suma)

// }

// let i = 1

// console.log("Los numeros pares son: ")

// for (i; i <= 20 ; i++){
    
//     if( i % 2 == 0){
//         console.log(i)
//     }

// }

// sumaNum = 0;

// alert("Ingrese 5 valores que quiera sumar...");
// console.log("Ingrese 5 valores que quiera sumar...");

// for (let i = 1; i <= 5; i++){

//     ingresarNumero = parseInt(prompt("Ingrese el "+ i + "° numero: "));

// if (ingresarNumero == ""){
        
//         alert("No ha ingresado ningun valor. Intentelo nuevamente.");
//         console.log("No ha ingresado ningun valor. Intentelo nuevamente.");
//         break;
        
//     } else if (isNaN(ingresarNumero) == true){
                
//         alert("Debe ingresar un valor numerico. Intentelo nuevamente.");
//         console.log("Debe ingresar un valor numerico. Intentelo nuevamente.");
//         break;
            
//     } else if (ingresarNumero < 0){

//         alert("No se permite ingresar numeros negativos. Intentelo nuevamente.");
//         console.log("No se permite ingresar numeros negativos. Intentelo nuevamente.");
//         break;

//     } else {
//         sumaNum += ingresarNumero;
//     }
// }


// alert("La suma de los 5 numeros ingresados es de: " + sumaNum);

// console.log("La suma de los 5 numeros ingresados es de: " + sumaNum);

// let i = 1

// while (i <= 10){
//     console.log(i)
//     i += 1
// }

// let i = 1

// while (i <= 50){
//     console.log(i)
//     i += 1
// }

// let i = 1

// console.log("Los numeros impares del 1 al 20 son: ")

// while(i <= 20){
//     if(i % 2 != 0) 
//     console.log(i)
//     i+=1
// }

// let ingresarNumero = parseInt(prompt("Ingrese un numero a continuacion:"))

// while(ingresarNumero >= 0){
//     console.log("Ha ingresado el numero: "+ ingresarNumero)
//     ingresarNumero = parseInt(prompt("Ingrese otro numero"))
// }

// console.log("No se pueden ingresar numeros negativos")

// let ingresarTexto = prompt("Ingrese el texto que desee: ");

// let i = 0;

// while(ingresarTexto != "exit"){
//     if (ingresarTexto == "hola" || ingresarTexto == "Hola"){
//         i+=1; 
//         console.log("La cantidad de veces que se introdujo la palabra 'hola' o 'Hola' es de "+i+" veces.");
//     }
//     ingresarTexto = (prompt("Ingrese otro texto: "))
// }

// alert("Programa finalizado!")

// console.log("Programa finalizado!")

// let ingresarNombre = prompt("Ingrese su nombre a continuacion:");

// const ingresarMensaje = "Hola, que tal, como estas? Mi nombre es";

// function mostrarMensaje(datos1,datos2){
//     return console.log(datos1,datos2);
// }

// console.log(mostrarMensaje(ingresarMensaje,ingresarNombre))

// function suma(num1,num2){
//     resultado = num1+num2;
//     return console.log("El resultado de la suma es "+resultado)
// }

// suma(15,50)

// function multiplicar(num1,num2,num3){
//     resultado = num1*num2*num3;
//     return console.log("El resultado de la multiplicacion es " + resultado)
// }
// multiplicar(2,5,10)

// let cuadrado = function(num){
//     resultado = num*num
//     return console.log("El cuadrado de "+num+" es "+resultado)
// }

// cuadrado(4)

// let calculadora = (num1,num2,operacion) => {
    
//     switch (calculadora){
        
//         case (operacion == "suma"):
//                 resultado = num1 + num2;
//                 return console.log("El resultado de la suma es: "+resultado)
//                 break;
//         case "resta": 
//                 resultado = num1 - num2;
//                 return console.log("El resultado de la resta es: "+resultado)
//                 break;
//         case "multiplicacion": 
//                 resultado = num1 * num2;
//                 return console.log("El resultado de la multiplicacion es: "+resultado)
//                 break;  
//         case "division":
//                 resultado = num1 / num2;
//                 return console.log("El resultado de la division es: "+resultado)
//                 break;  
//         default: 
//             return "Alguno de los datos estan mal ingresados. Intentelo nuevamente"
//     }
// }

// calculadora(15,10,"suma")

// const doble = (num) => {
//     resultado = num*2;
//     return console.log("El doble de "+num+" es "+resultado)
// }

// doble(150)

// let numMayor = function(num1,num2){
//     if (num1 > num2){
//         return console.log("El primer numero("+num1+") es mayor que el segundo("+num2+").")
//     } else {
//         return console.log("El segundo numero("+num2+") es mayor que el primero("+num1+").")
//     }
// }

// numMayor(90,110) 













