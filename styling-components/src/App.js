import React, {Component} from 'react'; // Class components
//import React, {useState} from 'react';  // Functional components with Hooks
import './App.css';
import Person from'./Person/Person';
import Radium from 'radium';

// Class-based component

class App extends Component {
  state = {
    persons: [
      {id: '342', name: 'Bob', age: 23},
      {id: '123rj', name: 'Randers', age: 25},
      {id: 'qwiu', name: 'Stephanie', age: 22}
    ],
    otherState: "Other",
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    // Get the index of the matching id argument
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Copy the current person at the matched index to a new person object
    const personUpdated = {...this.state.persons[personIndex]};

    // Update the copy's name
    personUpdated.name = event.target.value;

    // Copy the persons arrray to then swap in the updated value
    const personsUpdated = [...this.state.persons];
    personsUpdated[personIndex] = personUpdated;

    // Update the State array
    this.setState( {persons: personsUpdated} );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const p = [...this.state.persons];
    p.splice(index, 1);
    this.setState({persons: p});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: 'solid blue thin',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    // Classes
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hello, I am a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler} >Show People</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);