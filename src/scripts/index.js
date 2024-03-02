const tasks = JSON.parse(localStorage.getItem("tasks"))
    
for(let task of tasks) {
    console.log(task.name)
    if(task.status == "todo") {
        createTodoTask(task)
    } else if (task.status == "doing"){
        createDoingTask(task)
    } else {
        console.log("chamar creatDoneTask")
    }
}   

function showCreatFormBox () {
    document.getElementById("addButton").style.display = "none";
    document.getElementById("creatFormBox").style.display = "block";
}

function showCreatTask () {
    document.getElementById("creatFormBox").style.display = "none";
    document.getElementById("addButton").style.display = "block";
}

function creatNewTask () {
    const newTask = {
        name: document.querySelector("#creatFormBox #name").value,
        description: document.querySelector("#creatFormBox #description").value,
        date: document.querySelector("#creatFormBox #dateTask").value,
        priority: document.querySelector("#creatFormBox #priority").value,
        category: document.querySelector("#creatFormBox #category").value,
        status: "doing"
    };

    if (localStorage.getItem("tasks") == null) {
        localStorage.setItem("tasks", JSON.stringify([newTask]))
    } else {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(newTask)
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function createTodoTask(task) {
    const column = document.querySelector(".todo") 
    column.innerHTML += `
    <div class="task">
        <div class="topTask">
            <ion-icon name="create"></ion-icon>
            <ion-icon name="close-circle"></ion-icon>
        </div>

        <div class="contentTask">
            <h3 class="name">${task.name}</h3>
            <p>Categoria: ${task.category}</p>
            <p>prioridade: ${task.priority}</p>
            <p>${task.description}</p>
            <p>Data de entrega- ${task.date}</p>
        </div>  

        <div class="bottomTask">
            <ion-icon name="arrow-round-forward"></ion-icon>
        </div>
    </div>

    <div class="taskEdit">
        <form>
            <fieldset>
                <div class="inputEditBox">
                    <input type="text" name="nome" id="nameEdit" value="${task.name}" placeholder="Nome" required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="text" name="description" id="descriptionEdit" value="${task.description}" placeholder="Descrição"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="datetime-local" name="dateTask" id="dateTaskEdit" value="${task.date}" required />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="number" name="priority" id="dateEdit" min="1" max="5" value=${task.priority} placeholder="Prioridade"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="text" name="category" id="categoryEdit" value=${task.category} placeholder="Categoria"  required  />
                </div>
                <br/>

                <input type="submit" name="submit" id="submit" value="Atualizar a Task!">
                <button>voltar</button>
            </fieldset>
        </form>  
    </div>
    `
}

function createDoingTask(task) {
    const column = document.querySelector(".doing")
    column.innerHTML += `
    <div class="task">
        <div class="topTask">
            <ion-icon name="create"></ion-icon>
            <ion-icon name="close-circle"></ion-icon>
        </div>

        <div class="contentTask">
            <h3 class="name">${task.name}</h3>
            <p>Categoria: ${task.category}</p>
            <p>prioridade: ${task.priority}</p>
            <p>${task.description}</p>
            <p>Data de entrega- ${task.date}</p>
        </div>  

        <div class="bottomTask">
            <ion-icon name="checkbox"></ion-icon>
        </div>
    </div>

    <div class="taskEdit">
        <form>
            <fieldset>
                <div class="inputEditBox">
                    <input type="text" name="nome" id="nameEdit" value="${task.name}" placeholder="Nome" required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="text" name="description" id="descriptionEdit" value="${task.description}" placeholder="Descrição"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="datetime-local" name="dateTask" id="dateTaskEdit" value="${task.date}" required />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="number" name="priority" id="dateEdit" min="1" max="5" value=${task.priority} placeholder="Prioridade"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="text" name="category" id="categoryEdit" value=${task.category} placeholder="Categoria"  required  />
                </div>
                <br/>

                <input type="submit" name="submit" id="submit" value="Atualizar a Task!">
                <button>voltar</button>
            </fieldset>
        </form>  
    </div>
    `
}