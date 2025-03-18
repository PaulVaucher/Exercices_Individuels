let chosenNumber = null

gamePlay()

function askNbToFind() {
    let NbToFind = Number(prompt("Joueur1, entrez le nombre à deviner (entre 0 et 50)", "0"))
    console.log(NbToFind)
    if (0 < NbToFind && NbToFind < 50) {
        return NbToFind
    } else {
        return askNbToFind()
    }
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
    if (Number(givenNumber) == numberToFind) {
        result = true
    } else {
        result = false
    }
    console.log(result)
    return result
}

// fonction principale du jeu
function gamePlay() {
    if (chosenNumber == null) {
        chosenNumber = askNbToFind()
    }
    document.getElementById("submit").addEventListener("click", function() {
        let givenNumber = askNumber()
        if (didIWin(givenNumber, chosenNumber)) {
            document.getElementById("submit").hidden = true
            document.getElementById("number").hidden = true
            document.getElementById("result").innerHTML = ("Bravo ! Vous avez deviné le nombre")
        } else {
            document.getElementById("result").innerHTML = ("ce n'est pas la bonne réponse")
        }
    })
}

