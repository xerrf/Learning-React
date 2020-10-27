import React, { Component } from 'react';
import './UserInput.css';

const userInput = (props) => {
    return(
        <div className="userIn">
            <label for="userName">Input Username:</label>
            <input id="userName" type="text" onChange={props.changed} value={props.value} />
        </div>
    
    );
}

export default userInput;