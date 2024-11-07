// 1st for clock ==>

// get the element
const clockText = document.querySelector(".clockText")
// crate a function to start a time
function startClock() {
    setInterval(() => {
        const date = new Date().toLocaleTimeString()
        console.log(date);
        clockText.innerHTML = date
    },1000)
}
startClock() // clock is running

// 2nd for date ==>

// get the date  element
const dateData = document.querySelector(".dateData")
// crate a function to add the date
function getDate(){
    const date = new Date().toDateString()
    dateData.innerHTML = date
}
getDate()

// 3rd for todo list ==>
    // get the todo list element
const todoInputField = document.querySelector(".todoInput")
const todoAddBtn =  document.querySelector(".addTask")
// create a function that will be start executing on button click and pressing enter key

// get the unorder list and append the task
const taskUL = document.querySelector(".tasks")
// getting the ul outside to accessit again


function addTasks() {
    // get the input value
    const task = todoInputField.value.trim()
    // create a list for the ul 
    const taskLists = document.createElement("li")
    // giving an id to all li items, it will help to delete all lists by one click (in delAllTasks function)
    taskLists.setAttribute("id","allTasksTogether")

    // if the input value is empty do nothing
    if(todoInputField.value === "") return

    taskLists.innerHTML = task
    // appending the li to the ul
    taskUL.appendChild(taskLists)
    // after adding task clear the input value
    todoInputField.value = ""

    // create a delete button
    const delTaskBtn = document.createElement("button")
    delTaskBtn.innerHTML = "❌"
    //  append the delete button to the task list
    taskLists.appendChild(delTaskBtn)
    // add some styling
    // adding a obj for style
    const delBtnStyle = {
        backgroundColor: "transparent",
        marginLeft: "100px",
        cursor: "pointer",
    }
    //append the style using loop
    for(const styleprop in delBtnStyle){
          delTaskBtn.style[styleprop]  = delBtnStyle[styleprop]
    }
    // delete function
    function deleteTasks () {
        taskLists.remove() // removing the tasklist
    }
    // adding the function in the delete button
    delTaskBtn.addEventListener("click", deleteTasks)

    // adding checkbox for task completation
    // create a checkbox 
    const checkTask = document.createElement("input")
    // we need to add type attribute
    checkTask.setAttribute("type", "checkbox")

    // prepend the chekckbox to the list
    taskLists.prepend(checkTask)

    // crate a function for task completion
    function taskComplete () {
        // if the checkbox is ticked the text decoration will be chenge to line-through
        if(checkTask.checked){
            taskLists.style.textDecoration = "line-through";
            taskLists.style.opacity = "40%"
        }
        else {
            taskLists.style.textDecoration = "none"
            taskLists.style.opacity = "100%"
        }
    }
    // adding some styling to the checkbox
    const checkTaskStyle = {
        margin: "10px 30px",
        cursor: "pointer",
        
    }
    // adding the style using loop
    for(const styleProp in checkTaskStyle){
        checkTask.style[styleProp] = checkTaskStyle[styleProp]
    }


    // adding the function in the check box
    checkTask.addEventListener("change", taskComplete)

    
 
}
//  add button click event
todoAddBtn.addEventListener("click", addTasks)
//  add enter key event
// the event will be on the input field
todoInputField.addEventListener("keydown", (e) => {
    if(e.key === "Enter") addTasks() // if the key is enter calling the function
})

// function for delete all tasks
// we can't delete the ul
// we can give all li to an id then remove by id
// in the time of list cration add an id



// lets crate a popup in the html file
    // in the popup there will be a message
    // and a yes and no button

// get the clearAll button and add the event
// if we click the button the popup will be appear
const clearAll = document.querySelector(".clearAll")


// accessing the popup
const popup = document.querySelector(".popup-wrapper")

clearAll.addEventListener("click", () => {
    // if we click the button popup will be appear
    // get the popup

    // check if the value of the ul is empty then dont show the popup
    if(taskUL.children.length > 0) popup.style.display = "flex" // showing the popup

})

    // getting the buttons of popups
    const confirmTaskAllBtn = document.querySelector(".confirmDel")
    const cancelDelleteTaskBtn = document.querySelector(".cancel")

    // Confirm and cancel delete all functions
    function confirmDelAllTasks() {
    taskUL.innerHTML = "" // clear all tasks
    popup.style.display = "none" // hide popup
    }

    function cancelDelTasks() {
    popup.style.display = "none" // hide popup without clearing tasks
    }

    // Attach event listeners to popup buttons
    confirmTaskAllBtn.addEventListener("click", confirmDelAllTasks)
    cancelDelleteTaskBtn.addEventListener("click", cancelDelTasks)