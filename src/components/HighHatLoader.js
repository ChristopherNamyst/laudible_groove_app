import React, { Component } from 'react';
import { connect } from 'react-redux';

class HighHatLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
      <div className="HighHatLoader">
        <button id="HighHatLoader" type="button">Load</button>
      </div>
  )
}
}



//dont forget to export otherwise, all this is useless!!//
export default HighHatLoader;
