// let i = 1;

// for (i; i <= 10; i++){
//     console.log(i);
// }

// ----------------------------------------

// let contador = 0;

// for (let i = 1; i <= 100; i++){
//     contador += i;
// }

// console.log(contador);

// ----------------------------------------

// for (let i = 2; i <= 20; i = i+2){
//     console.log(i)
// }

// ----------------------------------------

// let contador = 0;

// for (let i = 1; i <= 5; i++){
//     let ingresari = parseInt(prompt("Ingrese un i a continuacion: "))
//     contador += ingresari;
// }

// alert(`El resultado de los 5 is que ingresaste es de ${contador}.`)

// ----------------------------------------

// const listais = [50,134,534,765,86,3];

// let cantidad = listais.length;

// for (let i = 0; i <= cantidad; i++){
//     console.log(listais[i])
// }

// ----------------------------------------

// let i = 1;

// while(i <= 10){
//     console.log(i);
//     i += 1;
// }

// ----------------------------------------

// let i = 1;

// let contador = 0

// while(i <= 50){
//     contador += i;
//     console.log(i)
//     i = i + 1;
    
// }

// console.log(contador)

// ----------------------------------------

// let i = 1;

// while(i <= 20){
//     console.log(i)
//     i = i + 2;
// }

// while(i <= 20){
//     if (i % 2 == 0 ){
//         i++;
//         continue;
//     } else{
//         console.log(i);
//     }
//     i++;
// }

// ----------------------------------------

// Crear un bucle while que pida al usuario números hasta que introduzca un número negativo.

// let i;

// while (true) {
//     i = prompt("Ingrese un i: ");

//     if (i === null || i.trim() === "") {
//         alert("No se ha ingresado ningun valor. Por favor intentelo nuevamente.");
//     } else if (isNaN(i)) {
//         alert("No ha ingresado un valor numerico. Intentelo nuevamente.");
//     } else {
//         i = parseInt(i); 
//         if (i < 0) {
//             alert("Programa finalizado!");
//             break; 
//         }
//     }
// }

// ----------------------------------------

// let contadorHola = 0;

// while(true){
//     let ingresarTexto = prompt("Ingrese un texto: ");
//     if (ingresarTexto === "hola"){
//         contadorHola += 1;
//     } else if (ingresarTexto === "exit"){
//         break;
//     }
// }

// alert(`La palabra "hola", fue escrita ${contadorHola} veces.`)
// alert("Programa finalizado!")

// ----------------------------------------

// let i = 1;

// do {
//     console.log(i)
//     i += 1;
// } while (i <= 10)

// ----------------------------------------

// let i = 1;

// let contador = 0;

// do {
//     console.log(i);
//     contador += i
//     i += 1;
// } while (i <= 30)

// console.log(contador)

// ----------------------------------------

// let i = 1;

// const k = 3;

// let multiplo = 0;

// do {
//     console.log(multiplo);
//     multiplo = k * i;
//     i += 1;
// } while (multiplo <= 30)

// ----------------------------------------

// let i;

// do {
//     i = parseInt(prompt("Ingrese un i: "))
// } while (i != 0) 

// alert("Programa finalizado!")

// ----------------------------------------

// let intentos = 0;

// let i;

// let iSecreto = 3;

// do {
//     i = parseInt(prompt("Adivine el i secreto: "));
//     if (i == iSecreto){
//         alert("Felicitaciones!!!")
//     }else{
//         alert("Ha ingresado un i incorrecto. Intente hasta adivinar!");
//     }
//     intentos += 1;
// } while (i != iSecreto)

// alert (`El i secreto era ${iSecreto}. Ha ganado el juego.`)

// alert(`El i de intentos hasta adivinar fue de ${intentos} intentos`)

// ----------------------------------------

// Usar un bucle for para encontrar el primer número mayor a 50 en un array y salir del bucle.

// let listais = [23,6,13,5,9,20,34,55,543,76,867,345,75]

// let i = 0;

// for(i; i <= listais.length; i++){
//     if (listais[i] <= 50){
//         console.log(`Indice: ${i}. i: ${listais[i]}`);
//     } else {
//         console.log(`Indice: ${i}. i: ${listais[i]}, este i es mayor a 50, por lo tanto, hasta aqui llega el programa.`);
//         break;
//     }
// }

// console.log("Programa finalizado!")

// ----------------------------------------

// Usar un bucle while para encontrar el primer número impar mayor a 10 y salir del bucle.

// let i = 0;

