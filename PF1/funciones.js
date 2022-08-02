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

function unirsePenca(penca){
    let usuario = prompt("Ingrese su nombre de usuario")
    if (penca.usuarios.some(function(arrVal) {
        return usuario === arrVal;
    })){
        alert("Usuario ya registrado")
    }else {
        penca.usuarios.push(usuario)
        let unaPenca = new UnaPenca (penca,usuario)
        for (let i = 0;i<penca.fixture.length;i++){
            unaPenca.IngresarPrediccion()
        }
        unaPenca.ConteoPuntos(prueba)
        penca.listaPencas.push(unaPenca)
    }
}
