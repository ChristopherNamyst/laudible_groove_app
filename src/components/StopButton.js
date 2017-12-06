import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'

class StopButton extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="StopButton">
      <button id="StopButton" type="button">stop</button>
    </div>

  )
}
}

export default StopButton;