// while(true){
//     i += 1;
//     if (i > 10 && i % 2 != 0){
//         console.log(i)
//         break;
//     }
// }

// ----------------------------------------

// Crear un bucle do...while que pida números al usuario y salga cuando el usuario introduzca un número negativo.

// let i; 

// do{
//     i = parseInt(prompt("Ingrese un i"));
//     if(i < 0){
//         break;
//     }
// } while(true)

// alert("Porgrama finalizado!")

// ----------------------------------------

// Imprimir los números del 1 al 100, pero detenerse si el número es divisible por 37.

// let i = 1;

// const divisible = 37;

// for(i; i <= 100; i++){
//     console.log(i);
//     if(i % 37 == 0){
//         break;
//     }
// }

// ----------------------------------------

// Usar un bucle for para imprimir los números del 1 al 20, pero detenerse si se encuentra el número 13

// let i = 1;

// for(i; i <= 20; i++){
//     console.log(i)
//     if (i == 13){
//         console.log("Programa finalizado!")
//         break;
//     }
// }

// ----------------------------------------

// Usar un bucle for para imprimir los números del 1 al 20, omitiendo los múltiplos de 5.

// const x = 5;

// for(let i = 0; i <= 20; i++){
//     if (i % x == 0){
//         continue;
//     }
//     console.log(i)
// }

// ----------------------------------------

// Usar un bucle while para imprimir los números del 1 al 15, omitiendo los múltiplos de 3.

// let i = 1;

// while(i <= 15){
//     if (i % 3 == 0){
//         i += 1;
//         continue;
//     } else {
//         console.log(i)
//         i += 1;
//     }
// }

// ----------------------------------------

// Crear un bucle do...while que pida al usuario números y omita los números pares.

// let i;

// do{
//     i = parseInt(prompt("Ingrese un i: "))

//     if (i % 2 == 0 && i != 0){
//         continue;
//     } else if (i % 2 != 0 && i != 0){
//         console.log(i);
//     } else {
//         alert("Programa finalizado!");
//         console.log("Programa finalizado!")
//         break;
//     }

// } while(true)

// ----------------------------------------

// Usar un bucle for para imprimir los números del 1 al 10, omitiendo el número 7.

// for (let i = 1; i <= 10; i++){
//     if (i === 7){
//         continue;
//     } else {
//         console.log(i)
//     }
// }

// ----------------------------------------

// Crear un bucle while que imprima los números del 1 al 20, omitiendo los números impares.

// let i = 1;

// while(i <= 20){
//     if (i % 2 != 0){
//         i += 1;
//         continue;
//     } else {
//         console.log(i);
//         i += 1;
//     }
// }

// ----------------------------------------

// Pedir al usuario un número del 1 al 7 e imprimir el día de la semana correspondiente.

// let i = parseInt(prompt("Ingresar un i: "))

// switch (i) {
//     case 1:
//         alert(El dia correspondiente al dia ${i} es lunes.);
//         console.log(El dia correspondiente al dia ${i} es lunes.);
//         break;
//     case 2:
//         alert(El dia correspondiente al dia ${i} es martes.);
//         console.log(El dia correspondiente al dia ${i} es martes.);
//         break;
//     case 3: 
//         alert(El dia correspondiente al dia ${i} es miercoles.);
//         console.log(El dia correspondiente al dia ${i} es miercoles.);
//         break;
//     case 4: 
//         alert(El dia correspondiente al dia ${i} es jueves.);
//         console.log(El dia correspondiente al dia ${i} es jueves.);
//         break;
//     case 5:
//         alert(El dia correspondiente al dia ${i} es viernes.);
//         console.log(El dia correspondiente al dia ${i} es viernes.);
//         break;
//     case 6:
//         alert(El dia correspondiente al dia ${i} es sabado.);
//         console.log(El dia correspondiente al dia ${i} es sabado.);
//         break;
//     case 7:
//         alert(El dia correspondiente al dia ${i} es domingo.);
//         console.log(El dia correspondiente al dia ${i} es domingo.);
//         break;
//     default:
//         alert("Ha ingresado un valor invalido. Intentelo nuevamente.")
//         console.warn("ha ingresado un valor invalido. Intentelo nuevamene.")
//         break;
// }

// --------------------------------------------------------

// Pedir al usuario una calificación (A, B, C, D, F) e imprimir un mensaje adecuado.

// let calificacion = prompt("Ingrese la calificacion: ")

