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
      {/* <button id="KickLoader" type="button">Load</button> */}
      <DropdownButton
    btnSize="xs"
    title="Load"
    noCaret
    className="load-button"
    dropup
    onSelect={(soundUrl) => {
      this.props.setSound(0, soundUrl)
    }}
>
    <MenuItem eventKey="/kits/snares/snare_1.wav">snare1</MenuItem>
    <MenuItem eventKey="/kits/snares/snare_2.wav">snare2</MenuItem>
    <MenuItem eventKey="/kits/snares/snare_3.wav">snare3</MenuItem>
    <MenuItem eventKey="/kits/snares/snare_4.wav">snare4</MenuItem>
    <MenuItem eventKey="/kits/snares/snare_5.wav">snare5</MenuItem>

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
