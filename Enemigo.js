const COLOR_ENEMIGO = '\x1b[34m%s\x1b[0m';

class Enemigo{
    #nombre = "def nombre";
    #puntosVida = 0;
    #puntosAtaque = 0;

    /**
     * Inicializa el objeto enemigo
     * @param {String} nombre del enemigo
     * @param {Number} puntosAtaque del enemigo
     * @param {Number} puntosVida del enemigo
     */
    constructor(nombre, puntosAtaque, puntosVida){
        this.#nombre = nombre;
        this.#puntosAtaque = puntosAtaque;
        this.#puntosVida = puntosVida;
    }


    getPuntosAtaque(){
        return this.#puntosAtaque;
    }

    setPuntosAtaque(puntosAtaque){
        this.#puntosAtaque = puntosAtaque;
    }

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getPuntosVida(){
        return this.#puntosVida;
    }

    setPuntosVida(puntosVida){
        this.#puntosVida = puntosVida;
    }

    defenderseDe(powerRangerAtacante){
        this.habla("Soy el enemigo "+ this.getNombre());
        this.habla("Me estoy defendiendo de "+ powerRangerAtacante.getNombre());
        // this.#puntosVida-= powerRangerAtacante.getPuntosAtaque();
        this.setPuntosVida(this.getPuntosVida() - powerRangerAtacante.getPuntosAtaque());
        if (this.getPuntosVida() > 0) {
            this.habla("Me quedan "+ this.getPuntosVida() + " puntos vida");
        }else{
            this.habla("Estoy derrotado :(");
        }
    }

    habla(msj) {
        console.log(COLOR_ENEMIGO, msj);
    }

    atacaA(unEnemigo){
        this.habla("Soy enemigo " + this.getNombre());
        if (this.#puntosVida > 0) {
            this.habla("Estoy atacando a "+ unEnemigo.getNombre());
            this.habla("con "+ this.getPuntosAtaque() + " puntos ataque");
            unEnemigo.defenderseDe(this);
        }else{
            this.habla("No puedo atacar, estoy herido!");
        }
    }
}

module.exports = Enemigo;