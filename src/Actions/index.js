import $ from "jquery-ajax";

export function fetchSounds(/*userinput*/) {
    return function(dispatch) {
        dispatch(requestSounds());
        // When working with a full-stack app, we can reach out APIs by just
        // using the URL path. Since it's the same domain, we can leave that off.
        $.get("https://freesound.org/apiv2/search/text/?query=piano&token=mKC2oaFvaFUL48BgaPNoqXAUnqkGgfKxatJCRFke").done(function(data) {
          //get the id from data
          //make the 2nd request using that id
          console.log(data.results[0].id);
          $.get("https://freesound.org/apiv2/sounds/186942/?token=mKC2oaFvaFUL48BgaPNoqXAUnqkGgfKxatJCRFke").done(function(response) {
            // console.log(response.sound.previews["preview-hq-mp3"]);
            console.log(response.previews["preview-hq-mp3"]);
            dispatch(receiveSounds(response.previews["preview-hq-mp3"]));
          });
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
