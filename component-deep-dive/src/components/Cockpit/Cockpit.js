import React, {useEffect, useRef, useContext} from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../Context/auth-context';

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect ( () => {
        toggleButtonRef.current.click();
        // console.log('[Cockpit.js] useEffect()');

        // setTimeout(() => {
        //     alert('Set data to cload.');
        // }, 1000);
        return () => {
            console.log('[Cockpit.js] clean up in useEffect()');
        }
    }, []);

    // Classes
    const assignedClasses = [];
    if(props.personsLength <= 2) {
        assignedClasses.push(styles.red);
    }
    if (props.personsLength <= 1) {
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
            ref={toggleButtonRef}
            onClick={props.clicked}>
            Show People
            </button> 
            <button onClick={authContext.login}>Log In</button>
            
        </div>
    );
};

export default React.memo(Cockpit);