const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["xbox_alive", "freecodecamp", "yo_boy_roy", "rainbow6", "starladder_cs_en"];
const urlEnd = "?callback=?";
const test = url + user[0] + urlEnd;

fetch(test)
  // .then((resp) => resp.json())
  .then(function(data) {
    console.log(data);
    })
