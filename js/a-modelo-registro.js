// let listaUsuarios = [];

// alert("Bienvenido a Gamedstore!")

// alert("Registrese a continuacion...")

// console.log("Bienvenido a Gamedstore!")

// console.log("Registrese a continuacion...")

// class Usuario {

//     constructor(nombreCompleto, nombreUsuario, email, contrasenia, edad, direccion){
        
//         this.nombreCompleto = nombreCompleto;
        
//         this.nombreUsuario = nombreUsuario;
        
//         this.email = email;
        
//         this.contrasenia = contrasenia;
        
//         this.edad = edad;
        
//         this.direccion = direccion;
//     };
//     chequeoRegistro(){
//         if (listaUsuarios.some(usuario => usuario.email === email)) {
            
//             alert("El usuario con este correo electrónico ya está registrado.");
            
//             return;
//         }
//     };

// }
// let registrarse = () => {

//     let nombreCompleto = prompt("Nombre completo: ");
    
//     let nombreUsuario = prompt("Nombre de usuario: ");
    
//     let email = prompt("Email: ");
    
//     let contrasenia = prompt("Contraseña: ");

//     if (!nombreCompleto || !nombreUsuario || !email || !contrasenia) {
        
//         alert("Todos los campos son obligatorios.");
        
//         return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    
//     if (!emailRegex.test(email)) {
        
//         alert("Por favor, ingrese un email válido.");
        
//         return;
//     }

//     if (contrasenia.length < 6) {
        
//         alert("La contraseña debe tener al menos 6 caracteres.");
        
//         return;
//     }

//     let registrarUsuario = new Usuario(nombreCompleto, nombreUsuario, email, contrasenia);

//     listaUsuarios.push(registrarUsuario);

//     alert("El usuario: " + registrarUsuario.nombreUsuario + " ha sido registrado exitosamente.");

//     console.log("El usuario: " + registrarUsuario.nombreUsuario + " ha sido registrado exitosamente.");
// }

// registrarse()

// console.log(listaUsuarios)

// alert("Ya es miembro de nuestra comunidad. Ahora inicie sesion a continuacion...")

// console.log("Ya es miembro de nuestra comunidad. Ahora inicie sesion a continuacion...")

// let iniciarSesion = () =>{

//     let ingresarEmail = prompt("Email: ");

//     let contraseña = prompt("Contraseña: ");

//     if (!ingresarEmail || !contraseña) {
        
//         alert("Todos los campos son obligatorios.");
        
//         return;
//     };

//     let usuario = listaUsuarios.find(usuario => usuario.email === ingresarEmail);

//     if (usuario && usuario.contrasenia === contraseña) {
        
//         alert("¡Bienvenido de nuevo, " + usuario.nombreUsuario + "! Sesion iniciada exitosamente.");
        
//         console.log("¡Bienvenido de nuevo, " + usuario.nombreUsuario + "! Sesion iniciada exitosamente.");
//     } else {
        
//         alert("Email o contraseña incorrectos. Por favor, inténtelo nuevamente.");
        
//         console.log("Email o contraseña incorrectos. Por favor, inténtelo nuevamente.");
        
//         iniciarSesion();

//     };

// }

// iniciarSesion();