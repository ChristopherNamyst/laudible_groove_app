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
      <button id="SnareLoader" type="button" onClick={this.props.fetchSounds}>Load</button>
    </div>

  )
}
}

const mapActionsToProps = {
  fetchSounds
}

//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(SnareLoader);
