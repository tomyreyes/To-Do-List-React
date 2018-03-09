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
     //axios.post??   
    }

    render() {
        const styles = {
            spacing: {
                marginLeft: 20 
            },
            completedTask: {
                textDecoration: 'line-through',
                color: '#D1D1D1'
            },
            incompleteTask:{
                textDecoration: 'none' 

            }
        }
        let strikeout = this.props.showTask.isChecked ? styles.completedTask : styles.incompleteTask
        let { task } = this.props.showTask
        return (
            <div>
                <input type="checkbox" checked={this.props.showTask.isChecked} onChange={this.checked} />
                    <span style={{...strikeout , ...styles.spacing}}>{task}</span>
            </div>
        )
    }
}

export default Todo