import React, { Component } from 'react'
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'

import { v4 as uuidv4 } from 'uuid'
import './App.css'
import axios from 'axios'


class App extends Component  {
  state = {
    todos :[] 
  }
//the other lifecycle apart from render componentdidmount
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({ todos: res.data }))
}

//this.state not this.props since we are where the state was defined 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }
  //delete log
  //to copy everything there using the spread operator (three dots)
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    
  }

  //add Todo
  //use spread operator chnage it and make a copy of it 
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
     title: title,
     completed: false 
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data] }))
    
  }
//componentDidMount() method  rounds off the render method then updates the render method so we can output 
//render method is responsible for producing the output of the application
  render(){
  
    return (
      <Router>
          <div className="App">
        <div className="container">
        <Header />
        <Route exact  path = "/" render = {props => (
          <React.Fragment>
               <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo} />
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
       
        </div>
        
      </div>
      </Router>
      
    );

  }
 
}

export default App;
