import React from 'react'


class Todo extends React.Component {

    render(){
        console.log(this.props.item.task) // delet this when your done
        return (
            <div>{this.props.item.task}</div>
        )
    }
}

export default Todo;
