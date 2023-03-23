namespace RandomPoem{ 

let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore" ]; 
console.log(subjects);

let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
console.log(predicates);

let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
console.log(objects);

let array1: string[] = [];
let array2: string[] = [];
let array3: string[] = []; 


for (let i: number = subjects.length ; i >= 1; i--) { 
    console.log(i);
    getVerse(array1[1], array2[2], array3[3])

};


function getVerse(_sub: string, _pre: string, _obj:string):string { 
    console.log(_sub +" " + _pre +" " + _obj);
    return _sub +" " + _pre +" " + _obj; 

}; 




}; 