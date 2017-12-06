import React, { Component } from 'react';
import { connect } from "react-redux";
import '../index.css';
import PlayerKicks from './PlayerKicks';
import PlayerHighHats from './PlayerHighHats';
import PlayerClaps from './PlayerClaps';
import PlayerSnares from './PlayerSnares';
import PlayerPercs from './PlayerPercs';
import PlayerSearch from './PlayerSearch';
import Loader from './Loader';


//import Audio from 'react-audioplayer';
//import Sound from 'react-sound';





class App extends Component {
  clicked(){
    console.log("YO man, it worked!!!");
  }
  render() {
    return (
      <div className="App">
        <header>
        <h1>
        Laudible Groove Machine
        </h1>
        </header>
        <container id="buttons">
      <div className="kicks">
        <Loader />
       <PlayerKicks src={this.props.sounds[0]} />
       <PlayerKicks src={this.props.sounds[0]} />
       <PlayerKicks src={this.props.sounds[0]} />
       <PlayerKicks src={this.props.sounds[0]} />
       <PlayerKicks src={this.props.sounds[0]} />
       <PlayerKicks src={this.props.sounds[0]} />
       <PlayerKicks src={this.props.sounds[0]} />
       <PlayerKicks src={this.props.sounds[0]} />


       </div>



       <div className="highhats">
         <Loader />
       <PlayerHighHats src={this.props.sounds[1]} />
       <PlayerHighHats src={this.props.sounds[1]} />
       <PlayerHighHats src={this.props.sounds[1]} />
       <PlayerHighHats src={this.props.sounds[1]} />
       <PlayerHighHats src={this.props.sounds[1]} />
       <PlayerHighHats src={this.props.sounds[1]} />
       <PlayerHighHats src={this.props.sounds[1]} />
       <PlayerHighHats src={this.props.sounds[1]} />


       </div>



       <div className="snares">
         <Loader />
       <PlayerSnares src={this.props.sounds[2]} />
       <PlayerSnares src={this.props.sounds[2]} />
       <PlayerSnares src={this.props.sounds[2]} />
       <PlayerSnares src={this.props.sounds[2]} />
       <PlayerSnares src={this.props.sounds[2]} />
       <PlayerSnares src={this.props.sounds[2]} />
       <PlayerSnares src={this.props.sounds[2]} />
       <PlayerSnares src={this.props.sounds[2]} />

       </div>



       <div className="claps">
         <Loader />
       <PlayerClaps src={this.props.sounds[3]} />
       <PlayerClaps src={this.props.sounds[3]} />
       <PlayerClaps src={this.props.sounds[3]} />
       <PlayerClaps src={this.props.sounds[3]} />
       <PlayerClaps src={this.props.sounds[3]} />
       <PlayerClaps src={this.props.sounds[3]} />
       <PlayerClaps src={this.props.sounds[3]} />
       <PlayerClaps src={this.props.sounds[3]} />

       </div>



       <div className="percs">
         <Loader />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />


       </div>



       <div className="playerSearch">
         <Loader />
       <PlayerSearch src={this.props.sounds[5]} />
       <PlayerSearch src={this.props.sounds[5]} />
       <PlayerSearch src={this.props.sounds[5]} />
       <PlayerSearch src={this.props.sounds[5]} />
       <PlayerSearch src={this.props.sounds[5]} />
       <PlayerSearch src={this.props.sounds[5]} />
       <PlayerSearch src={this.props.sounds[5]} />
       <PlayerSearch src={this.props.sounds[5]} />


       </div>



     </container>


      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
      sounds: state.sounds

    }
}

export default connect(mapStateToProps)(App);
