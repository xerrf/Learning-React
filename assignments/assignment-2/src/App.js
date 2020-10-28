import './App.css';
import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    length: 0,
    word: ''
  }

  getLength = (event) => {
    // Update state
    this.setState( {
      length: event.target.value.length,
      word: event.target.value
    } );
  }

  removeCharHanlder = (index) => {
    // Create a copy and make it an array

    let stateCopy = {...this.state};
    let wordCopyArr = stateCopy.word.split('');

    // Remove indexed element
    wordCopyArr.splice(index, 1);

    // Rejoin the array into a string
    let newWord = wordCopyArr.join('');
    let newLength = newWord.length;

    // Update State
    this.setState({word: newWord, length: newLength});
  }

  // Need to add keys.

  render() {

    let charList = null;
    if (this.state.length > 0) {
      // For each character in word string
      let stateCopy = {...this.state};
      let wordArray = stateCopy.word.split('');
      
      charList = wordArray.map( (char, index) => {
        // Assign a CharComponent
        return ( <CharComponent 
          letter={char}
          clicked={() => this.removeCharHanlder(index)}
          key={index} /> );
      });
    } else {charList = null;}
    
    return (
      <div className="App">
        <input type="text"
        value={this.state.word}
        onChange={(event) => this.getLength(event)} />
        <p>Length: {this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        <div className="letters">{charList}</div>
      </div>
    );
  }
}

export default App;