import $ from "jquery-ajax";

export function fetchSounds(userInput) {
    return function(dispatch) {

      // ask the user for a sound search term
      var userInput = prompt("Search for a new sound");
      

        dispatch(requestSounds());
        // When working with a full-stack app, we can reach out APIs by just
        // using the URL path. Since it's the same domain, we can leave that off.
        $.get("https://freesound.org/apiv2/search/text/?query="+userInput+
        "&token=mKC2oaFvaFUL48BgaPNoqXAUnqkGgfKxatJCRFke").done(function(data) {
          //get the id from data
          const soundId = data.results[0].id;
          //make the 2nd request using that id
          $.get("https://freesound.org/apiv2/sounds/" + soundId + "/?token=mKC2oaFvaFUL48BgaPNoqXAUnqkGgfKxatJCRFke")
          .done(function(response) {
            // console.log(response.sound.previews["preview-hq-mp3"]);
            console.log(response.previews["preview-hq-mp3"]);
           dispatch(receiveSound(response.previews["preview-hq-mp3"]));
          });
        });
    };
}

function requestSounds() {
    return {
        type: "REQUEST_SOUNDS"
    };
}

function receiveSound(sound) {
    return {
        type: "RECEIVE_SOUND",
        sound
    };
}
