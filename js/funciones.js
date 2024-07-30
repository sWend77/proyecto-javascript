alert("Calcule el precio total del producto que desea comprar con impuestos incluidos a continuacion...")

console.log("Calcule el precio total del producto que desea comprar con impuestos incluidos a continuacion...")

let precio = (prompt("Ingrese el precio del producto o salga del programa escribiendo 'exit': "));

console.log("El precio del producto es $" + precio);

while (precio != "exit") {

    precio = parseFloat(precio);
    
    const impuestoPais = x => x * 0.30;

    const iva = x => x * 0.21; 

    console.log ("El impuesto pais es de $"+ impuestoPais(precio))

    console.log("El iva es de $" + iva(precio)) 
    
    let precioTotal = x => precio + iva(precio) + impuestoPais(precio)

    console.log("El precio total con iva e impuesto pais incluido es de $" + precioTotal())

    precio = prompt("Ingrese un nuevo precio si desea : ");

}

if (precio == "exit"){
    alert("Programa finalizado");
    console.log("Programa finalizado")
}