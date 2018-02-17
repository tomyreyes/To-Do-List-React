import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList'
import NewTask from './Components/NewTask'
import {Button, ListGroup} from 'reactstrap'

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [{
        task: 'Learn React',
        isChecked: false 
      }, {
        task: 'Cry for a bit',
        isChecked: false
      }]
    }
  }

  updateList = (inputTask) => {
    this.setState({
      list: this.state.list.concat(inputTask)
    })
  }

  checkCompletion = (completedTask) =>{
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
    let incompleteList = this.state.list 
      incompleteList = incompleteList.filter((item)=>{
      return (item.isChecked === false) 
    })
    this.setState({
      list: incompleteList
    })
    }

  render() {
    return (
      <div className="container">
        <div className="todoList">
          <h1>To-Do List </h1>
          </div>
          <TodoList list={this.state.list} check={this.checkCompletion} />
        <div className="inputBar">
          <NewTask addNewInput={this.updateList} list={this.state.list}/>
          <Button color="danger" onClick={this.deleteComplete}>Clear</Button>
        </div>
          {/* <TodoList list = {this.state.list } check= {this.checkCompletion}/> */}
        </div>
    );
  }
}

export default App;
