import React, { Component } from 'react';
import { connect } from "react-redux";
import PlayerKicks from './PlayerKicks';
import PlayerHighHats from './PlayerHighHats';
import PlayerClaps from './PlayerClaps';
import PlayerSnares from './PlayerSnares';
import PlayerPercs from './PlayerPercs';
import PlayerMisc from './PlayerMisc';
import PercLoader from './PercLoader';
import KickLoader from './KickLoader';
import HighHatLoader from './HighHatLoader';
import SnareLoader from './SnareLoader';
import ClapLoader from './ClapLoader';
import MiscLoader from './MiscLoader';
import TempoSlider from './TempoSlider';
import PlayButton from './PlayButton';
import StopButton from './StopButton';

import '../index.css';

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
        <KickLoader />
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
         <HighHatLoader />
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
         <SnareLoader />
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
         <ClapLoader />
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
         <PercLoader />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />
       <PlayerPercs src={this.props.sounds[4]} />


       </div>



       <div className="playerMisc">

       <PlayerMisc src={this.props.sounds[5]} />
       <PlayerMisc src={this.props.sounds[5]} />
       <PlayerMisc src={this.props.sounds[5]} />
       <PlayerMisc src={this.props.sounds[5]} />
       <PlayerMisc src={this.props.sounds[5]} />
       <PlayerMisc src={this.props.sounds[5]} />
       <PlayerMisc src={this.props.sounds[5]} />
       <PlayerMisc src={this.props.sounds[5]} />
       <MiscLoader />
      </div>
      </container>

     <PlayButton />
     <StopButton />

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
