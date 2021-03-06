import React, {Component} from 'react'; // Class components
//import React, {useState} from 'react';  // Functional components with Hooks
import styles from './App.module.css';
import Person from'./Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

    let persons = null;

    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}>
            <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
            </ErrorBoundary>
        })}
        </div>
      );
      btnClass = styles.Red;
    }

    // Classes
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hello, I am a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button className={btnClass}
        onClick={this.togglePersonHandler}>
          Show People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;