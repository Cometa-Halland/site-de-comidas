var img = document.querySelector('img#imgcomida')
var ingred = document.getElementsByName(`ingred`)
var parag = document.querySelector(`p.comidadescrip`)
function entrar() {
    var rec = ``
    if (ingred[0].checked) {
        var rec = `empanado`
        img.src = `empanado.jpg`
        parag.innerHTML += ` tudo ok`
    } else if (ingred[1].checked) {
        var rec = `sopainv`
        img.src = `sopainverno.jpg`
    } else if (ingred[2].checked) {
        var rec = `bolo`
        img.src = `bolomilho.jpg`
    } else if (ingred[3].checked) {
        var rec = `mbeju`
        img.src = `mbeju.jpg`
    } else if (ingred[4].checked) {
        var rec = `boribori`
        img.src = `boribori.jpg`
    }

}