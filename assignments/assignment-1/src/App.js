import './App.css';
import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    usernames: [
      {username: "xerrf"},
      {username: "sirjeebs"},
      {username: "journeyprime"}
    ]
  }

  overwriteUsernameHandler = (event) => {
    this.setState( {
      usernames: [
        {username: event.target.value},
        {username: "sirjeebs"},
        {username: "journeyprime"}
      ]
    } )
  }

  render() {
    const outputContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
    return (
      <div className="App">
        <UserInput changed={this.overwriteUsernameHandler} value={this.state.usernames[0].username}/>
        <div style={outputContainer}>
          <UserOutput username={this.state.usernames[0].username} />
          <UserOutput username={this.state.usernames[1].username} />
          <UserOutput username={this.state.usernames[2].username} />
        </div>
        
      </div>
    );
  }
}

export default App;
