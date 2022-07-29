
class Penca {
    constructor(identificador){
    this.identificador=identificador,
    this.fixture=[],
    this.resultados=[],
    this.usuarios=[]
}
IngresarPartido(a, b){
    let partido = new Partidos 
    let partido2 = new Partidos
    partido.team1 = a
    partido.team2 = b
    partido.goles1 = "-"
    partido.goles2 = "-"
    partido2.team1 = a
    partido2.team2 = b
    partido2.goles1 = "-"
    partido2.goles2 = "-"
    this.fixture.push(partido)
    this.resultados.push(partido2)
}

IngresarResultado(a ,b){
    let i = 0 
    while (((this.resultados[i].goles1!="-")&&(this.resultados[i].goles2!="-"))||i>this.resultados.length){
        i=i+1
    }
    let partido = new Partidos 
    partido = this.resultados[i]
    partido.goles1=a
    partido.goles2=b
    this.resultados[i] = partido
}


AgregarUsuario(usuario){
    this.usuarios.push(usuario)
    usuario.pencasActivas.push(this.identificador)
}
}

class UnaPenca {
constructor(penca,usuario){
    this.identificador=penca.identificador,
    this.usuario=usuario,
    this.fixture= copiarArr(penca.fixture),
    this.puntos = 0
}

ConteoPuntos(penca){
    this.puntos = contarPuntos(penca,this)
}

IngresarPrediccion(){
    let i = 0 
    while ((this.fixture[i].goles1!="-")&&(this.fixture[i].goles2!="-")){
        i=i+1
    }
    this.fixture[i].escribirPartido()
    let a = prompt(`Ingrese los goles de ${this.fixture[i].team1}`)
    this.fixture[i].goles1=a
    let b = prompt(`Ingrese los goles de ${this.fixture[i].team2}`)
    this.fixture[i].goles2=b
}


}

class Partidos{
constructor(team1,goles1,team2,goles2){
    this.team1=team1,
    this.goles1=goles1,
    this.team2=team2,
    this.goles2=goles2
}
escribirPartido(){
    let texto = this.team1 + this.goles1 + this.team2 + this.goles2 
    alert(texto)
}
}

class Usuarios{
constructor(email,contraseña,nombre){
    this.email=email,
    this.contraseña=contraseña,
    this.id=nombre,
    this.pencasActivas=[]
}

}

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
    }       else if (((a1<b1)&&(a2<b2))||((a1>b1)&&(a2>b2))){
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

const prueba = new Penca("Penca Mundial - Grupo A")

prueba.IngresarPartido("Senegal","Holanda")
prueba.IngresarPartido("Catar","Ecuador")
prueba.IngresarPartido("Catar","Senegal")
prueba.IngresarPartido("Holanda","Ecuador")
prueba.IngresarPartido("Ecuador","Senegal")
prueba.IngresarPartido("Holanda","Catar")





prueba.IngresarResultado(2,1)
prueba.IngresarResultado(5,1)
prueba.IngresarResultado(0,1)
prueba.IngresarResultado(1,3)
prueba.IngresarResultado(2,1)
prueba.IngresarResultado(2,2)

let nombre = prompt("Ingrese su nombre de usuario")
const miPenca = new UnaPenca (prueba,nombre)


miPenca.IngresarPrediccion()
miPenca.IngresarPrediccion()
miPenca.IngresarPrediccion()
miPenca.IngresarPrediccion()
miPenca.IngresarPrediccion()
miPenca.IngresarPrediccion()

console.log(prueba.resultados)
console.log(miPenca.fixture)
miPenca.ConteoPuntos(prueba)
console.log(miPenca)



