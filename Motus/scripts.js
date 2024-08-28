
function tryWord(word, base) {
    // --TODO: fix jeu sensible à la casse-- OK.
    let trueWord = word.toLowerCase()
    if (trueWord === base) {
        return true
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missplaced = [];

        let arrayBase = base.split('');
        let arrayWord = trueWord.split('');
        
        for (let i = 0; i < arrayBase.length - 1; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
            } else {
                missplaced.push(arrayWord[i])
            }
        }

        for (const char of arrayWord) {
            if (arrayBase.includes(char) === false) {
                notInWord.push(char)
            }
        }

        missplaced = missplaced.filter(n => n !== undefined); //enlève champs "undefined" dans tableau

        return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
    }
}


function guess() {
    let base = 'dictionnaire'
    let word = document.getElementById("word").value
    let result = tryWord(word, base)
    console.log(result)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    if (result === true) {
        //victoire + nettoyer les autres champs
        document.getElementById("win").innerText = 'Vous avez gagné'
        document.getElementById("well").innerText = null
        document.getElementById("miss").innerText = null
        document.getElementById("not").innerText = null
    } else {
    document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
    //pour retirer lettres 'Pas dans le mot' de "Mal placé"
    let trueMissplaced = result.missplaced.filter((missed) => !result.notInWord.includes(missed));
    console.log(result.missplaced)
    document.getElementById("miss").innerText = 'Mal placé: ' + trueMissplaced.join(', ')
    console.log(trueMissplaced)
    document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
    }
}