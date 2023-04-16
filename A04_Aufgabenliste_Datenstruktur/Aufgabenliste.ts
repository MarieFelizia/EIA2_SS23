namespace Aufgabenliste {

    /*
   Aufgabe: <A03_Aufgabenliste_Daten>
   Name:<Marie Eckl>
   Matrikel: <272409>
   Datum: <18.04.23>
   Zusammenarbeit mit Pia Schwer, Theresa Hauser 
   */

   
    
   window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let addTask: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addTask");
        addTask.addEventListener("click", taskElements);
    };

    function taskElements(): void {
        const taskName = document.getElementById("taskName") as HTMLInputElement;
        const nameValue = taskName.value;

        const deadlineDate = document.getElementById("deadlineDate") as HTMLInputElement;
        const dateValue = deadlineDate.value;

        const deadlineTime = document.getElementById("deadlineTime") as HTMLInputElement;
        const timeValue = deadlineTime.value;

        const asignee = document.getElementById("asignee") as HTMLInputElement;
        const asigneeValue = asignee.value;

        const comment = document.getElementById("comment") as HTMLInputElement;
        const commentValue = comment.value;

        const newTask: Item = {
            task: nameValue,
            date: dateValue,
            time: timeValue,
            name: asigneeValue,
            comment: commentValue,
            status: false
        };
 
        generateContent(newTask);

        data.push(newTask);

        taskName.value = "";
        deadlineDate.value = "";
        deadlineTime.value = "";
        asignee.value = "";
        comment.value = "";
    };

    
    function generateContent(newTask: Item): void {
        const taskList = document.getElementById("taskList") as HTMLUListElement;

        const newTaskElement = document.createElement("div");
        newTaskElement.classList.add("newTask")

        newTaskElement.innerHTML = `
        
        <label for="taskName">Aufgabe:</label>
        <input type="text" id="taskName" placeholder="${newTask.task} ">

        <label for="deadlineDate">Deadline Datum:</label>
        <input type="date" id="deadlineDate" placeholder="${newTask.date} ">

        <label for="deadlineTime">Deadline Uhrzeit:</label>
        <input type="time" id="deadlineTime" placeholder="${newTask.time} ">

        <label for="assignee">@</label>
        <input type="text" id="asignee" placeholder=" ${newTask.name}">

        <label for="comment">Kommentar:</label>
        <input id="comment" placeholder=" ${newTask.comment}">

        <label><input type="radio" name="task-status" value="done">Erledigt</label>
        <label><input type="radio" name="task-status" value="in-progress">In Bearbeitung</label>

        <br>

        <button id= "deleteTask" type="submit">Löschen</button>
        `;

        taskList.appendChild(newTaskElement);
        //newTaskElement.style.display = "none";

        const deleteButton = newTaskElement.querySelector("#deleteTask");
        if (deleteButton) {
            deleteButton.addEventListener("click", () => {

                newTaskElement.remove();
            });

        };

    };


};









