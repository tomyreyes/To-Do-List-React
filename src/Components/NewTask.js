import React, { Component } from 'react';
import '../App.css';

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    addTask = (task) => {
        let inputTask = {
            task: this.state.task,
            isChecked: false
        }
        this.props.addNewInput(inputTask)
        this.setState({
            task:""
        })
    }
    updateTask = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    render() {
        return <div>
            <input type="text" onChange={this.updateTask} value={this.state.task} placeholder="Enter new task" />
            <button onClick={this.addTask}>Add</button>
        </div>
    }
}
export default NewTask