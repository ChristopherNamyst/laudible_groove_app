import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClapLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="ClapLoader">
        <button id="ClapLoader" type="button">Load</button>




    </div>
  )
}
}


//dont forget to export otherwise, all this is useless!!//
export default ClapLoader;
