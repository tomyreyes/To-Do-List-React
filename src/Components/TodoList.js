import React, { Component } from 'react';
import Todo from './Todo'
import '../App.css'

class TodoList extends Component {
    render() {
        let listOfTasks = this.props.list.map((singleTask, i) => {
            return (<Todo key={i} showTask={singleTask} check={this.props.check} />
            )
        })
        return (
            <div>{listOfTasks}</div>
        )
    }
}


export default TodoList 