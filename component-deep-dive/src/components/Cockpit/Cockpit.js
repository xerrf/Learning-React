import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    // Classes
    const assignedClasses = [];
    if(props.persons.length <= 2) {
        assignedClasses.push(styles.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    let btnClass = ''
    if (props.showPersons) {
        btnClass = styles.Red;
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass}
            onClick={props.clicked}>
            Show People
            </button>
        </div>
    );
};

export default cockpit;