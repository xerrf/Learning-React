import React from 'react';


const ValidationComponent = (props) => {

    let validation = "Too short";
    if (props.length < 3) { validation = "Too short"; }
    else if (props.length >= 3 && props.length <10) { validation = "That is a nice length"; }
    else { validation = "That is pretty long"; }

    return (
        <p>{validation}</p>
    );
}

export default ValidationComponent;