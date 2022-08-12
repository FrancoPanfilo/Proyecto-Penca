//identificador Penca
let identificador = document.getElementById("identificador")
let botonFijar = document.getElementById("fijarId")
let idDisponible = false
// equipos
let equipo1 = document.getElementById("equipo1")
let equipo2 = document.getElementById("equipo2")
let crearPartido = document.getElementById("crearPartido")

// Lista pencas
let pencasExistentes = JSON.parse(localStorage.getItem("Pencas Predefinidas"))

botonFijar.addEventListener("click",()=>{
    for (let i=0;i<pencasExistentes.pencas.length;i++){
        if ((pencasExistentes.pencas.identificador==identificador.value)||(identificador.value=="")){
            idDisponible=false
        }else{
            idDisponible=true
            let idPenca=identificador.value
            let idMostrar = document.getElementById("idMostrar")
            idMostrar.innerHTML=`<br><h3>${idPenca}</h3>`
            botonFijar.className="Esconder"
        }
    }
})