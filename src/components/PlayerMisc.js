import React, { Component } from 'react';

class PlayerMisc extends Component {
  constructor(props) {
      super(props);
      this.audio = new Audio();
  }


  clicked(){
    this.audio.play()
    console.log("Hey I worked!");

  };

    render() {
        this.audio.src = this.props.src;
        return (
            <div className="PlayerMisc">
                <button id="miscButtons" onMouseDown={this.clicked.bind(this)} type="button">misc</button> 
            </div>


        );
    }

}




//dont forget to export otherwise, all this is useless!!//
export default PlayerMisc;
