namespace L09_OldMacDonald {

    export class Animal {
        name: string;
        type: string;
        sound: string;
        food: string;
        portion: number;
        amount: number;


        constructor(_name: string, _type: string, _sound: string, _food: string, _portion: number, _amount: number) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.portion = _portion;
            this.amount = _amount;


        };

        singTheSong(): string {
            return `<h4> ${this.name} the ${this.type}</h4>
           Old MacDonald had a farm, E-I-E-I-O ! <br>
           And on that farm he had a ${this.type}, E-I-E-I-O ! <br>
           With a ${this.sound} here and a ${this.sound} there, <br>
           here a ${this.sound} there a ${this.sound} , <br>
           everywhere is ${this.sound} ${this.sound} . <br>
           Old MacDonald had a farm, E-I-E-I-O ! <br>`;
        };

        eatTheFood(): string {
            return ` <br> ${this.name} the ${this.type} ate ${this.portion} kg of ${this.food}.`
        };

    };

}; 