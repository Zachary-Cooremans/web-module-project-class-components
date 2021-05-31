import React from 'react'
const Todo = (props) => {

    const handleClick = () => {
        props.toggleTask(props.tasks.id)
    }   

    return(
        <div onClick={handleClick} className={`item${props.tasks.completed ? 'completed' : ''}`}>
            <p>{props.tasks.task}</p>
        </div>
    )
}

export default Todo