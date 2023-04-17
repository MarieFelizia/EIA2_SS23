namespace Aufgabenliste {

  /*
   Aufgabe: <A03_Aufgabenliste_Formular>
   Name:<Marie Eckl>
   Matrikel: <272409>
   Datum: <08.04.23>
   Zusammenarbeit mit Pia Schwer, Theresa Hauser 
   */


export interface Item {
    task: string;
    date: string;
    time: string; 
    name: string;
    comment: string;
    status: boolean;
}

export interface Todo { 
[name: string]: Item[]; 
}

export let data: Todo = {
   Input: [ 

   { task: "Geschirr abwaschen", date: "19.04.23", time: "19.00",  name: "Luca", comment: "Töpfe nicht vergessen", status: true }, 
   
   { task: "Flur putzen", date: "23.04.23", time: "12.00",  name: "Lina", comment: "Auch Staub wischen", status: true }, 

   { task: "Müll leeren", date: "16.04.23", time: "10.00", name: "Maya", comment: "Auch den Bio Müll leeren", status: true }, 
 
]
}
};
