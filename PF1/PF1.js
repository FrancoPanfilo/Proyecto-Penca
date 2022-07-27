
class Penca {
        constructor(identificador){
        this.identificador=identificador,
        this.fixture=[],
        this.usuarios=[]
    }
    IngresarPartido(a, b){
        let partido = new Partidos 
        partido.team1 = a
        partido.team2 = b
        partido.goles1 = "-"
        partido.goles2 = "-"
        this.fixture.push(partido)
    }

    IngresarResultado(a ,b){
        let i = 0 
        while ((this.fixture[i].goles1!="-")&&(this.fixture[i].goles2!="-")){
            i=i+1
        }
        this.fixture[i].goles1=a
        this.fixture[i].goles2=b
    }


    AgregarUsuario(usuario){
        this.usuarios.push(usuario)
        usuario.pencasActivas.push(this.identificador)
 //       return AgregarUsuario()
    }
}

class UnaPenca {
    constructor(identificador,usuario){
        this.identificador=identificador,
        this.usuario=usuario,
        this.fixture=[],
        this.puntos=0
    }
}

class Partidos{
    constructor(team1,goles1,team2,goles2){
        this.team1=team1,
        this.goles1=goles1,
        this.team2=team2,
        this.goles2=goles2
    }
    toString(){
        let texto = this.team1 + this.goles1 + this.team2 + this.goles2 
        return texto
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


//const prueba = new Penca("Penca Mundial")
//prueba.IngresarPartido("Peñarol", "Nacional")
//alert(prueba.fixture[0].toString())
//prueba.IngresarResultado(2,1)
//alert(prueba.fixture[0].toString())