const Enemigo = require("./Enemigo.js");
const PowerRanger = require("./PowerRanger.js");
const SEPARACION = '\x1b[36m%s\x1b[0m';

/* const unPowerRanger = new PowerRanger("Red", 5, 12);
const enemigo1 = new Enemigo("Zoor", 2, 4);
const otroPowerRanger = new PowerRanger("Green", 3.4, 10);
const enemigo2 = new Enemigo("Rita", 7, 12);
const unoMasPowerRanger = new PowerRanger("Black", 7, 20); */

const powerRangers = [
    new PowerRanger("Red", 5, 12),
    new PowerRanger("Green", 3.4, 10),
    new PowerRanger("Black", 7, 20)
];

const enemigos = [
    new Enemigo("Zoor", 2, 4),
    new Enemigo("Rita", 7, 12)
];

powerRangers[2].atacaA(enemigos[0]);
console.log(SEPARACION, "--------------");
powerRangers[0].atacaA(enemigos[0]);
console.log(SEPARACION, "--------------");
enemigos[1].atacaA(powerRangers[1]);


/* 
enemigo1.atacaA(unPowerRanger);
console.log(SEPARACION, "--------------");
unPowerRanger.atacaA(enemigo1);
console.log(SEPARACION, "--------------");

console.log(SEPARACION, "--------------");

otroPowerRanger.atacaA(enemigo2);
console.log(SEPARACION, "--------------");
enemigo2.atacaA(otroPowerRanger);
console.log(SEPARACION, "--------------");
console.log(SEPARACION, "--------------");

unoMasPowerRanger.atacaA(enemigo1);
unoMasPowerRanger.atacaA(enemigo2); */