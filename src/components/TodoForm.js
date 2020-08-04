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
                    type="text"
                    id="addTodo"
                    name="addTodo"
                    placeholder="Enter your Todo"
                    value={this.state.itemText}
                    onChange ={this.onChangeHandler}
                 />
                 <div><button className="green" >Add Todo</button></div>
                 
                 
            </form>
            
            <button
             className="red"
              onClick={this.props.deletItem}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;