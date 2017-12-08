import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
      super(props);
      this.audio = new Audio();
  }


  clicked(){
    this.audio.play()
    //console.log("Hey I worked!");

  };

    render() {
        this.audio.src = this.props.src;
        return (
            <div className="Player">
                <button id="Buttons" onMouseDown={this.clicked.bind(this)} type="button">{this.props.label}</button>
            </div>


        );
    }

}




//dont forget to export otherwise, all this is useless!!//
export default Player;
