const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["freecodecamp", "yo_boy_roy", "rainbow6", "kixstar", "shroud", "break"];
const urlEnd = "?callback=";
const test = url + user[5] + urlEnd;

function extractJson(data) {
  return data.json();
}

fetch(test)
  .then(extractJson)
  .then(function(data) {
    console.log(data);
  })

  .catch(function(error) {
    console.log("Something went wrong " + error);
  })

/*
- If online then changed offline to online
*/

const status = document.getElementsByClassName("stream-status");

function changeStatus() {
    status[1].innerHTML = "Online";
}

changeStatus();
