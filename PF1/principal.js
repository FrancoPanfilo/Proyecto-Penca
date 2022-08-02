//penca ficticia

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


//se creo usuario1 como un nombre de ususario ya reservado para utilizarlo como bandera en caso de no querer ingresar una penca y probar otras funciones de la pagina

unirsePenca(prueba)
let otraPenca = prompt("Desea hacer otra penca (tiene que usar otro nombre de usuario), para hacerlo ingrese SI").toUpperCase()
while (otraPenca=="SI"){
    unirsePenca(prueba)
    otraPenca = prompt("Desea hacer otra penca (tiene que usar otro nombre de usuario), para hacerlo ingrese SI").toUpperCase()
}

//hay que hacer que conteoPuntos actualice automaticamente el puntaje de cada penca

console.log(prueba)


