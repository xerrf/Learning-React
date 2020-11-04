import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // Don't need this because there is no state in this component
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedState()', props);
    // return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate()');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate()');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidMount()');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return ( <Person 
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
            );
        });
    }
}

export default Persons;