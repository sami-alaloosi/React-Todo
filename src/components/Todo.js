import React from 'react'


class Todo extends React.Component {

    render(){
        
        return (
            <div>{this.props.item.task}</div>
        )
    }
}

export default Todo;
