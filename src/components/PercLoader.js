import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'//importing my fetchSounds function//

class PercLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="PercLoader">
      <button id="PercLoader" type="button" onClick={this.props.fetchSounds}>Load</button>
    </div>

  )
}
}

const mapActionsToProps = {
  fetchSounds
}

//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(PercLoader);
