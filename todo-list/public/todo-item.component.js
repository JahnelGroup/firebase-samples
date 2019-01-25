const EDIT_MODE = 'Edit Mode'

export { EDIT_MODE }

export default (props) => `
<li class="tasks-listItem">
    ${props[EDIT_MODE] ? 
        `<input id="${props.id}" value="${props.task}" class="tasks-listItem-update"
            onfocus="this.select()" autofocus>`:
        `<input type="checkbox" ${props.completed ? 'checked' : ''} id="${props.id}">
        <label for="${props.id}">${props.task}</label>
        <a href="#">edit</a>
        <a href="#">delete</a>`
    }
</li>
`