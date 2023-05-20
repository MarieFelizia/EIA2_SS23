"use strict";
var L09_OldMacDonald;
(function (L09_OldMacDonald) {
    /*
    Aufgabe: <A09.1_OldMacDonald>
    Name:<Marie Eckl>
    Matrikel: <272409>
    Datum: <20.05.23>
    Zusammenarbeit: -
    Quellen: ChatGPT, Jirka Skript, Code Lea Langer, Code von Mitbewohnerin
    */
    window.addEventListener("load", handleLoad);
    let cow = new L09_OldMacDonald.Animal("Fridolin", "Cow", "Moo", "Grass", 20, 200);
    let chicken = new L09_OldMacDonald.Animal("Berta", "Chicken", "Gack", "Grains", 5, 50);
    let dog = new L09_OldMacDonald.Animal("Balou", "Dog", "Woof", "Meat", 10, 100);
    let horse = new L09_OldMacDonald.Animal("Charli", "Horse", "Neigh", "Grass", 15, 150);
    let pig = new L09_OldMacDonald.Animal("Susi", "Pig", "Oink", "Junk", 8, 80);
    let allAnimals = [cow, chicken, dog, horse, pig];
    function handleLoad(_event) {
        startDay();
        document.getElementById("nextDay")?.addEventListener("click", newDay);
    }
    ;
    function startDay() {
        for (let animal of allAnimals) {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = animal.singTheSong() + animal.eatTheFood();
            let textarea = document.getElementById("text");
            textarea.appendChild(paragraph);
        }
        ;
        newDay();
    }
    ;
    function newDay() {
        for (let animal of allAnimals) {
            animal.amount -= animal.portion;
        }
        ;
        let storageDiv = document.getElementById("FoodStorage");
        storageDiv.innerHTML =
            `<h3> Food Storage </h3>
        ${allAnimals[0].amount}kg of ${allAnimals[0].food}<br>
        ${allAnimals[1].amount}kg of ${allAnimals[1].food}<br>
        ${allAnimals[2].amount}kg of ${allAnimals[2].food}<br>
        ${allAnimals[3].amount}kg of ${allAnimals[3].food}<br>
        ${allAnimals[4].amount}kg of ${allAnimals[4].food}<br> `;
        if (allAnimals[0].amount <= 0) {
            alert("Animals and the farm need new food!");
            window.location.reload();
        }
        ;
    }
    ;
})(L09_OldMacDonald || (L09_OldMacDonald = {}));
;
//# sourceMappingURL=OldMacDonald.js.map