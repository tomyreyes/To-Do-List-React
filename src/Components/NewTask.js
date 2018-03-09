import React, { Component } from 'react';
import '../App.css';
import {Button, Input} from 'reactstrap'

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    addTask = (task) => {
        if (task === ''){
            alert('Enter something')
            return
        }
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
        return <span>
            
            <Input type="text" onChange={this.updateTask} value={this.state.task} 
                onKeyDown={(e) => { if (e.keyCode === 13) this.addTask(this.state.task) }} placeholder="Enter new task" />
            
            {/* <Button color="success"onClick={this.addTask}>Add</Button> */}
            </span>
        
    }
}
export default NewTask