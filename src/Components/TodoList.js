import React, { Component } from 'react';
import Todo from './Todo'
import '../App.css'
import {ListGroup, ListGroupItem, Button, ButtonGroup, Badge} from 'reactstrap'
class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            listSelected: 'All',
            count: 0
        }
    }
    selectList = (type) => {
        this.setState({
            listSelected: type
        })
    }
    render() {
        const {list} = this.props
        const {listSelected} = this.state
        let listType

        listSelected === 'Complete' &&
        (listType = list.filter((task)=>{return task.isChecked === true}))
        
        listSelected === 'Active' && 
        (listType = list.filter((task)=>{return task.isChecked === false}))
        
        listSelected === 'All' && 
        (listType = list)
        const listOfTasks = listType.map((task, i) => {
            return (<ListGroupItem key ={i}><Todo showTask={task} check={this.props.check} /></ListGroupItem>
            )
        })
        const active = list.reduce((accumulator,current)=>{return accumulator + !current.isChecked},0)
        const complete = list.reduce((accumulator, current)=> {return accumulator + current.isChecked},0)
        const listLength = listOfTasks.length 
        const message = 'You are all finished for the day. Awesome!'
        const styles = {
            finished:{
                textAlign: 'center', 
                color: '#82E0AA'
            },
            center: {
                textAlign: 'center',
                display: 'inherit'}
        }
        
        
        return( 
            <div><ButtonGroup style={styles.center}>
                <Button color="primary" onClick={()=> this.selectList('All')}>All <Badge color="light">{list.length}</Badge></Button>
                <Button color="danger" onClick={()=>this.selectList('Active')}>Active <Badge color="light">{active}</Badge></Button>
                <Button color="success" onClick={()=>this.selectList('Complete')}>Complete <Badge color="light">{complete}</Badge></Button>
                </ButtonGroup>
               
                {listLength === 0 && listSelected === 'Active' ? <h2 style={styles.finished}>{message}</h2> : <ListGroup>{listOfTasks}</ListGroup> 
            }
         </div> 
        )
    }
}


export default TodoList 