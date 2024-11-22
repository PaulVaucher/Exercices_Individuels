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
    //console.log(splittedText);
    return splittedText;
}
//getLatinCharacterList("Hello, world")


/* Transforme une lettre en caractère Morse */
function translateLatinCharacter(character) {
    //console.log(latinToMorse[character]);
    return latinToMorse[character];
}
//translateLatinCharacter('A')

/* Transforme un texte en Morse */
function encode(string) {
    let upperString = string.toUpperCase()
    let textToSplit = getLatinCharacterList(upperString)
    let translatedText = []
    for (let char of textToSplit) {
        translateLatinCharacter(char);
        /*if (char === undefined) {
            continue
        };*/
        translatedText.push(char);
    };
    //console.log(translatedText);
    return translatedText;
}
//encode("Hello, world")

/*  */
function getMorseCharacterList(string) {
    let splittedMorse = string.split(' ');
    //console.log(splittedMorse);
    return splittedMorse;
}

// getMorseCharacterList(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")

function translateMorseCharacter(character) {
    console.log(morseToLatin[character]);
    return morseToLatin[character];
}
//translateMorseCharacter("---")

function decode(string) {
    let morseToSplit = getMorseCharacterList(string)
    let translatedMorse = []
    for (let char of morseToSplit) {
        translateMorseCharacter(char);
        translatedMorse.push(char);
    };
    //console.log(translatedMorse)
    return translatedMorse
}

decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")