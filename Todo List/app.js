//  Requirements
/**
 * document.getElementById()
 * addEventListerner()
 * e.target
 * appendChld()
 * createElement()
 * parentElement()
 * remove()
 * classList.add()
 */


// Variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task')

// Event listerner for button

addTask.addEventListener("click", () => {

    // create a div to house each task
    let task = document.createElement('div');
    task.classList.add('task');

    // create the list element
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // Buttons inside our todo
    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

    // To display information
    if (inputTask.value === ""){
        alert('Please Enter a Task');
    }else{
        taskContainer.appendChild(task)

    }

    // Adjusting the value of the input
    inputTask.value = "";

    checkButton.addEventListener('click', () => {

        checkButton.parentElement.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener('click', (e) => {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })
})
