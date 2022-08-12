
let servidor = JSON.parse(localStorage.getItem("Pencas Predefinidas"))
let tabla = document.getElementById("tabla")


for (let i=0;i<servidor.pencas.length;i++){
    let agregarElemento = document.createElement("tr")
    agregarElemento.innerHTML= `<tr>
                                    <td>${servidor.pencas[i].identificador}</td>
                                    <td>${servidor.pencas[i].fixture.length}</td>
                                    <td>${servidor.pencas[i].usuarios.length-1}</td>
                                    <td><button id="boton${i}" type="button" class="btn">Unirme</button></td>
                                </tr>`
    // verifico que la penca no este activa
        let user = JSON.parse(localStorage.getItem("Usuario"))
        for (let n=0; n<user.pencasActivas.length; n++){
            if (servidor.pencas[i].identificador==user.pencasActivas[n].identificador){
                agregarElemento.className = "Esconder"
                }
        }
    tabla.appendChild(agregarElemento)
    let elboton = document.getElementById(`boton${i}`)
    elboton.addEventListener("click",()=>{
        unirsePenca(servidor.pencas[i],user)
        elboton.className="Esconder"
        location.reload();
    })
}