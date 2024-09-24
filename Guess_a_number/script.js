

function askNumber () {
    let givenNumber = window.prompt ("Entrez un nombre")
    console.log (givenNumber)
    return givenNumber
}

askNumber()

function didIWin (givenNumber) {
    givenNumber = askNumber()
    if (givenNumber<22) {
        alert("Plus grand")
    }
    else if (givenNumber>22) {
        alert("Plus petit”")
    }
    else {
        alert("Bravo ! Vous avez deviné le nombre")
    }
}

didIWin()

function gamePlay () {
    if (askNumber!==22) {
        askNumber()
    }
}