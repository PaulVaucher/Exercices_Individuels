let chosenNumber = null

gamePlay()

function askNbToFind() {

    let NbToFind = Number(prompt("Joueur1, entrez le nombre à deviner (entre 0 et 50)", "0"))
    console.log(NbToFind)
    if (0 < NbToFind < 50) {
        return NbToFind
    }
    else {
        askNbToFind()
    }
    console.log(typeof (NbToFind))
}


// génère un prompt pour demander un nombre
function askNumber() {
    let givenNumber = document.getElementById("number")
    let displayNumber = givenNumber.value
    console.log("prop", displayNumber)
    return displayNumber
}

// vérifie si la réponse est juste (true) ou non
function didIWin(givenNumber, numberToFind) {
    givenNumber = Number(askNumber())
    numberToFind = Number(askNbToFind())
    if (givenNumber == numberToFind) {
        result = true
    } else {
        result = false
    }
    console.log(result)
    return result
}

//console.log (didIWin())



function gamePlay() {
    if (chosenNumber == null) {
        chosenNumber = askNbToFind()
        gamePlay()
    }
    let givenNumber = askNumber()
    didIWin(givenNumber)
    while (didIWin(givenNumber) === false) {
        askNumber()
        console.log("ce n'est pas la bonne réponse")
    }
    if (didIWin(givenNumber) === true) {
        alert("Bravo ! Vous avez deviné le nombre")
        return
    }
}

