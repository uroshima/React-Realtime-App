import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import SockJS from 'sockjs-client';

class App extends Component {
  constructor(props) {
    super(props)

    var sock = new SockJS('https://mydomain.com/my_prefix');
    sock.onopen = function() {
        console.log('open');
    };

    sock.onmessage = function(e) {
        console.log('message', e.data);
    };

    sock.onclose = function() {
        console.log('close');
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Chat />
      </div>
    );
  }
}

export default App;
