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
    let quotes = [
      'You miss 100% of the shots you don\'t take.',
      'Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward. It’s how much you can take, and keep moving forward. That’s how winning is done',
      'All we have to decide is what to do with the time that is given to us.',
      'Some people can’t believe in themselves until someone else believes in them first.',
      'Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.',
      'What we do in life echoes in eternity.',
      'I know what I have to do now. I’ve got to keep breathing because tomorrow the sun will rise. Who knows what the tide could bring?',
      'They make take our lives, but they\'ll never take our freedom.',
      'Get busy livin’, or get busy dyin.',
      'For Frodo.',
      'It\'s the job that\s never started that takes the longest to finish.',
      'Even the smallest person can change the course of the future.',
      'Never forget what you are. Wear it like armor, and it can never be used against you.',
      'The Lannisters send their regards.',
      'Send code.',
      'Can you slack the code?'
    ]

    let names = ['Kenneth Koh', 'Phill Craig', 'LeBron James', 'Eugene Yu', 'Keanu Reeves', 'Tom Cruise', 'Devashish Shrestha', 'Anthony Wong', 'Jonathan Bluks', 'Lidong Li', 'Annie Ng', 'Sandra Illi', 'Bruna Garcia', 'Nic Tamura', 'Tomy Reyes']

    let randomQuote = Math.floor(Math.random() * quotes.length)
    let randomName = Math.floor(Math.random() * names.length)
    const styles = {
      quote: {
        fontStyle: 'italic'
      }
    }

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
        <h3 style={styles.quote}> "{quotes[randomQuote]}"</h3>
        <h6>-{names[randomName]}</h6>
        </div>
    );
  }
}

export default App;
