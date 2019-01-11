import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    projects: [],
    actions: [],
  }

  componentDidMount() {
    axios('http://localhost:8000/projects')
    .then(projects => this.setState({projects: projects.data}))
    .catch(err => console.log(err));

    axios('http://localhost:8000/actions')
    .then(actions => this.setState({actions: actions.data}))
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.projects)
    return (
      <div className="App">
        {this.state.projects.map(project => {
          return (
            <React.Fragment key = {project.id}>
              <h1>name: {project.name}</h1>
              <h3>description: {project.description}</h3>
            </React.Fragment>
          )
        })}

        {this.state.actions.map(action => {
          return (
            <React.Fragment key = {action.id}>
              <h4>notes: {action.notes}</h4>
              <h4>description: {action.description}</h4>
            </React.Fragment>
          )
        })}
      </div>
    );
  }
}

export default App;
