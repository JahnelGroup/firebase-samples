import todoList from './todo-list.component.js'
import { EDIT_MODE } from './todo-item.component.js'

const db = firebase.firestore();

const handleErrors = (error) => console.error("An error occured: " + error)


/* Function to re-render the todo list */
const render = (html) => {
    const tasksSection = document.querySelector('.tasks-list')
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    tasksSection.parentNode.replaceChild(template.content.firstChild, tasksSection)
}

/*
 * The Model is the remote Database.
 * The following listens to the database, and 
 * rerenders the UI with any changes.
 */

db.collection("todos")
    .onSnapshot(function(querySnapshot) {
        let todoModel = [] 
        querySnapshot.forEach(doc => 
            todoModel.push(Object.assign({}, {id: doc.id}, doc.data())))
        render(todoList(todoModel))
    })



/* handlers to delegate all events to database. */
const clickHandler = (event) => {
    const target = event.target

    if (target.id == 'add-btn') {
        const task = document.getElementById('new-task').value
        db.collection("todos")
            .add({ completed: false, task })
            .catch(handleErrors);
        document.getElementById('new-task').value = null

    } else if (target.type == 'checkbox') {
        db.collection("todos").doc(target.id)
            .get()
            .then(doc => !doc.data().completed)
            .then(completed => db.collection('todos').doc(target.id)
                .update({completed}))
            .catch(handleErrors)
    
    } else if (target.innerHTML == 'delete') {
        const task = target.parentElement.firstElementChild.id
        db.collection("todos").doc(task)
            .delete()
            .catch(handleErrors)
    
    } else if (target.innerHTML == 'edit') {
        const task = target.parentElement.firstElementChild.id
        db.collection("todos").doc(task)
            .update({ [EDIT_MODE]: true })
            .catch(handleErrors)
    }
}

// For when clicking out of an updated field.
const blurHandler = (event) => {
    const target = event.target
    if ([...target.classList].includes('tasks-listItem-update')) {
        const { id, value } = target
        db.collection("todos").doc(id)
            .update({ [EDIT_MODE]: false, task: value })
            .catch(handleErrors)
    }
}

export { clickHandler, blurHandler }