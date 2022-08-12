let servidorLS
if (servidorLS = localStorage.getItem("Pencas Predefinidas")){
    console.log("Hay memoria anterior");
}else{
    console.log("NO Hay memoria anterior");
servidorLS = new ServidorPencas()

let  grupoA= new Penca("Penca Mundial - Grupo A","FrancoPanfilo")

grupoA.IngresarPartido("Senegal","Holanda")
grupoA.IngresarPartido("Catar","Ecuador")
grupoA.IngresarPartido("Catar","Senegal")
grupoA.IngresarPartido("Holanda","Ecuador")
grupoA.IngresarPartido("Ecuador","Senegal")
grupoA.IngresarPartido("Holanda","Catar")


let  grupoB= new Penca("Penca Mundial - Grupo B","FrancoPanfilo")

grupoB.IngresarPartido("Senegal","Holanda")
grupoB.IngresarPartido("Catar","Ecuador")
grupoB.IngresarPartido("Catar","Senegal")
grupoB.IngresarPartido("Holanda","Ecuador")
grupoB.IngresarPartido("Ecuador","Senegal")
grupoB.IngresarPartido("Holanda","Catar")


let  grupoC= new Penca("Penca Mundial - Grupo C","FrancoPanfilo")

grupoC.IngresarPartido("Senegal","Holanda")
grupoC.IngresarPartido("Catar","Ecuador")
grupoC.IngresarPartido("Catar","Senegal")
grupoC.IngresarPartido("Holanda","Ecuador")
grupoC.IngresarPartido("Ecuador","Senegal")
grupoC.IngresarPartido("Holanda","Catar")


let  grupoD= new Penca("Penca Mundial - Grupo D","FrancoPanfilo")

grupoD.IngresarPartido("Senegal","Holanda")
grupoD.IngresarPartido("Catar","Ecuador")
grupoD.IngresarPartido("Catar","Senegal")
grupoD.IngresarPartido("Holanda","Ecuador")
grupoD.IngresarPartido("Ecuador","Senegal")
grupoD.IngresarPartido("Holanda","Catar")


let  grupoE= new Penca("Penca Mundial - Grupo E","FrancoPanfilo")

grupoE.IngresarPartido("Senegal","Holanda")
grupoE.IngresarPartido("Catar","Ecuador")
grupoE.IngresarPartido("Catar","Senegal")
grupoE.IngresarPartido("Holanda","Ecuador")
grupoE.IngresarPartido("Ecuador","Senegal")
grupoE.IngresarPartido("Holanda","Catar")


let  grupoF= new Penca("Penca Mundial - Grupo F","FrancoPanfilo")

grupoF.IngresarPartido("Senegal","Holanda")
grupoF.IngresarPartido("Catar","Ecuador")
grupoF.IngresarPartido("Catar","Senegal")
grupoF.IngresarPartido("Holanda","Ecuador")
grupoF.IngresarPartido("Ecuador","Senegal")
grupoF.IngresarPartido("Holanda","Catar")


let  grupoG= new Penca("Penca Mundial - Grupo G","FrancoPanfilo")

grupoG.IngresarPartido("Senegal","Holanda")
grupoG.IngresarPartido("Catar","Ecuador")
grupoG.IngresarPartido("Catar","Senegal")
grupoG.IngresarPartido("Holanda","Ecuador")
grupoG.IngresarPartido("Ecuador","Senegal")
grupoG.IngresarPartido("Holanda","Catar")


let  grupoH= new Penca("Penca Mundial - Grupo H","FrancoPanfilo")

grupoH.IngresarPartido("Senegal","Holanda")
grupoH.IngresarPartido("Catar","Ecuador")
grupoH.IngresarPartido("Catar","Senegal")
grupoH.IngresarPartido("Holanda","Ecuador")
grupoH.IngresarPartido("Ecuador","Senegal")
grupoH.IngresarPartido("Holanda","Catar")

//cargar pencas al servidor de pencas 
servidorLS.pencas.push(grupoA)
servidorLS.pencas.push(grupoB)
servidorLS.pencas.push(grupoC)
servidorLS.pencas.push(grupoD)
servidorLS.pencas.push(grupoE)
servidorLS.pencas.push(grupoF)
servidorLS.pencas.push(grupoG)
servidorLS.pencas.push(grupoH)

servidorLS.pencas.sort((a, b) => {
    return b.identificador + a.identificador;
});

servidorLS = JSON.stringify(servidorLS)
localStorage.setItem("Pencas Predefinidas",servidorLS)
}
