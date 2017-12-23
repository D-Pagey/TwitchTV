const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["freecodecamp", "yo_boy_roy", "rainbow6", "kixstar", "shroud", "break"];
const urlEnd = "?callback=";
const status = document.getElementsByClassName("stream-status--offline");

// console.log(status);

function extractJson(data) {
  return data.json();
}

user.forEach(function(element) {

const finalUrl = url + element + urlEnd;

  fetch(finalUrl)
    .then(extractJson)
    .then(function(data) {
      console.log(data);
      if (data.stream != null) {
        console.log("online");
        // status[1].className = "stream-status--online";
      }
    })

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })

});
