class MovementSimulator {

    speed: number;
    directionAngle: number;

    flagReverse: boolean;
    flagGas: boolean;
    flagBrakes: boolean;
    damageLevel: number;
    flagDamaged: boolean;

    constructor() {
        window.addEventListener("keydown", this.keyHandler.bind(this), false);
        this.speed = 0;
        this.flagReverse = false;
        this.flagGas = false;
        this.flagBrakes = false;
        this.directionAngle = 0;
        this.damageLevel = 0;
        this.flagDamaged = false;
    }

    keyHandler(event: KeyboardEvent) {
        if (event.code == 'ArrowDown') {
            console.log('....down....')
            this.flagGas = false;
            this.flagBrakes = true;
        } else if (event.code == 'ArrowUp') { // ArrowDown, ArrowRight, ArrowLeft, Escape
            console.log('....up....')
            this.flagGas = true;
            this.flagBrakes = false;
        } else if (event.code == 'ArrowLeft') {
            console.log('<<----', this.directionAngle);
            this.directionAngle--;
        } else if (event.code == 'ArrowRight') {
            console.log('---->>', this.directionAngle);
            this.directionAngle++;
        }
    }

    tick() {
        if (this.directionAngle > 0) {
            this.directionAngle--;
        } else if (this.directionAngle < 0) {
            this.directionAngle++;
        }
        if (this.flagGas) {
            this.speed++;
        } else if (this.speed > 0) {
            this.speed--;
        }
        this.flagGas = false;
    }
}

export default MovementSimulator;