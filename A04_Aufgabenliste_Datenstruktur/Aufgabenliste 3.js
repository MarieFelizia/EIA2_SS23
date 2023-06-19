"use strict";
var Aufgabenliste;
(function (Aufgabenliste) {
    /*
   Aufgabe: <A04_Aufgabenliste_Daten>
   Name:<Marie Eckl>
   Matrikel: <272409>
   Datum: <18.04.23>
   Zusammenarbeit mit Pia Schwer, Theresa Hauser
   */
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let addTask = document.getElementById("addTask");
        addTask.addEventListener("click", taskElements);
        generateContent(Aufgabenliste.data);
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
            Input: [
                {
                    task: nameValue,
                    date: dateValue,
                    time: timeValue,
                    name: asigneeValue,
                    comment: commentValue,
                    status: false
                }
            ]
        };
        generateContent(newTask);
        taskName.value = "";
        deadlineDate.value = "";
        deadlineTime.value = "";
        asignee.value = "";
        comment.value = "";
    }
    ;
    function generateContent(_data) {
        const taskList = document.getElementById("taskList");
        for (let x = 0; x < _data.Input.length; x++) {
            const newTaskElement = document.createElement("div");
            newTaskElement.classList.add("newTask");
            newTaskElement.innerHTML = `
        
        <label for="taskName">Aufgabe:</label>
        <input type="text" id="taskName" placeholder="${_data.Input[x].task} ">

        <label for="deadlineDate">Deadline Datum:</label>
        <input type="date" id="deadlineDate" placeholder="${_data.Input[x].date} ">

        <label for="deadlineTime">Deadline Uhrzeit:</label>
        <input type="time" id="deadlineTime" placeholder="${_data.Input[x].time} ">

        <label for="assignee">@</label>
        <input type="text" id="asignee" placeholder=" ${_data.Input[x].name}">

        <label for="comment">Kommentar:</label>
        <input id="comment" placeholder=" ${_data.Input[x].comment}">

        <label><input type="checkbox" name="task-status" value="done">Erledigt</label>
        <label><input type="checkbox" name="task-status" value="in-progress">In Bearbeitung</label>

        <br>

        <button id= "deleteTask" type="submit">Löschen</button>
        `;
            taskList.appendChild(newTaskElement);
            //newTaskElement.style.display = "none";
            const deleteButton = newTaskElement.querySelector("#deleteTask");
            if (deleteButton) {
                deleteButton.addEventListener("click", function () {
                    newTaskElement.remove();
                });
            }
            ;
        }
        ;
    }
    ;
})(Aufgabenliste || (Aufgabenliste = {}));
;
//# sourceMappingURL=Aufgabenliste%203.js.map