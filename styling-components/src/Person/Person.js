import React from 'react';
import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';


const StyledDiv = styled.div`
    width: 40%;
    margin: 1em auto;
    box-shadow: 0px 2px 3px #ccc;
    border: thin solid #eee;
    padding: 16px;
    text-align: center; 

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

export default person;
//export default Radium(person);





