let servidor = JSON.parse(localStorage.getItem("Usuario"))

let tabla = document.getElementById("tabla")

let misPencas = servidor.pencasActivas



for (let i=0;i<misPencas.length;i++){
    let agregarElemento = document.createElement("tr")
    agregarElemento.innerHTML= `<tr>
                                    <td>${misPencas[i].identificador}</td>
                                    <td>${misPencas[i].fixture.length}</td>
                                    <td>${misPencas[i].puntos}</td>
                                    <td><button id="abandonar${i}" type="button" class="btn cancelar" >Abandonar</button></td>
                                    <td><button id="abrirPenca${i}" type="button" class="btn" >Ver Penca</button></td>
                                </tr>
                                
                                <dialog id="modalPenca${i}" class="verPenca">
                                    <div class="opciones">
                                        <div class="volver"><h3><i class="bi bi-arrow-left-square"></i></h3></div>
                                        <div id="tabla${i}" class="infoPenca" ><h3>Tabla</h3></div>
                                        <div id="fixture${i}" class="infoPenca" ><h3>Fixture</h3></div>
                                        <div id="mipenca${i}" class="infoPenca" ><h3>Mi Penca</h3></div> 
                                    </div>
                                    <div id="pantalla${i}">

                                    </div>
                                </dialog>
                                `


    tabla.appendChild(agregarElemento)

    // Sistema para Abrir y cerrar modal de cada tabla

let verPenca = document.getElementById(`abrirPenca${i}`)
let btnCerrarModal = document.getElementsByClassName("volver")


let modal = document.getElementById(`modalPenca${i}`)
for (let l=0;l<btnCerrarModal.length;l++){
btnCerrarModal[l].addEventListener("click",()=>{
    modal.close()
})
}
verPenca.addEventListener("click",()=> {
    modal.showModal();

})
// Sistema para mostrar info de las pencas
let tablaPenca 
let fixturePenca 
let mipenca 
tablaPenca = document.getElementById(`tabla${i}`)
fixturePenca = document.getElementById(`fixture${i}`)
mipenca = document.getElementById(`mipenca${i}`)

let pantalla = document.getElementById(`pantalla${i}`)

tablaPenca.addEventListener("click",()=>{
    pantalla.innerHTML=`
    <table id="Puestos${i}"class="tablaPantalla table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">Puesto</th>
        <th scope="col">Participante</th>
        <th scope="col">Puntos</th>
        <th scope="col">Ver Predicciones</th>
      </tr>
    </thead>
        <tbody>

        </tbody>
    </table>
    `

    // Busco la Penca
    let RPenca = JSON.parse(localStorage.getItem("Pencas Predefinidas"))
    let resultados
        for (let q =0;q<RPenca.pencas.length;q++){
            if (misPencas[i].identificador==RPenca.pencas[q].identificador){
                resultados=RPenca.pencas[q].listaPencas
            }
        }
    let Resultados = document.getElementById(`Puestos${i}`)
    let indice = 1
    resultados.forEach((users) => {
        let agregarElemento = document.createElement("tr")
        agregarElemento.innerHTML= `<tr>
                                        <td>${indice}</td>
                                        <td>${users.usuario}</td>
                                        <td>${users.puntos}</td>
                                        <td><button type="button" class="btn" id="${i}botonVer${indice}">Ver Predicciones</button></td>
                                    </tr>`
        //agregarElemento.setAttribute("id",`Puestos${indice}`)
        Resultados.appendChild(agregarElemento)
        indice=indice+1
})

})


// Que se inicialice en la pestaña tablas
tablaPenca.click()

fixturePenca.addEventListener("click",()=>{
    pantalla.innerHTML=`
                            <table id="Resultados${i}"class="tablaPantalla table-hover table-dark">
                            <thead>
                              <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Local</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Visitante</th>
                              </tr>
                            </thead>
                                <tbody>

                                </tbody>
                            </table>
                            `

                            // Busco la Penca
                            let RPenca = JSON.parse(localStorage.getItem("Pencas Predefinidas"))
                            let resultados
                            for (let p=0;p<misPencas.length;p++){
                                for (let q =0;q<RPenca.pencas.length;q++){
                                    if (misPencas[p].identificador==RPenca.pencas[q].identificador){
                                        resultados=RPenca.pencas[q].resultados

                                    }
                                }
                            }
                            let Resultados = document.getElementById(`${i}Resultados${i}`)
                            let indice = 1
                            resultados.forEach((users) => {
                                let agregarElemento = document.createElement("tr")
                                agregarElemento.innerHTML= `<tr>
                                                                <td>${indice}</td>
                                                                <td>${users.team1}</td>
                                                                <td>${users.goles1}</td>
                                                                <td>VS</td>
                                                                <td>${users.goles2}</td>
                                                                <td>${users.team2}</td>
                                                            </tr>`
                             //   agregarElemento.setAttribute("id",`${i}filaTabla${indice}`)
                                Resultados.appendChild(agregarElemento)
                                indice=indice+1
})
})


mipenca.addEventListener("click",()=>{
    pantalla.innerHTML=`<table id="tablaFixture${i}"class="tablaPantalla mipenca table-hover table-dark">
                            <thead>
                              <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Local</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Visitante</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>`
    

// Mostrar mi fixture en la tabla
    let tablaFixture = document.getElementById(`tablaFixture${i}`)
    let indice = 1
    misPencas[i].fixture.forEach((users) => {
        let agregarElemento = document.createElement("tr")
        agregarElemento.innerHTML= `<tr>
                                        <td>${indice}</td>
                                        <td>${users.team1}</td>
                                        <td>${users.goles1}</td>
                                        <td>VS</td>
                                        <td>${users.goles2}</td>
                                        <td>${users.team2}</td>
                                        <td ><button type="button" class="btn" id="${i}botonPrediccion${indice}">Hacer Prediccion</button></td>
                                    </tr>`
        agregarElemento.setAttribute("id",`${i}filaTabla${indice}`)
        tablaFixture.appendChild(agregarElemento)

// Funcionalidad para cambiar los resultados
        let hacerPrediccion = document.getElementById(`${i}botonPrediccion${indice}`)
        let partidoACambiar = document.getElementById(`${i}filaTabla${indice}`)
        let indice2 = indice


// BUG si hago prediccion en el primer elemento de la tabla , osea el ultimo elemento de mipENCA se buguean los botones de otras pencas
        hacerPrediccion.addEventListener("click",()=>{
            partidoACambiar.innerHTML=  `
                                        <td>${indice2}</td>
                                        <td>${users.team1}</td>
                                        <td><input  class="inputs" placeholder="${users.goles1}" id="${i}inputGoles1${indice2}"></td>
                                        <td>VS</td>
                                        <td><input class="inputs" placeholder="${users.goles2}" id="${i}inputGoles2${indice2}"></td>
                                        <td>${users.team2}</td>
                                        <td ><button type="button" class="btn" id="${i}botonGuardar${indice2}">Guardar Prediccion</button></td>
                                        `
            let botonGuardar = document.getElementById(`${i}botonGuardar${indice2}`)
            botonGuardar.addEventListener("click",()=>{
                let inputGoles1 = document.getElementById(`${i}inputGoles1${indice2}`).value; 
                let inputGoles2 = document.getElementById(`${i}inputGoles2${indice2}`).value; 
                users.goles1 = inputGoles1
                users.goles2 = inputGoles2
                if (((!(users.goles1<100 && users.goles1>-1))||users.goles1=="")||((!(users.goles2<100 && users.goles2>-1))||users.goles2=="")){
                    alert("Prediccion erronea")
                    users.goles1 = "-"
                    users.goles2 = "-"
                }
                partidoACambiar.innerHTML= `<tr>
                                                <td>${indice2}</td>
                                                <td>${users.team1}</td>
                                                <td>${users.goles1}</td>
                                                <td>VS</td>
                                                <td>${users.goles2}</td>
                                                <td>${users.team2}</td>
                                                <td ><button type="button" class="btn" id="${i}botonPrediccion${indice2}">Hacer Prediccion</button></td>
                                            </tr>`
                                            let click = document.getElementById(`mipenca${i}`)
                                            // con esto redrescamos el modal
                                            click.click()
                                            actualizarLS = JSON.parse(localStorage.getItem("Usuario"))
                                            actualizarLS.pencasActivas=misPencas
                                            actualizarLS = JSON.stringify(actualizarLS)
                                            localStorage.setItem("Usuario",actualizarLS)
                                            actualizarLS = JSON.parse(localStorage.getItem("Pencas Predefinidas"))
                                            for(let n=0;n<actualizarLS.pencas.length;n++){
                                                if (misPencas[i].identificador==actualizarLS.pencas[n].identificador){
                                                    for(let m =0; m<actualizarLS.pencas[n].listaPencas.length;m++){
                                                        if(actualizarLS.pencas[n].listaPencas[m].usuario==servidor.id){
                                                            actualizarLS.pencas[n].listaPencas[m]=misPencas[i]
                                                            localStorage.setItem("Pencas Predefinidas",JSON.stringify(actualizarLS))
                                                        }
                                                    }
                                                }
                                            }
            })
        })

        indice=indice+1

       
                                               })
})





    let elboton = document.getElementById(`abandonar${i}`)
    elboton.addEventListener("click",()=>{
        let borrarPenca = misPencas[i]
        let usuario = JSON.parse(localStorage.getItem("Usuario"))
        usuario.pencasActivas.splice(i,1)
        // borrar el usuario y su penca de la penca ( tmb borrar la unaPenca de la listaPenca)
        let server = JSON.parse(localStorage.getItem("Pencas Predefinidas"))
        server.pencas.forEach(penca => {
            if (penca.identificador==misPencas[i].identificador){
                for (let indice=0; indice<penca.usuarios.length;indice++){
                    if (penca.usuarios[indice]==usuario.id){
                        penca.usuarios.splice(indice,1)
                        localStorage.setItem("Pencas Predefinidas",JSON.stringify(server))
                       
                    }
                }
            }
            for (let r=0; r<penca.listaPencas.length;r++){
                if (penca.listaPencas[r].usuario==usuario.id) {
                    penca.listaPencas.splice(r,1)
                    localStorage.setItem("Pencas Predefinidas",JSON.stringify(server))
                }
            }
        })
        localStorage.removeItem("Usuario")
        usuario = JSON.stringify(usuario)
        localStorage.setItem("Usuario",usuario)
        elboton.className="Esconder"
        location.reload();
})}