// switch (calificacion){
//     case "a":
//         alert("Felicitaciones, aprobaste el examen con sobresaliente!")
//         break;
//     case "b":
//         alert("Felicitaciones, aprobaste el examen con un muy bueno!")
//         break;
//     case "c":
//         alert("Felicitaciones, aprobaste el examen con lo justo!")
//         break;
//     case "d":
//         alert("Lo siento, no fue suficiente y estas desaprobado.")
//         break;
//     case "e":
//         alert("Tienes que recursar la materia!")
//         break;
//     default:
//         alert("No ingresaste un dato valido. Intentelo nuevamente.")
//         break;
// }

// --------------------------------------------------------

// Crear un menú simple usando switch que permita al usuario elegir una opción entre 1 y 3 e imprimir un mensaje adecuado.

// let mensaje = parseInt(prompt("Ingrese el i a continuacion: "));

// switch(mensaje){
//     case 1:
//         alert("Este es el mensaje 1");
//         break;
//     case 2: 
//         alert("Este esa el mensaje 2");
//         break;
//     case 3:
//         alert("Este es el mensaje 3");
//         break;
//     default:
//         alert("Ha ingresado un dato incorrecto. Intentelo nuevamente.");
// }

// --------------------------------------------------------

// Pedir al usuario un mes (1-12) e imprimir la estación correspondiente.

// let ingresarMes = prompt("Ingrese el mes a continuacion: ");

// switch(ingresarMes){
//     case "enero":
//         alert("El mes seleccionado pertenece a verano");
//         break;
//     case "febrero":
//         alert("El mes seleccionado pertenece a verano");
//         break;
//     case "marzo":
//         alert("El mes seleccionado pertenece a otoño");
//         break;   
//     case "abril":
//         alert("El mes seleccionado pertenece a otoño");
//         break;
//     case "mayo":
//         alert("El mes seleccionado pertenece a otoño");
//         break;
//     case "junio":
//         alert("El mes seleccionado pertenece a invierno");
//         break;
//     case "julio":
//         alert("El mes seleccionado pertenece a invierno");
//         break;
//     case "agosto":
//         alert("El mes seleccionado pertenece a invierno");
//         break;
//     case "septiembre":
//         alert("El mes seleccionado pertenece a la primavera");
//         break;
//     case "octubre":
//         alert("El mes seleccionado pertenece a la primavera");
//         break;
//     case "noviembre":
//         alert("El mes seleccionado pertenece a la primavera");
//         break;
//     case "diciembre":
//         alert("El mes seleccionado pertenece a verano");
//         break;
//     default:
//         alert("Ha ingresado un dato incorrecto. Intentelo nuevamente.");
//         break;
// }

// --------------------------------------------------------

// Pedir al usuario que introduzca un carácter y determinar si es una vocal o una consonante.

// let caracter = prompt("Ingrese un caracter a continuacion: ");

// switch(caracter){
//     case "a":
//         alert("La letra 'a' es una vocal!");
//         break;
//     case "e":
//         alert("La letra 'e' es una vocal!");
//         break;
//     case "i":
//         alert("La letra 'i' es una vocal!");
//         break;
//     case "o":
//         alert("La letra 'o' es una vocal!");
//         break;
//     case "u":
//         alert("La letra 'u' es una vocal!");
//         break;
//     default:
//         alert("La letra ingresada es una consonante!");
//         break;
// }

// --------------------------------------------------------

// Crear un bucle for que imprima los números del 1 al 10 en orden inverso.

// for (let i = 10; i >= 1; i = i - 1){
//     console.log(i)
// }

// --------------------------------------------------------

// Usar un bucle while para imprimir los números del 10 al 1.

// let i = 10;

// while(i >= 1){
//     console.log(i);
//     i = i - 1;
// }

// --------------------------------------------------------

// Crear un bucle do...while que imprima los números del 5 al 15.

// let i = 5;

// do{
//     console.log(i);
//     i++;
// } while (i <= 15);

// --------------------------------------------------------

// Usar un bucle for para imprimir los elementos de un array en orden inverso.

// let array = [43,"Diego","abecedario", 245, 523343,false, "lol"];

// let cantidad = array.length;

// for (cantidad = array.length - 1; cantidad >= 0; cantidad = cantidad - 1){
//     console.log(array[cantidad]);
// }


// --------------------------------------------------------

// Crear un bucle while que imprima los números del 1 al 100, pero termine si el número es divisible por 25.

// let i = 1;

// while(i <= 100){
//     console.log(i);
//     if (i % 25 == 0){
//         break;
//     }
//     i++;
// }

// --------------------------------------------------------

// Pedir al usuario 5 números y calcular su suma usando un bucle for y prompt.

