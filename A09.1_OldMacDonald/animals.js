"use strict";
var L09_OldMacDonald;
(function (L09_OldMacDonald) {
    class Animal {
        name;
        type;
        sound;
        food;
        portion;
        amount;
        constructor(_name, _type, _sound, _food, _portion, _amount) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.portion = _portion;
            this.amount = _amount;
        }
        ;
        singTheSong() {
            return `<h4> ${this.name} the ${this.type}</h4>
           Old MacDonald had a farm, E-I-E-I-O ! <br>
           And on that farm he had a ${this.type}, E-I-E-I-O ! <br>
           With a ${this.sound} here and a ${this.sound} there, <br>
           here a ${this.sound} there a ${this.sound} , <br>
           everywhere is ${this.sound} ${this.sound} . <br>
           Old MacDonald had a farm, E-I-E-I-O ! <br>`;
        }
        ;
        eatTheFood() {
            return ` <br> ${this.name} the ${this.type} ate ${this.portion} kg of ${this.food}.`;
        }
        ;
    }
    L09_OldMacDonald.Animal = Animal;
    ;
})(L09_OldMacDonald || (L09_OldMacDonald = {}));
;
//# sourceMappingURL=animals.js.map