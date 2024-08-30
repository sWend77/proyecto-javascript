
let miH1 = document.querySelector(".mi-h1")

let aEnlacesPrincipales = document.querySelectorAll(".a-enlaces-principales")

let enlacesAcceso = document.querySelectorAll(".link-registro-login")

const images = ["/img/img4.jpg", "/img/img5.jpg", "/img/img6.jpg", "/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"]

let indiceImagen = 0 

const imgElemento = document.getElementById("grilla-juegos");

const flechaBack = document.getElementById("flecha-back");

const flechaNext = document.getElementById("flecha-next");

const flechas = document.querySelectorAll(".flechas")

imgElemento.src = images[indiceImagen];

miH1.addEventListener("mouseover" , () => {
    miH1.style.color = "white"
    miH1.style.fontSize = "55px"
})

miH1.addEventListener("mouseout" , () => {
    miH1.style.color = "rgb(149, 165, 255)"
    miH1.style.fontSize = "50px"
})


aEnlacesPrincipales.forEach((miEnlace) => {
    miEnlace.addEventListener("mouseover" ,() => {
        miEnlace.style.color = "rgb(149, 165, 255)"
    } )
})

aEnlacesPrincipales.forEach((miEnlace) => {
    miEnlace.addEventListener("mouseout" ,() => {
        miEnlace.style.color = "white"
    } )
})

enlacesAcceso.forEach((enlaceAcceso) => {
    enlaceAcceso.addEventListener("mouseover", () => {
        enlaceAcceso.style.color = "violet"
        enlaceAcceso.style.textDecoration = "underline"
    })
})

enlacesAcceso.forEach((enlaceAcceso) => {
    enlaceAcceso.addEventListener("mouseout", () => {
        enlaceAcceso.style.color = "white" 
        enlaceAcceso.style.textDecoration = "none"
    })
})

flechaBack.addEventListener("click", () => {
    indiceImagen = (indiceImagen === 0) ? images.length - 1 : indiceImagen - 1;
    imgElemento.src = images[indiceImagen];
});

flechaNext.addEventListener("click", () => {
    indiceImagen = (indiceImagen === images.length - 1) ? 0 : indiceImagen + 1;
    imgElemento.src = images[indiceImagen];
});

flechas.forEach((flecha) => {
    flecha.addEventListener("mouseover" , () => {
        flecha.style.color = "rgb(149, 165, 255)"
        flecha.style.width = "45px"
        flecha.style.scale = "1.5"
    })
})

flechas.forEach((flecha) => {
    flecha.addEventListener("mouseout" , () => {
        flecha.style.color = "white"
        flecha.style.width = "30px"
        flecha.style.scale = "none"
    })
})
































