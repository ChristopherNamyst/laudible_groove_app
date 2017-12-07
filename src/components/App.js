import React, { Component } from 'react';
import { connect } from "react-redux";

import Player from './Player';
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
       <Player label="kick" src={this.props.sounds[0]} />
       <Player label="kick" src={this.props.sounds[0]} />
       <Player label="kick" src={this.props.sounds[0]} />
       <Player label="kick" src={this.props.sounds[0]} />
       <Player label="kick" src={this.props.sounds[0]} />
       <Player label="kick" src={this.props.sounds[0]} />
       <Player label="kick" src={this.props.sounds[0]} />
       <Player label="kick" src={this.props.sounds[0]} />


       </div>



       <div className="highhats">
         <HighHatLoader />
       <Player label="High Hat" src={this.props.sounds[1]} />
       <Player label="High Hat" src={this.props.sounds[1]} />
       <Player label="High Hat" src={this.props.sounds[1]} />
       <Player label="High Hat" src={this.props.sounds[1]} />
       <Player label="High Hat" src={this.props.sounds[1]} />
       <Player label="High Hat" src={this.props.sounds[1]} />
       <Player label="High Hat" src={this.props.sounds[1]} />
       <Player label="High Hat" src={this.props.sounds[1]} />


       </div>



       <div className="snares">
         <SnareLoader />
       <Player label="snare" src={this.props.sounds[2]} />
       <Player label="snare" src={this.props.sounds[2]} />
       <Player label="snare" src={this.props.sounds[2]} />
       <Player label="snare" src={this.props.sounds[2]} />
       <Player label="snare" src={this.props.sounds[2]} />
       <Player label="snare" src={this.props.sounds[2]} />
       <Player label="snare" src={this.props.sounds[2]} />
       <Player label="snare" src={this.props.sounds[2]} />

       </div>



       <div className="claps">
         <ClapLoader />
       <Player label="clap" src={this.props.sounds[3]} />
       <Player label="clap" src={this.props.sounds[3]} />
       <Player label="clap" src={this.props.sounds[3]} />
       <Player label="clap" src={this.props.sounds[3]} />
       <Player label="clap" src={this.props.sounds[3]} />
       <Player label="clap" src={this.props.sounds[3]} />
       <Player label="clap" src={this.props.sounds[3]} />
       <Player label="clap" src={this.props.sounds[3]} />
       </div>



       <div className="percs">
         <PercLoader />
       <Player label="perc" src={this.props.sounds[4]} />
       <Player label="perc" src={this.props.sounds[4]} />
       <Player label="perc" src={this.props.sounds[4]} />
       <Player label="perc" src={this.props.sounds[4]} />
       <Player label="perc" src={this.props.sounds[4]} />
       <Player label="perc" src={this.props.sounds[4]} />
       <Player label="perc" src={this.props.sounds[4]} />
       <Player label="perc" src={this.props.sounds[4]} />


       </div>



       <div className="playerMisc">

       <Player label="misc" src={this.props.sounds[5]} />
       <Player label="misc" src={this.props.sounds[5]} />
       <Player label="misc" src={this.props.sounds[5]} />
       <Player label="misc" src={this.props.sounds[5]} />
       <Player label="misc" src={this.props.sounds[5]} />
       <Player label="misc" src={this.props.sounds[5]} />
       <Player label="misc" src={this.props.sounds[5]} />
       <Player label="misc" src={this.props.sounds[5]} />
       <MiscLoader />
      </div>
      </container>

     {/* <PlayButton />
     <StopButton /> */}

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
