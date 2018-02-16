import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList'
import NewTask from './Components/NewTask'

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [{
        task: 'First task',
        isChecked: false 
      }, {
        task: 'Sup',
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
      <div>
        <h1>To-Do List </h1>
        <NewTask addNewInput={this.updateList} list={this.state.list}/>
        <div>
          <button onClick={this.deleteComplete}>Clear</button>
        </div>
        <TodoList list = {this.state.list } check= {this.checkCompletion}/>
        </div>
    );
  }
}

export default App;
