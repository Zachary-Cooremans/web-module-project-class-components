import React from 'react'
class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='todo'
                    onChange={this.handleChanges}
                    placeholder='Add a new item todo'
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm