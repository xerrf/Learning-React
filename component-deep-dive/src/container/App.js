import React, {Component} from 'react'; // Class components
//import React, {useState} from 'react';  // Functional components with Hooks
import styles from './App.module.css'; 
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// Class-based component

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }

  state = {
    persons: [
      {id: '342', name: 'Bob', age: 23},
      {id: '123rj', name: 'Randers', age: 25},
      {id: 'qwiu', name: 'Stephanie', age: 22}
    ],
    otherState: "Other",
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedState()', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount()');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate()');
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

    let personsComp = null;

    if(this.state.showPersons) {
      personsComp = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;    
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {personsComp}
      </div>
    );
  }
}

export default App;