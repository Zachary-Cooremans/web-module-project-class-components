// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {

    const handleClick = () => {
        props.clearList()
    }
    return(
        <div>
            {props.tasks.map(todo => (
                <Todo key={todo.id} tasks={todo} toggleTask={props.toggleTask}/>
            ))}
            <button onClick={handleClick} >Clear</button>
        </div>
    )
}

export default TodoList