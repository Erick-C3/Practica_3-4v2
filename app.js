const ProgramaTv = require("./ProgramaTv.js");
const enemigos = require("./enemigos.js");
const powerRangers = require("./powerRangers.js");


const programaPowerRangers = new ProgramaTv(enemigos, powerRangers);

programaPowerRangers.iniciaEpisodio();

/* powerRangers[2].atacaA(enemigos[0]);
console.log(SEPARACION, "--------------");
powerRangers[0].atacaA(enemigos[0]);
console.log(SEPARACION, "--------------");
enemigos[1].atacaA(powerRangers[1]);
enemigos[1].atacaA(powerRangers[2]);
console.log(SEPARACION, "--------------");
powerRangers[2].atacaA(enemigos[1]);
console.log(SEPARACION, "--------------");
enemigos[0].atacaA(powerRangers[2]);
 */


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