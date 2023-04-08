"use strict";
var Aufgabenliste;
(function (Aufgabenliste) {
    /*
   Aufgabe: <A03_Aufgabenliste_Formular>
   Name:<Marie Eckl>
   Matrikel: <272409>
   Datum: <08.04.23>
   Zusammenarbeit mit Pia Schwer, Theresa Hauser
   */
    console.log("App wird gestartet");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.getElementById("radioButton")?.addEventListener("click", radioButton);
        document.getElementById("chooseName")?.addEventListener("click", chooseName);
        document.getElementById("deadline")?.addEventListener("click", deadline);
        document.getElementById("comment")?.addEventListener("click", comment);
        document.getElementById("deleteTask")?.addEventListener("click", deleteTask);
    }
    ;
    function radioButton() {
        console.log("Radio Button gedrückt");
    }
    ;
    function chooseName() {
        console.log("Name ausgewählt");
    }
    ;
    function deadline() {
        console.log("Uhrzeit und Datum geändert");
    }
    ;
    function comment() {
        console.log("Aufgabe kommentiert");
    }
    ;
    function deleteTask() {
        console.log("Aufgabe löschen Button gedrückt");
    }
    ;
})(Aufgabenliste || (Aufgabenliste = {}));
//# sourceMappingURL=Aufgabenliste.js.map