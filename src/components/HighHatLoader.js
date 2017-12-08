import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions';
import { setSound } from '../actions';
import Dropdown, { DropdownButton, MenuItem } from '@trendmicro/react-dropdown';
class HighHatLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="HighHatLoader">
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
    <MenuItem eventKey="/kits/hh/hh_1.wav">hh1</MenuItem>
    <MenuItem eventKey="/kits/hh/hh_2.wav">hh2</MenuItem>
    <MenuItem eventKey="/kits/hh/hh_3.wav">hh3</MenuItem>
    <MenuItem eventKey="/kits/hh/hh_4.wav">hh4</MenuItem>
    <MenuItem eventKey="/kits/hh/hh_5.wav">hh5</MenuItem>

</DropdownButton>
    </div>

  )
}
}

const mapActionsToProps = {
  setSound
}





//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(HighHatLoader);
