import React, { Component } from 'react';
import { connect } from 'react-redux';


class PercLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="PercLoader">
      <button id="PercLoader" type="button">Load</button>
    </div>

  )
}
}

//dont forget to export otherwise, all this is useless!!//
export default PercLoader;
