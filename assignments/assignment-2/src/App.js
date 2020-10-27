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
    this.setState( {
      length: event.target.value.length,
      word: event.target.value
    } );
  }

  removeCharHanlder = (index) => {
    // Create a copy and make it an array
    console.log(index);

    let stateCopy = {...this.state};
    let wordCopyArr = stateCopy.word.split('');
    console.log("wordCopyArr: " + wordCopyArr);

    // Remove indexed element
    wordCopyArr.splice(index, 1);
    console.log("wordCopyArr: " + wordCopyArr);

    // Rejoin the array into a string
    let newWord = wordCopyArr.join('');
    console.log(newWord);
    let newLength = newWord.length;

    // Update State
    this.setState({word: newWord, length: newLength});
  }

  // Need to change input value on click event and add keys.

  render() {

    let charList = null;
    if (this.state.length > 0) {
      // For each character in word string
      let stateCopy = {...this.state};
      let wordArray = stateCopy.word.split('');
      
      charList = wordArray.map( (char, index) => {
        // Assign a CharComponent
        console.log(char);
        return ( <CharComponent 
          letter={char}
          clicked={() => this.removeCharHanlder(index)} /> );
      });
    } else {charList = null;}
    
    return (
      <div className="App">
        <input type="text"
        onChange={(event) => this.getLength(event)} />
        <p>Length: {this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        <div className="letters">{charList}</div>
      </div>
    );
  }
}

export default App;
