import $ from "jquery-ajax";

export function fetchSounds(userInput/*userinput*/) {
    return function(dispatch) {

      // ask the user for a sound search term
      var userInput = prompt("Search for a new sound");
      if( userInput )

        dispatch(requestSounds());
        // When working with a full-stack app, we can reach out APIs by just
        // using the URL path. Since it's the same domain, we can leave that off.
        $.get("https://freesound.org/apiv2/search/text/?query="+userInput+"&token=mKC2oaFvaFUL48BgaPNoqXAUnqkGgfKxatJCRFke").done(function(data) {
          //get the id from data
          //make the 2nd request using that id
          dispatch(receiveSounds(data.results[0].id));
          console.log(data.results[0].id);
    
        });
    };
}

function requestSounds() {
    return {
        type: "REQUEST_SOUNDS"
    };
}

function receiveSounds(sounds) {
    return {
        type: "RECEIVE_SOUNDS",
        sounds
    };
}
