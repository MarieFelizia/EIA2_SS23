namespace AufgabenlisteA06 {

    /*
   Aufgabe: <A06_Aufgabenliste_Data>
   Name:<Marie Eckl>
   Matrikel: <272409>
   Datum: <29.04.23>
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

    interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
      }

    window.addEventListener("load", handleLoad);

    async function handleLoad(): Promise<void> {
        let addTask: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addTask");
        addTask.addEventListener("click", taskElements);


        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=find&collection=TaskList");
        let content: string = await response.text();
        let data: Todo = JSON.parse(content);

        generateContent(data)
    };

    async function taskElements(): Promise<void> {
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

        const newTask: Todo = {
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
    };


    async function generateContent(_data: Todo): Promise<void> {
        const taskList = document.getElementById("taskList") as HTMLUListElement;

        for (let x: number = 0; x < _data.Input.length; x++) {
            const newTaskElement = document.createElement("div");
            newTaskElement.classList.add("newTask")

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


        let formData: FormData = new FormData(document.forms[0]);
        let json: FormDataJSON = {};

        for (let key of formData.keys())
        if (!json[key]) {
            let values: FormDataEntryValue[] = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
         }

            let query: URLSearchParams = new URLSearchParams();
            query.set("command", "insert");
            query.set("collection", "TaskList");
            query.set("data", JSON.stringify(json));

            await fetch ("https://webuser.hs-furtwangen.de/~ecklmari/Database/?" + query.toString());


            taskList.appendChild(newTaskElement);
            //newTaskElement.style.display = "none";

            const deleteButton = newTaskElement.querySelector("#deleteTask");
            if (deleteButton) {
                deleteButton.addEventListener("click",async function () {
                    newTaskElement.remove();
                    
                let query: URLSearchParams = new URLSearchParams();
                query.set("command", "delete");
                query.set("collection", "TaskList");
                query.set("data", JSON.stringify(json));

                await fetch("https://webuser.hs-furtwangen.de/~ecklmari/Database/?" + query.toString());
                
                });

            };

        };
    };

}; 