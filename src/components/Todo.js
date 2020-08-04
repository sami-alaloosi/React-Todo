import React from 'react'

import './Todo.css'


class Todo extends React.Component {

    render(){
        
        return (
            <div
             onClick={()=>this.props.toggleItem(this.props.item.id)}
            className={`${this.props.item.completed? "yes" : ""}`}
            >
            {this.props.item.task}
            </div>
        )
    }
}

export default Todo;
