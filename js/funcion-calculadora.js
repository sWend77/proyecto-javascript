alert("Calcule el precio total del producto que desea comprar con impuestos incluidos a continuacion...")

console.log("Calcule el precio total del producto que desea comprar con impuestos incluidos a continuacion...")

let precio = (prompt("Ingrese el precio del producto o salga del programa escribiendo 'exit': "));

while (precio != "exit") {

    if (precio === "") {
        
        alert("No ha ingresado ningún valor. Ingrese algún número en el siguiente intento.");
        
        console.warn("No ha ingresado ningún valor. Ingrese algún número en el siguiente intento.");

        break;
    
    } else if (isNaN(precio)){
        
        alert("No ha ingresado un valor numérico. Inténtelo nuevamente.");
        
        console.warn("No ha ingresado un valor numérico. Inténtelo nuevamente.");

        break;
    
    } else if (precio < 0){
        
        alert("No existen valores negativos para los precios. Inténtelo nuevamente.");
        
        console.warn("No existen valores negativos para los precios. Inténtelo nuevamente.");

        break;
    
    } else{ 

        console.log("El precio del producto es $" + precio);

        precio = parseFloat(precio);
                    
        const impuestoPais = x => x * 0.30;

        const iva = x => x * 0.21; 

        console.log ("El impuesto pais es de $"+ impuestoPais(precio))

        console.log("El iva es de $" + iva(precio)) 
                    
        let precioTotal = x => precio + iva(precio) + impuestoPais(precio)

        console.log("El precio total con iva e impuesto pais incluidos es de $" + precioTotal())

        precio = prompt("Ingrese un nuevo precio si desea continuar o escriba 'exit': ");
    }
}

if (precio == "exit"){
        
    alert("Programa finalizado");
        
    console.log("Programa finalizado")
}
























































