import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSounds } from '../actions';
import { setSound } from '../actions';
import Dropdown, { DropdownButton, MenuItem } from '@trendmicro/react-dropdown';
class PercLoader extends Component {
  constructor(props) {
      super(props);


}
render() {
  return(
    <div className="PercLoader">

      <DropdownButton
    btnSize="xs"
    title="Load"
    noCaret
    className="load-button"
    dropup
    onSelect={(soundUrl) => {
      this.props.setSound(4, soundUrl)
    }}
>
    <MenuItem eventKey="/kits/perc/perc_1.wav">perc1</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_2.wav">perc2</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_3.wav">perc3</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_4.wav">perc4</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_5.wav">perc5</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_6.wav">perc6</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_7.wav">perc7</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_8.wav">perc8</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_9.wav">perc9</MenuItem>
    <MenuItem eventKey="/kits/perc/perc_10.wav">perc10</MenuItem>

</DropdownButton>
    </div>

  )
}
}

const mapActionsToProps = {
  setSound
}





//dont forget to export otherwise, all this is useless!!//
export default connect(null,mapActionsToProps)(PercLoader);
