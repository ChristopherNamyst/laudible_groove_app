import React, { Component } from 'react';
import './App.css';
import Player from './Player';
//import Audio from 'react-audioplayer';
//import Sound from 'react-sound';





class App extends Component {
  clicked(){
    console.log("YO man, it worked!!!");
  }
  render() {
    return (
      <div className="App">
        <h1>
        Laudible Groove Machine
        </h1>
        {/* <audio id="kick1" src="/kits/kicks/kick_1.wav" preload="auto"></audio> */}
        <Player />
      </div>
    );
  }
}

export default App;
