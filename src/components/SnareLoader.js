import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'//importing my fetchSounds function//

class SnareLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="SnareLoader">
      <button id="SnareLoader" type="button">Load</button>
    </div>

  )
}
}

//dont forget to export otherwise, all this is useless!!//
export default SnareLoader;