// let contador = 0;

// for(let i = 1; i <= 5; i++){
//     i = parseInt(prompt("Ingresar un i: "));
//     contador = contador + i;
//     console.log(i);
// }

// alert(`La suma de todos los is ingresados es de: ${contador}.`)
// console.log(`La suma de todos los is ingresados es de: ${contador}.`)


// --------------------------------------------------------

// Crear un bucle while que pida al usuario una palabra y termine cuando el usuario introduzca "salir".

// while(true){
//     let ingresarPalabra = prompt("Ingresar palabra: ");
//     if (ingresarPalabra === "salir"){
//         break;
//     }
// }

// alert("Programa finalizado!");

// --------------------------------------------------------

// Crear un bucle for que imprima los números del 1 al 50, pero salte los múltiplos de 4 usando continue.

// for (let i = 1; i <= 50; i++){
//     if(i % 4 == 0){
//         continue;
//     }
//     console.log(i);
// }

// --------------------------------------------------------

// Crear un bucle while que pida al usuario números y termine si el número introducido es mayor a 100.

// while(true){
//     let ingresari = parseInt(prompt("Ingresar un i:"));
//     if (ingresari >= 100){
//         break;
//     }
// }

// alert("Programa finalizado!")

// --------------------------------------------------------

// Pedir al usuario un número del 1 al 12 y usar switch para imprimir el nombre del mes correspondiente.

// let ingresari = parseInt(prompt("Ingresar un i del 1 al 12: "));

// switch(ingresari){
//     case 1:
//         alert("Enero");
//         break;
//     case 2:
//         alert("Febrero");
//         break;
//     case 3:
//         alert("Marzo");
//         break;
//     case 4:
//         alert("Abril");
//         break;
//     case 5:
//         alert("Mayo");
//         break;
//     case 6:
//         alert("Junio");
//         break;       
//     case 7:
//         alert("Julio");
//         break;
//     case 8:
//         alert("Agosto");
//         break;
//     case 9:
//         alert("Septiembre");
//         break;
//     case 10:
//         alert("Octubre");
//         break;
//     case 11:
//         alert("Noviembre");
//         break;
//     case 12:
//         alert("Diciembre");
//         break;
//     default:
//         alert("No ha ingresado un valor correcto. Intentelo nuevamente.")
// }

// --------------------------------------------------------

// Crear un bucle for que pida al usuario un número del 1 al 5 y use switch para imprimir un mensaje.

// for (let i = 1; i <= 5; i++){
//     let numero = parseInt(prompt("Ingresar un numero del 1 al 5: "));
//     switch (numero){
//         case 1:
//             alert("Este es el mensaje 1");
//             break;
//         case 2:
//             alert("Este es el mensaje 2");
//             break;
//         case 3:
//             alert("Este es el mensaje 3");
//             break;
//         case 4:
//             alert("Este es el mensaje 4");
//             break;
//         case 5:
//             alert("Este es el mensaje 5");
//             break;
//         default: 
//             alert("Ha ingresado un dato invalido. Intentelo nuevamente")
//     }
// }

// --------------------------------------------------------

// Crear un bucle while que pida al usuario un número del 1 al 7 y use switch para imprimir el día de la semana.

// while(true){
//     let numero = prompt("Ingresar un numero del 1 al 7: ");
//     if (numero === "exit"){
//         alert("Programa finalizado!");
//         break;
//     }
//     switch (numero){
//         case "1":
//             alert("Lunes");
//             break;
//         case "2":
//             alert("Martes");
//             break;
//         case "3":
//             alert("Miercoles");
//             break;
//         case "4":
//             alert("Jueves");
//             break;
//         case "5":
//             alert("Viernes");
//             break;
//         case "6":
//             alert("Sabado");
//             break;
//         case "7":
//             alert("Domingo");
//             break;
//         default: 
//             alert("Ha ingresado un dato invalido. Intentelo nuevamente")
//     }
// }

// --------------------------------------------------------

// Usar un bucle do...while para pedir al usuario una letra y usar switch para determinar si es vocal o consonante.



// do{

//     let ingresarLetra = prompt("Ingrese una sola letra: ")

//     if (ingresarLetra === "salir"){
//         alert("Programa finalizado!");
//         break;
//     } else if (ingresarLetra == ""){
//         alert("Debe ingresar una letra...");
//     }
//     switch(ingresarLetra){
//         case "1":
//         case "2":
//         case "3":
//         case "4":
//         case "5":
//         case "6":
//         case "7":
//         case "8":
//         case "9":
//         case "0":
//             alert ("Ha ingresado un valor numerico y no esta permitido. Intentelo nuevamente");
//             break;
//         default: 
//         switch(ingresarLetra){
//             case "a":
                    
