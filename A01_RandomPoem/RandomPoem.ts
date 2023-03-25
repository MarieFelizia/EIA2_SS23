namespace RandomPoem {

    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    //console.log(subjects);

    let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    //console.log(predicates);

    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(objects);

     
    for (let i: number = 6; i >= 1; i--) {
        //console.log(i);
        console.log(getVerse(subjects, predicates, objects));

    };


    function getVerse(_sub: string[], _pre: string[], _obj: string[]): string {
        //console.log(_sub +" " + _pre +" " + _obj);
        //return _sub +" " + _pre +" " + _obj; 


        let verse: string = " ";

        let result1: number = Math.floor(Math.random() * _sub.length);
        verse = verse + _sub[result1] + " ";
        _sub.splice(result1, 1);
        //console.log(result1);


        let result2: number = Math.floor(Math.random() * _pre.length);
        verse = verse + _pre[result2] + " ";
        _pre.splice(result2, 1);
        //console.log(result2);


        let result3: number = Math.floor(Math.random() * _obj.length);
        verse = verse + _obj[result3] + " ";
        _obj.splice(result3, 1);
        //console.log(result3);

        return verse;

    };


}; 