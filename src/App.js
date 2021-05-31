import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

 const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      tasks: tasks
    }
  }

  toggleTask = (id) => {
    console.log(id)
    const newList = this.state.tasks.map(item => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return(item)
      }
    })
    this.setState({
      tasks: newList
    })
  }

  addTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTodo]
    })
  }

  clearList = () => {
    const newList = this.state.tasks.filter(item => {
      return(item.completed === false)
    })
    this.setState({
      tasks: newList
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearList={this.clearList} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