//             case "e":
                    
//             case "i":
                    
//             case "o":
                    
//             case "u":
//                 alert("Vocal!");
//                 break;
//             default: 
//                 alert("Consonante!");
//                 break;
//         }
//     }
    

// } while(true)

// --------------------------------------------------------

// Crear un bucle for que imprima los números del 1 al 20 y use switch para imprimir un mensaje si el número es divisible por 4.

// for (let i = 1; i <= 20; i++){
//     let divisible = i % 4 == 0;
//     switch(i){
//         case i:
//             if (divisible){
//             console.log(`El numero ${i} es divisible por 4.`);
//             break;
//             };
//         default:
//             console.log(i);
//             break;
//     }
// }

// --------------------------------------------------------

// Crear un bucle while que pida al usuario una calificación (A, B, C, D, F) y use switch para imprimir un mensaje adecuado.

// while (true){
//     let calificacion = prompt("Ingrese una calificacion: ")
//     if (calificacion === ""){
//         alert("Debe ingresar una calificacion.");
//         break;
//     } else if (calificacion === "salir"){
//         alert("Programa finalizado!")
//         break;
//     }
//     switch(calificacion){
//         case "a":
//             alert("Sobresaliente. Felicitaciones!");
//             break;
//         case "b":
//             alert("Muy bien. Felicitaciones!");
//             break;
//         case "c":
//             alert("Bien. Felicitaciones!");
//             break;
//         case "d":
//             alert("Regular. Presta mas atencion!");
//             break;
//         case "f":
//             alert("Desaprobado. Esfuerzate mas!");
//             break;
//         default: 
//             alert("No ha ingresado un dato valido. Intentelo nuevamente.");
//             break;
//     }   

// }

// --------------------------------------------------------

// Crear un bucle for que imprima los números del 1 al 100, pero use continue para saltar los números múltiplos de 10.

// for (let i = 1; i <= 100; i++){
    
//     if (i % 10 == 0){
//         continue;
//     }
//     console.log(i)
// }

// --------------------------------------------------------

// Crear un bucle while que pida al usuario números y termine si introduce un número primo.

// while (true){
//     let numero = parseInt(prompt("Ingrese un numero: "));
//     if (numero >= 1){

//     }
// }





// --------------------------------------------------------

// Crear un bucle do...while que pida al usuario su edad y use switch para imprimir un mensaje según la década.

// do{
//     let edad = parseInt(prompt("Ingrese su edad: "));
//     if (edad === 0){
//         alert("Programa finalizado!");
//         break;
//     }
//     if (edad < 0){
//         alert("No se puede ingresar un valor negativo. Intentelo nuevamente!");
//         break;
//     }
//     switch(edad){
//         case (edad >= 0 && edad <= 10):
//             alert("Usted nacio entre 2014 y 2024");
//             break;
//         case (edad >= 10 && edad <= 20):
//             alert("Usted nacio entre 2004 y 2024");
//             break;
//         case (edad >= 20 && edad <= 30):
//             alert("Usted nacio entre 1994 y 2024");
//             break;
//         case (edad >= 30 && edad <= 40):
//             alert("Usted nacio entre 1984 y 2024");
//             break;
//         case (edad >= 40 && edad <= 50):
//             alert("Usted nacio entre 1974 y 2024");
//             break;        
//         case (edad >= 50 && edad <= 60):
//             alert("Usted nacio entre 1964 y 2024");
//             break;
//         case (edad >= 60 && edad <= 70):
//             alert("Usted nacio entre 1954 y 2024");
//             break;
//         case (edad >= 70 && edad <= 80):
//             alert("Usted nacio entre 1944 y 2024");
//             break;
//         case (edad >= 80 && edad <= 90):
//             alert("Usted nacio entre 1984 y 2024");
//             break;
//         case (edad >= 90 && edad <= 100):
//             alert("Usted es Mirtha Legrand xd");
//             break;
//     }
    
    
// } while (true) 









// --------------------------------------------------------

// Usar un bucle for para imprimir los números del 1 al 20, pero termine si el número es un cuadrado perfecto usando break.











// --------------------------------------------------------

// Crear un bucle while que pida al usuario un día de la semana (1-7) y use switch para imprimir un mensaje, terminando si el usuario introduce un número mayor a 7.









































