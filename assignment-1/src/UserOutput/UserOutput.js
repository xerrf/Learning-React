import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
   
    return(
        <div className="userOut">
            <span>{props.username}</span>
            <p>This is the first paragraph.</p>
            <p>And this is the second one.</p>
        </div>
    );
}


export default userOutput;