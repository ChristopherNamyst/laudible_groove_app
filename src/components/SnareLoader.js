import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions';
import { setSound } from '../actions';
import Dropdown, { DropdownButton, MenuItem } from '@trendmicro/react-dropdown';
class SnareLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="SnareLoader">

      <DropdownButton
    btnSize="xs"
    title="Load"
    noCaret
    className="load-button"
    dropup
    onSelect={(soundUrl) => {
      this.props.setSound(2, soundUrl)
    }}
>
    <MenuItem eventKey="/kits/snare/snare_1.wav">snare1</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_2.wav">snare2</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_3.wav">snare3</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_4.wav">snare4</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_5.wav">snare5</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_6.wav">snare6</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_7.wav">snare7</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_8.wav">snare8</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_9.wav">snare9</MenuItem>
    <MenuItem eventKey="/kits/snare/snare_10.wav">snare10</MenuItem>

</DropdownButton>
    </div>

  )
}
}

const mapActionsToProps = {
  setSound
}





//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(SnareLoader);
