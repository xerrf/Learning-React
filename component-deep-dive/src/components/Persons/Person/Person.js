import React, {Component } from 'react';
import styles from './Person.module.css';
import AuthContext from '../../../Context/auth-context';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <WithClass classes={styles.Person}>
                {this.context.authenticated ? <p>authenticated</p> : <p>Please log in</p>}
                
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </WithClass>
        )
    }
}   

export default Person;





