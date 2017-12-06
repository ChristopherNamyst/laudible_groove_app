import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'

class PlayButton extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="PlayButton">
      <button id="playButton" type="button">play</button>
    </div>

  )
}
}

export default PlayButton;
