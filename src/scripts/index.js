const tasks = JSON.parse(localStorage.getItem("tasks"))
    
for (let task of tasks) {

    if(task.status == "todo") {
        createTodoTask(task)
    } else if (task.status == "doing"){
        createDoingTask(task)
    } else {
        createDoneTask(task)
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
        status: "todo"
    };

    if (localStorage.getItem("tasks") == null) {
        localStorage.setItem("tasks", JSON.stringify([newTask]))
    } else {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(newTask)
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function moveToDoing (name) {
    for(let task of tasks) {
        if(task.name.split(" ").join("") == name) {
            task.status = "doing"
            break
        }
    } 
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload();
}

function moveToDone (name) {
    for(let task of tasks) {
        if(task.name.split(" ").join("") == name) {
            task.status = "done"
            break
        }
    } 
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload();
}

function deleteTask (name) {
    const deleteTask = tasks.filter(task => task.name.split(" ").join("") != name)
    localStorage.setItem("tasks", JSON.stringify(deleteTask));
    window.location.reload();
}


function showEditTask (element) {
    document.querySelector(`.task#${element.id}`).style.display = "none";
    document.querySelector(`.taskEdit#${element.id}`).style.display = "block";
}

function showNormalTask (element) {
    document.querySelector(`.task#${element.id}`).style.display = "block";
    document.querySelector(`.taskEdit#${element.id}`).style.display = "none";
}

function editTask (name) {
    const newTask = {
        name: document.querySelector(`.taskEdit#${name} #nameEdit`).value,
        description: document.querySelector(`.taskEdit#${name} #descriptionEdit`).value,
        date: document.querySelector(`.taskEdit#${name} #dateTaskEdit`).value,
        priority: document.querySelector(`.taskEdit#${name} #priorityEdit`).value,
        category: document.querySelector(`.taskEdit#${name} #categoryEdit`).value,
        status: document.querySelector(`.taskEdit#${name} input[name="status"]:checked`).value
    };


    for(let task of tasks) {
        if(task.name.split(" ").join("") == name) {
            task.name = newTask.name;
            task.description = newTask.description;
            task.date = newTask.date;
            task.priority = newTask.priority;
            task.category = newTask.category;
            task.status = newTask.status;
            break
        }
    } 

    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload();
}


function createTodoTask(task) {

    const column = document.querySelector(".todo") 

    column.innerHTML += `
    <div class="task" id=${task.name.split(" ").join("")} >
        <div class="topTask">
            <ion-icon onclick="showEditTask(this)" id=${task.name.split(" ").join("")} name="create"></ion-icon>
            <ion-icon onclick="deleteTask(id)" id=${task.name.split(" ").join("")} name="close-circle"></ion-icon>
        </div>

        <div class="contentTask">
            <h3 class="name">${task.name}</h3>
            <p>Categoria: ${task.category}</p>
            <p>prioridade: ${task.priority}</p>
            <p>${task.description}</p>
            <p>Data de entrega- ${task.date}</p>
        </div>  

        <div class="bottomTask" >
            <ion-icon onclick="moveToDoing(id)" id=${task.name.split(" ").join("")} name="arrow-round-forward"></ion-icon>
        </div>
    </div>

    <div class="taskEdit" id=${task.name.split(" ").join("")} >
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
                    <input type="number" name="priority" id="priorityEdit" min="1" max="5" value=${task.priority} placeholder="Prioridade"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="text" name="category" id="categoryEdit" value=${task.category} placeholder="Categoria"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <h4>Status</h4>
                    <div class="radioBox" >
                        <label for="todo">ToDo</label>
                        <input type="radio" name="status" id="todo" value="todo" placeholder="Categoria"  required  />

                        <label for="doing">Doing</label>
                        <input type="radio" name="status" id="doing" value="doing" placeholder="Categoria"  required  />

                        <label for="todo">Done</label>
                        <input type="radio" name="status" id="done" value="done" placeholder="Categoria"  required  />
                    </div>
                </div>
                <br/>

                <input onclick="editTask(id)" type="submit" name="submit" id=${task.name.split(" ").join("")} class="submit" value="Atualizar a Task!">
                <button onclick="showNormalTask(this)" id=${task.name.split(" ").join("")} >voltar</button>
            </fieldset>
        </form>  
    </div>
    `
}

function createDoingTask(task) {

    const column = document.querySelector(".doing")

    column.innerHTML += `
    <div class="task" id=${task.name.split(" ").join("")}>
        <div class="topTask">
            <ion-icon onclick="showEditTask(this)" id=${task.name.split(" ").join("")} name="create"></ion-icon>
            <ion-icon onclick="deleteTask(id)" id=${task.name.split(" ").join("")} name="close-circle"></ion-icon>
        </div>

        <div class="contentTask">
            <h3 class="name">${task.name}</h3>
            <p>Categoria: ${task.category}</p>
            <p>prioridade: ${task.priority}</p>
            <p>${task.description}</p>
            <p>Data de entrega- ${task.date}</p>
        </div>  

        <div class="bottomTask">
            <ion-icon onclick="moveToDone(id)" id=${task.name.split(" ").join("")}  name="checkbox"></ion-icon>
        </div>
    </div>

    <div class="taskEdit" id=${task.name.split(" ").join("")}>
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
                    <input type="number" name="priority" id="priorityEdit" min="1" max="5" value=${task.priority} placeholder="Prioridade"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="text" name="category" id="categoryEdit" value=${task.category} placeholder="Categoria"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <h4>Status</h4>
                    <div class="radioBox" >
                        <label for="todo">ToDo</label>
                        <input type="radio" name="status" id="todo" value="todo" placeholder="Categoria"  required  />

                        <label for="doing">Doing</label>
                        <input type="radio" name="status" id="doing" value="doing" placeholder="Categoria"  required  />

                        <label for="todo">Done</label>
                        <input type="radio" name="status" id="done" value="done" placeholder="Categoria"  required  />
                    </div>
                </div>
                <br/>

                <input onclick="editTask(id)" type="submit" name="submit" id=${task.name.split(" ").join("")} class="submit" value="Atualizar a Task!">
                <button onclick="showNormalTask(this)" id=${task.name.split(" ").join("")} >voltar</button>
            </fieldset>
        </form>  
    </div>
    `
}

function createDoneTask(task) {

    const column = document.querySelector(".done")

    column.innerHTML += `
    <div class="task" id=${task.name.split(" ").join("")}>
        <div class="topTask">
            <ion-icon onclick="showEditTask(this)" id=${task.name.split(" ").join("")} name="create"></ion-icon>
            <ion-icon onclick="deleteTask(id)" id=${task.name.split(" ").join("")} name="close-circle"></ion-icon>
        </div>

        <div class="contentTask">
            <h3 class="name">${task.name}</h3>
            <p>Categoria: ${task.category}</p>
            <p>prioridade: ${task.priority}</p>
            <p>${task.description}</p>
            <p>Data de entrega- ${task.date}</p>
        </div>  

        <div class="bottomTask">
            <ion-icon class="checkButton" name="checkbox"></ion-icon>
        </div>
    </div>

    <div class="taskEdit" id=${task.name.split(" ").join("")} >
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
                    <input type="number" name="priority" id="priorityEdit" min="1" max="5" value=${task.priority} placeholder="Prioridade"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <input type="text" name="category" id="categoryEdit" value=${task.category} placeholder="Categoria"  required  />
                </div>
                <br/>

                <div class="inputEditBox">
                    <h4>Status</h4>
                    <div class="radioBox" >
                        <label for="todo">ToDo</label>
                        <input type="radio" name="status" id="todo" value="todo" placeholder="Categoria"  required  />

                        <label for="doing">Doing</label>
                        <input type="radio" name="status" id="doing" value="doing" placeholder="Categoria"  required  />

                        <label for="todo">Done</label>
                        <input type="radio" name="status" id="done" value="done" placeholder="Categoria"  required  />
                    </div>
                </div>
                <br/>

                <input onclick="editTask(id)" type="submit" name="submit" id=${task.name.split(" ").join("")} class="submit" value="Atualizar a Task!">
                <button onclick="showNormalTask(this)" id=${task.name.split(" ").join("")} >voltar</button>
            </fieldset>
        </form>  
    </div>
    `
}