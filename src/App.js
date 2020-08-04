import React from 'react';


import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


 let todoListInitialValue = [
  
];

class App extends React.Component {


state = {
  todoListValue: [...todoListInitialValue]
}

addItem = (taskName) => {
  const newItem = {
    task: taskName,
    id: new Date(),
    completed: false
  }

  this.setState({
    todoListValue: [...this.state.todoListValue, newItem ]
  })
}

toggleItem = id => {
  this.setState({
    todoListValue: this.state.todoListValue.map(item =>{
     return item.id === id ? {...item, completed: !item.completed } : item
    })
  })
}

deletItem = () => {
  this.setState({
    todoListValue: this.state.todoListValue.filter( item => item.completed === false)
  })
}

  render() {
    return (
      <div className="flex">
      <div className="container">
      
      <TodoForm
          addItem={this.addItem}
          deletItem={this.deletItem}
          />


        <TodoList
          todoList={this.state.todoListValue}
          toggleItme={this.toggleItem}
          />

        
      
      </div>
      </div>
    );
  }
}

export default App;
