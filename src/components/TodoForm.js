import React from "react"



class TodoForm extends React.Component {
    state = {
        itemText: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            itemText: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()

        this.props.addItem(this.state.itemText)
        this.setState({
            itemText: ""
        })
    }
    

    
       
    render(){
       
        return(
            <div>
            <form onSubmit={this.onSubmitHandler}>
                <input
                    id="addTodo"
                    name="addTodo"
                    placeholder="Enter your Todo"
                    value={this.state.itemText}
                    onChange ={this.onChangeHandler}
                 />
                 <button >Add Todo</button>
                 
            </form>
            <button>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;