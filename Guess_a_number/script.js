

function askNumber() {
    let givenNumber = window.prompt("Entrez un nombre")
    console.log(givenNumber)
    return givenNumber
}

//askNumber()

function didIWin(givenNumber) {
    givenNumber = Number(askNumber())
    if (givenNumber === 22) {
        return true
    } else {
        return false
    }
}

//console.log (didIWin())

function gamePlay() {
    if (didIWin () !== true) {
        askNumber()
        console.log ("raté")
    } else {
        console.log("fini")
        return
    }

}

gamePlay()