

// génère un prompt pour demander un nombre
function askNumber() {
    let givenNumber = window.prompt("Entrez un nombre", "0")
    console.log(givenNumber)
    return givenNumber
}

// vérifie si la réponse est juste (true) ou non
function didIWin(givenNumber) {
    givenNumber = Number(askNumber())
    if (givenNumber === 22) {
        result = true
    } else {
        result = false
    }
    return result
}

//console.log (didIWin())


function gamePlay() {
    let givenNumber = askNumber()
    //didIWin(givenNumber)
    while (didIWin(givenNumber) === false) {
        askNumber()
        console.log("raté")
    }
    if (didIWin(givenNumber) === true) {
        alert("Bravo ! Vous avez deviné le nombre")
        return
    }

}

gamePlay()