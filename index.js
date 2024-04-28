console.log("Desafio Classificador de nível de Herói!!!");
console.log();

const HEROI = "Herói 1"
const XP = 10500

if (XP < 0) return console.log('XP inválida.....');

if (XP <= 1000) return console.log(HEROI + " está no nível FERRO");
if (XP <= 2000) return console.log(HEROI + " está no nível BRONZE");
if (XP <= 5000) return console.log(HEROI + " está no nível PRATA");
if (XP <= 7000) return console.log(HEROI + " está no nível OURO");
if (XP <= 8000) return console.log(HEROI + " está no nível PLATINA");
if (XP <= 9000) return console.log(HEROI + " está no nível ASCENDENTE");
if (XP <= 10000) return console.log(HEROI + " está no nível IMORTAL");
if (XP > 10000) return console.log(HEROI + " está no nível RADIANTE");

console.log();