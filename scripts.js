const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["xbox_alive", "freecodecamp", "yo_boy_roy", "rainbow6", "starladder_cs_en", "break"];
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
