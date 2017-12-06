import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'//importing my fetchSounds function//

class HighHatLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="HighHatLoader">
      <button id="HighHatLoader" type="button" onClick={this.props.fetchSounds}>Load</button>
    </div>

  )
}
}

const mapActionsToProps = {
  fetchSounds
}

//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(HighHatLoader);
