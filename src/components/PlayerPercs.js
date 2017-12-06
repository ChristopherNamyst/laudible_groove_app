import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../Actions'//importing my fetchSounds function//






class PlayerPercs extends Component {
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
            <div className="PlayerPercs">
              {
                this.props.src ?
                <button onMouseDown={this.clicked.bind(this)} type="button">perc</button> :
                <button onClick={this.props.fetchSounds.bind(this)} type="button"></button>
              }

            </div>


        );
    }

}

function mapStateToProps(state) {
    return {
      audio: state.audio

    }
}
const mapActionsToProps = {
  fetchSounds
}



//dont forget to export otherwise, all this is useless!!//
export default connect(mapStateToProps,mapActionsToProps)(PlayerPercs);
