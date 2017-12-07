import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'//importing my fetchSounds function//

class KickLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="KickLoader">
      <button id="KickLoader" type="button">Load</button>
    </div>

  )
}
}


//dont forget to export otherwise, all this is useless!!//
export default KickLoader;
