import React from 'react';

const CharComponent = (props) => {

    const letterStyle = {
        display: 'inline-block',
        backgroundColor: 'black',
        color: 'white',
        padding: '16px',
        textAlign: 'center',
        margin: '16px'
    }

    return (
        <span 
        style={letterStyle}
        onClick={props.clicked}>{props.letter}</span>
    );
}

export default CharComponent;