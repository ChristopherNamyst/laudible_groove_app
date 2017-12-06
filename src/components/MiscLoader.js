import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'//importing my fetchSounds function//

class MiscLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="MiscLoader">
      <button id="MiscLoader" type="button" onClick={this.props.fetchSounds}>heyo</button>
    </div>

  )
}
}


const mapActionsToProps = {
  fetchSounds
}

//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(MiscLoader);
