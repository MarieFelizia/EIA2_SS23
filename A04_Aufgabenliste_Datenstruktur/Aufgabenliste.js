"use strict";
var Aufgabenliste;
(function (Aufgabenliste) {
    /*
   Aufgabe: <A03_Aufgabenliste_Daten>
   Name:<Marie Eckl>
   Matrikel: <272409>
   Datum: <18.04.23>
   Zusammenarbeit mit Pia Schwer, Theresa Hauser
   */
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        generateContent(Aufgabenliste.data);
        let addTask = document.getElementById("addTask");
        addTask.addEventListener("click", taskElements);
    }
    ;
    function taskElements() {
        const taskName = document.getElementById("taskName");
        const nameValue = taskName.value;
        const deadlineDate = document.getElementById("deadlineDate");
        const dateValue = deadlineDate.value;
        const deadlineTime = document.getElementById("deadlineTime");
        const timeValue = deadlineTime.value;
        const asignee = document.getElementById("asignee");
        const asigneeValue = asignee.value;
        const comment = document.getElementById("comment");
        const commentValue = comment.value;
        const newTask = {
            task: nameValue,
            date: dateValue,
            time: timeValue,
            name: asigneeValue,
            comment: commentValue,
            status: false
        };
        generateContent(newTask);
        Aufgabenliste.data.push(newTask);
        taskName.value = "";
        deadlineDate.value = "";
        deadlineTime.value = "";
        asignee.value = "";
        comment.value = "";
    }
    ;
    function generateContent(newTask) {
        const taskList = document.getElementById("taskList");
        const newTaskElement = document.createElement("div");
        newTaskElement.classList.add("newTask");
        newTaskElement.innerHTML = `
        
        <label for="taskName">Aufgabe:</label>
        <input type="text" id="taskName" placeholder="${newTask.task} ">

        <label for="deadlineDate">Deadline Datum:</label>
        <input type="text" id="deadlineDate" placeholder="${newTask.date} ">

        <label for="deadlineTime">Deadline Uhrzeit:</label>
        <input type="text" id="deadlineTime" placeholder="${newTask.time} ">

        <label for="assignee">@</label>
        <input type="text" id="asignee" placeholder=" ${newTask.name}">

        <label for="comment">Kommentar:</label>
        <input id="comment" placeholder=" ${newTask.comment}">

        <label><input type="radio" name="task-status" value="done">Erledigt</label>
        <label><input type="radio" name="task-status" value="in-progress">In Bearbeitung</label>

        `;
        taskList.appendChild(newTaskElement);
        //newTaskElement.style.display = "none";
    }
    ;
})(Aufgabenliste || (Aufgabenliste = {}));
;
//# sourceMappingURL=Aufgabenliste.js.map