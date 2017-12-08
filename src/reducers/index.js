const INITIAL_STATE = {
  // currently assigned sounds
  sounds: [
    "/kits/kicks/kick_1.wav", // 0 - sound for kick track
    "/kits/claps/clap_2.wav", // 1 - sound for the clap track
    "/kits/hh/hh_3.wav",
    "/kits/snare/snare_4.wav",
    "/kits/perc/perc_5.wav",
    null
  ]


}

//Basic template for a reducer....it will change later in project//
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "SET_SOUND":
          const newSounds = state.sounds.slice(0)
          newSounds[action.index] = action.sound
          return Object.assign({}, state, {
            sounds: newSounds

          });

        default:
            return state;
    }
}
