const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

/* Récupère la string et sépare les caractères*/
function getLatinCharacterList(string) {
    let splittedText = string.split('');
    return splittedText;
}



/* Transforme une lettre en caractère Morse */
function translateLatinCharacter(character) {
    return latinToMorse[character];
}


/* Transforme un texte en Morse */
function encode(string) {
    let upperString = string.toUpperCase()
    let textToSplit = getLatinCharacterList(upperString)
    let translatedText = []
    for (let char of textToSplit) {
        let translation = translateLatinCharacter(char);
        if (translation === undefined) {
            // Remplacer les caractères non définis par un "/" (les espaces sont non définis)
            translatedText.push('/');
        } else {
            translatedText.push(translation);
        }
    };
    console.log ("texte encodé : ", translatedText.join(' '))
    return translatedText.join(' ');
}
encode("Hello, world")

/* Sépare les caractères morse */
function getMorseCharacterList(string) {
    let splittedMorse = string.split(' ');
    return splittedMorse;
}


/* Transforme un caractère morse en lettre */
function translateMorseCharacter(character) {
    return morseToLatin[character];
}

/* Transforme un code morse en phrase */
function decode(string) {
    let morseToSplit = getMorseCharacterList(string)
    let translatedMorse = []
    for (let char of morseToSplit) {
        let translation = translateMorseCharacter(char);
        if (translation === undefined) {
            // Remplace les caractères inconnus par un espace
            translatedMorse.push(' ');
        } else {
            translatedMorse.push(translation);
        }
    };
    console.log ("texte décodé : ", translatedMorse.join(''))
    return translatedMorse.join('')
}

 decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")

/* Exports pour test unitaires */
module.exports = {
    getLatinCharacterList, encode, decode
}