import React, { Component } from 'react';
import '../App.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.showTask.isChecked
        }
    }

    checked = () => {
        this.setState((prevState) => ({
            isChecked: prevState.isChecked
        }))
        this.props.check(this.props.showTask)
    }

    render() {
        let { task } = this.props.showTask
        return (
            <div>
                <span>{task}</span>
                <input type="checkbox" checked={this.props.showTask.isChecked} onChange={this.checked} />
            </div>
        )
    }
}

export default Todo