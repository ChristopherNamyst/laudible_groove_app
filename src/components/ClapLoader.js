import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions';
import { setSound } from '../actions';
import Dropdown, { DropdownButton, MenuItem } from '@trendmicro/react-dropdown';
class ClapLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="ClapLoader">
      
      <DropdownButton
    btnSize="xs"
    title="Load"
    noCaret
    className="load-button"
    dropup
    onSelect={(soundUrl) => {
      this.props.setSound(3, soundUrl)
    }}
>
    <MenuItem eventKey="/kits/claps/clap_1.wav">clap1</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_2.wav">clap2</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_3.wav">clap3</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_4.wav">clap4</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_5.wav">clap5</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_6.wav">clap6</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_7.wav">clap7</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_8.wav">clap8</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_9.wav">clap9</MenuItem>
    <MenuItem eventKey="/kits/claps/clap_10.wav">clap10</MenuItem>


</DropdownButton>
    </div>

  )
}
}

const mapActionsToProps = {
  setSound
}





//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(ClapLoader);
