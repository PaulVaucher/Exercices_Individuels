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

function getLatinCharacterList(string) {
    let splittedText = string.split('');
    console.log(splittedText);
    return splittedText;
}

//getLatinCharacterList("Hello, world")

function translateLatinCharacter(character) {
    console.log(latinToMorse[character]);
    return latinToMorse[character];
}

//translateLatinCharacter('A')

function encode(string) {
    let upperString = string.toUpperCase()
    let textToSplit = getLatinCharacterList(upperString)
    let translatedText = []
    for (let char of textToSplit) {
        translateLatinCharacter(char);
        if (char === undefined) {
            continue
        };
        translatedText.push(char);
    };
    console.log(translatedText);
    return translatedText;
}

encode("Hello, world")