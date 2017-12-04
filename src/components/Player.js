import React, { Component } from 'react';
import { connect } from 'react-redux';





class Player extends Component {
  constructor(props) {
      super(props);
      this.audio = new Audio();
      this.audio.src = "/kits/kicks/kick_1.wav";

  }


  clicked(){
    this.audio.play()
    console.log("Hey I worked!");

  };

    render() {
        return (

            <div className="Player">
              <button onClick={this.clicked.bind(this)} type="button">Click Me!</button>


            </div>
        );
    }

}
function mapStateToProps(state) {
    return {

    }
}




//dont forget to export otherwise, all this is useless!!//
export default connect(mapStateToProps)(Player);
