const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères.";

// const exp = /\bde\b|des/g;
// const exp = /\bde\b|(?<=d|l)es/g;
// const exp = /[a-zA-Z]/g
const exp = /[é'è;.:!]/g
console.log(str.match(exp).length);