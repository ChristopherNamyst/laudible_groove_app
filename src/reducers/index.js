const INITIAL_STATE = {
  sounds: [
    "/kits/kicks/kick_1.wav",
    "/kits/claps/clap_2.wav",
    "/kits/hh/hh_3.wav",
    "/kits/snare/snare_4.wav",
    "/kits/perc/perc_5.wav",
    null
  ],


  kickArray: [
    "/kits/kicks/kick_1.wav",
    "/kits/kicks/kick_2.wav",
    "/kits/kicks/kick_3.wav",
    "/kits/kicks/kick_4.wav",
    "/kits/kicks/kick_5.wav",
    "/kits/kicks/kick_6.wav",
    "/kits/kicks/kick_7.wav",
    "/kits/kicks/kick_8.wav",
    "/kits/kicks/kick_9.wav",
    "/kits/kicks/kick_10.wav"

  ],

  highHats: [
    "/kits/hh/hh_1.wav",
    "/kits/hh/hh_2.wav",
    "/kits/hh/hh_3.wav",
    "/kits/hh/hh_4.wav",
    "/kits/hh/hh_5.wav",
    "/kits/hh/hh_6.wav",
    "/kits/hh/hh_7.wav",
    "/kits/hh/hh_8.wav",
    "/kits/hh/hh_9.wav",
    "/kits/hh/hh_10.wav",

  ],

  claps: [
    "/kits/claps/claps_1.wav",
    "/kits/claps/claps_2.wav",
    "/kits/claps/claps_3.wav",
    "/kits/claps/claps_4.wav",
    "/kits/claps/claps_5.wav",
    "/kits/claps/claps_6.wav",
    "/kits/claps/claps_7.wav",
    "/kits/claps/claps_8.wav",
    "/kits/claps/claps_9.wav",
    "/kits/claps/claps_10.wav",

  ],

}

//Basic template for a reducer....it will change later in project//
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "RECEIVE_SOUND":
          const newSounds = state.sounds.slice(0)
          newSounds[5] = action.sound
          return Object.assign({}, state, {
            sounds: newSounds

          });

        default:
            return state;
    }
}
