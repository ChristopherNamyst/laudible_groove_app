import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions';
import { setSound } from '../actions';
import Dropdown, { DropdownButton, MenuItem } from '@trendmicro/react-dropdown';
class KickLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="KickLoader">
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
    <MenuItem eventKey="/kits/kicks/kick_1.wav">kick1</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_2.wav">kick2</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_3.wav">kick3</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_4.wav">kick4</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_5.wav">kick5</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_6.wav">kick6</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_7.wav">kick7</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_8.wav">kick8</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_9.wav">kick9</MenuItem>
    <MenuItem eventKey="/kits/kicks/kick_10.wav">kick10</MenuItem>


</DropdownButton>
    </div>

  )
}
}

const mapActionsToProps = {
  setSound
}





//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(KickLoader);
