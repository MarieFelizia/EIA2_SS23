"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    console.log(subjects);
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    console.log(predicates);
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(objects);
    let array1 = [];
    let array2 = [];
    let array3 = [];
    for (let i = subjects.length; i >= 1; i--) {
        console.log(i);
        getVerse(array1[1], array2[2], array3[3]);
    }
    ;
    function getVerse(_sub, _pre, _obj) {
        console.log(_sub + " " + _pre + " " + _obj);
        return _sub + " " + _pre + " " + _obj;
    }
    ;
})(RandomPoem || (RandomPoem = {}));
;
//# sourceMappingURL=RandomPoem.js.map