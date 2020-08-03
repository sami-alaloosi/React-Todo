import React from 'react';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"


 let todoListInitialValue = [
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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

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

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoListValue} />
        <TodoForm  addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
