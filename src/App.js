import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList'
import NewTask from './Components/NewTask'
import {Button, ListGroup, Jumbotron} from 'reactstrap'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
  }

  updateList = (inputTask) => {
    axios.post('http://localhost:8080/addtask', {
      task: inputTask.task
    })
      .then((response) => {
        axios.get('http://localhost:8080/task')
          .then((res) => {
            this.setState({
              list: res.data
            })
          })
        if (response.data.success) {
          console.log('task sent.')
        }
      })
}
  

  checkCompletion = (completedTask) =>{
    axios.put('http://localhost:8080/update', {
      _id: completedTask._id,
      isChecked: !completedTask.isChecked
    })
      .then((response) => {
        console.log(response)
        if (response.data.success) {
          console.log('updated')
        }
      })
    let updatedList = this.state.list 
    updatedList = updatedList.map((eachTask)=>{
      if (eachTask === completedTask) {
       eachTask.isChecked = !eachTask.isChecked
      }
      return eachTask 
    })
    this.setState({
      list: updatedList 
    })
  }
  
  deleteComplete = () => {
    axios.delete('http://localhost:8080/deletetask', {
    })
      .then((response) => {
        if (response.data.success) {
        }
      })

    let incompleteList = this.state.list 
      incompleteList = incompleteList.filter((item)=>{
      return (item.isChecked === false) 
    })
   
    this.setState({
      list: incompleteList
    })
    }
  componentDidMount() {
    axios.get('http://localhost:8080/task')
      .then((res) => {
        this.setState({
          list: res.data
        })
      })
  }
  render() {
    return (
      <div className="container">
        <div className="todoList">
          <header className="App-header">
          <h1>To-Do List </h1>
          </header>
          </div>
        <Jumbotron>
          <TodoList list={this.state.list} check={this.checkCompletion} />
        <div className="inputBar">
          <NewTask addNewInput={this.updateList} list={this.state.list}/>
          <Button color="danger" onClick={this.deleteComplete}>Clear</Button>
          
        </div>
        </Jumbotron>
        </div>
    );
  }
}

export default App;
