const Enemigo = require("./Enemigo.js");
const PowerRanger = require("./PowerRanger.js");
const SEPARACION = '\x1b[36m%s\x1b[0m';

const unPowerRanger = new PowerRanger("Red", 5, 12);
const enemigo1 = new Enemigo();
const otroPowerRanger = new PowerRanger("Green", 3.4, 10);
const enemigo2 = new Enemigo();

otroPowerRanger.setNombre("Green");
otroPowerRanger.setPuntosAtaque(3.4);
otroPowerRanger.setPuntosVida(10);
enemigo2.setNombre("Rita");
enemigo2.setPuntosAtaque(7);
enemigo2.setPuntosVida(12);

unPowerRanger.setNombre("Red");
unPowerRanger.setPuntosAtaque(5);
unPowerRanger.setPuntosVida(2);
enemigo1.setNombre("Zoor");
enemigo1.setPuntosVida(4);
enemigo1.setPuntosAtaque(2);

enemigo1.atacaA(unPowerRanger);
console.log(SEPARACION, "--------------");
unPowerRanger.atacaA(enemigo1);
console.log(SEPARACION, "--------------");

console.log(SEPARACION, "--------------");

otroPowerRanger.atacaA(enemigo2);
console.log(SEPARACION, "--------------");
enemigo2.atacaA(otroPowerRanger);