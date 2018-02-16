import React, { Component } from 'react';
import './App.css';


//1)
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

  updateList = (taskFromNewTask) => {
    this.setState({
      list: this.state.list.concat(taskFromNewTask)
    })
  }

  clearTask = (completedTask) =>{
    let updatedList = this.state.list 
    
    updatedList = updatedList.map((eachItem)=>{
      if (eachItem === completedTask) {
       eachItem.isChecked = !eachItem.isChecked
      }
      return eachItem 
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
        <TodoList list = {this.state.list } clear= {this.clearTask}/>
        
        </div>
    );
  }
}



//2)
class TodoList extends Component {
  render(){
    let listedItems = this.props.list.map((singleItem,i) => {
      return (<Todo key={i} showTask={singleItem} clear ={this.props.clear}  /> 
      )
    })
    return (
      <div>{listedItems}</div>
    )
  }
}

//3)
class NewTask extends Component {
  constructor(){
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
  }
  updateTask = (e) => {
    this.setState({
      task: e.target.value
    })
  }
  render(){
    return <div>
      <input type="text" onChange={this.updateTask} value={this.state.task} placeholder="Enter new task" />
      <button onClick={this.addTask}>Add</button>
      </div>
  }
}


//4)
class Todo extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isChecked: this.props.showTask.isChecked
    } 
  }

  checked = () =>{
    this.setState((prevState) =>({
    isChecked: prevState.isChecked 
    }))
    this.props.clear(this.props.showTask)  
  }

  render(){
    let {task} = this.props.showTask 
    return(
     <div>
       <span>{task}</span>
       <input type="checkbox" checked={this.props.showTask.isChecked} onChange={this.checked}/>
       </div>
    )
  }
}



export default App;
