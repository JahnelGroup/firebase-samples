import todoItem from './todo-item.component.js'

export default (props) => `
<ul class="tasks-list">
    ${props.map(item => todoItem(item)).join('')}
</ul>
`