import React, {Component} from 'react'; // Class components
//import React, {useState} from 'react';  // Functional components with Hooks
import styles from './App.module.css'; 
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../Context/auth-context';

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
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedState()', props);
    return state;
  }
  
  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount()');
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

  toggleCockpitHandler = () => {
    const showCock = this.state.showCockpit;
    this.setState({showCockpit: !showCock});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {

    let personsComp = null;

    if(this.state.showPersons) {
      personsComp = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;    
    }

    let cockpitComp = null;
    if(this.state.showCockpit) {
      cockpitComp = (
        <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler} />
        </AuthContext.Provider>)
        
    } else {cockpitComp = null;}

    return (
      <WithClass classes={styles.App}>
        <button onClick={this.toggleCockpitHandler}>Toggle Cockpit</button>
        {cockpitComp}
        {personsComp}
      </WithClass>
    );
  }
}

export default App;