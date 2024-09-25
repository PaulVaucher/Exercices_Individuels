function askNbToFind () {
    let numberToFind = Number(window.prompt("Joueur1, entrez le nombre à deviner (entre 0 et 50)", "0"))
if (0 <= numberToFind <= 50) {
    return numberToFind
}
else {
    askNbToFind ()
}
console.log("à trouver", numberToFind)
}


// génère un prompt pour demander un nombre
function askNumber() {
    let givenNumber = window.prompt("Entrez un nombre", "0")
    console.log("prop", givenNumber)
    return givenNumber
}

// vérifie si la réponse est juste (true) ou non
function didIWin(givenNumber,numberToFind) {
    givenNumber = Number(askNumber())
    numberToFind = Number(askNbToFind())
    if (givenNumber == numberToFind) {
        result = true
    } else {
        result = false
    }
    return result
}

//console.log (didIWin())


function gamePlay() {
    askNbToFind ()
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