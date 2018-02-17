import React, { Component } from 'react';
import Todo from './Todo'
import '../App.css'
import {ListGroup, ListGroupItem} from 'reactstrap'
class TodoList extends Component {
    render() {
        let listOfTasks = this.props.list.map((singleTask, i) => {
            return (<ListGroupItem key ={i}><Todo showTask={singleTask} check={this.props.check} /></ListGroupItem>
            )
        })
        const listLength = listOfTasks.length 
        const message = 'You are all finished for the day. Awesome!'
        const styles = {
            finished:{
                textAlign: 'center', 
                color: '#82E0AA'
            }
        }
        return( 
            <div>
            {listLength > 0 ? <ListGroup>{listOfTasks}</ListGroup> : <h2 style={styles.finished}>{message}</h2>
    //                
            }
         </div> 
        )
    }
}


export default TodoList 