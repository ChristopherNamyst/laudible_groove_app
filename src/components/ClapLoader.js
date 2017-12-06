import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions'//importing my fetchSounds function//

class ClapLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="ClapLoader">
      {
        this.props.src ?
        <button id="ClapLoader" onMouseDown={this.clicked.bind(this)} type="button">clap</button> :
        <button id="ClapLoader" onClick={this.props.fetchSounds.bind(this)} type="button">Load</button>
      }

    </div>
  )
}
}

const mapActionsToProps = {
  fetchSounds
}

//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(ClapLoader);
