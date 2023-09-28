const Enemigo = require("./Enemigo.js");
const PowerRanger = require("./PowerRanger.js");
const SEPARACION = '\x1b[36m%s\x1b[0m';

const unPowerRanger = new PowerRanger("Red", 5, 12);
const enemigo1 = new Enemigo("Zoor", 2, 4);
const otroPowerRanger = new PowerRanger("Green", 3.4, 10);
const enemigo2 = new Enemigo("Rita", 7, 12);

enemigo1.atacaA(unPowerRanger);
console.log(SEPARACION, "--------------");
unPowerRanger.atacaA(enemigo1);
console.log(SEPARACION, "--------------");

console.log(SEPARACION, "--------------");

otroPowerRanger.atacaA(enemigo2);
console.log(SEPARACION, "--------------");
enemigo2.atacaA(otroPowerRanger);