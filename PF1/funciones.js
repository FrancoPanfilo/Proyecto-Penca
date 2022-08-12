function copiarArr(arreglo){
    let copiaFix =[]
    for (let i=0; i<arreglo.length;i++){
        let copiaPar = new Partidos 
        copiaPar = Object.assign({},arreglo[i])
        let copia = new Partidos(copiaPar.team1,copiaPar.goles1,copiaPar.team2,copiaPar.goles2)
        copiaFix.push(copia)
    }
    return copiaFix
    }


function puntos(a1,b1,a2,b2){
    if((a1!="-")&&(b1!="-")&&(a2!="-")&&(b2!="-")){
        if ((a1==a2)&&(b1==b2)){
            return 8
        } else if ((a1-b1)==(a2-b2)){
            return 5
            }else if (((a1<b1)&&(a2<b2))||((a1>b1)&&(a2>b2))){
                return 3
                } else {
                    return 0
             }
        } else {
        return 0
        }
        }
        
        
        
function contarPuntos(penca,pre){
    let contador =0
    for(let i=0 ; i<penca.fixture.length;i++){
        contador = contador + puntos(penca.resultados[i].goles1 ,penca.resultados[i].goles2 , pre.fixture[i].goles1 ,  pre.fixture[i].goles2)
    }
    return contador
    }

function unirsePenca(penca,usuarioo){
    let usuario = usuarioo.id
    console.log(usuario);
    console.log(penca);
    if (usuarioEnPenca(usuario,penca)){
        alert("Usuario ya registrado")
    }else {
        let unaPenca = new UnaPenca (penca,usuario)
        let user = JSON.parse(localStorage.getItem("Usuario"))
        user.pencasActivas.push(unaPenca)
        localStorage.setItem("Usuario",JSON.stringify(user))
        penca.listaPencas.push(unaPenca)
        penca.usuarios.push(usuario)
        let servidor = JSON.parse(localStorage.getItem("Pencas Predefinidas"))
        servidor.pencas.forEach(penc => {
            if (penc.identificador==penca.identificador){
                penc.usuarios=[...penca.usuarios]
                penc.listaPencas=[...penca.listaPencas]
                localStorage.setItem("Pencas Predefinidas",JSON.stringify(servidor))
                console.log(user);
                actualizarUsuario(user)
            }
        });
    
    
}}

// Actualizar usuario y en particular sus pencas en la base de datos LS

function actualizarUsuario(usuario){
    let servidor = JSON.parse(localStorage.getItem("Servidor Usuarios"))
    console.log(servidor);
    for (let i = 0;i<servidor.usuarios.length;i++){
        if (usuario.id == servidor.usuarios[i].id ){
            console.log(servidor.usuarios[i].pencasActivas);
            console.log(usuario.pencasActivas);
            servidor.usuarios[i].pencasActivas=usuario.pencasActivas
        }
    }
    localStorage.setItem("Servidor Usuarios",JSON.stringify(servidor))
}

function usuarioEnPenca(usuario,penca){
    let condicion = false
    for (let i=0;i<penca.usuarios.length;i++){
        if (penca.usuarios[i].id==usuario){
            condicion = true
        }
    }
    return condicion
}