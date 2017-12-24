const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["freecodecamp", "yo_boy_roy", "rainbow6", "kixstar", "shroud", "break"];
const urlEnd = "?callback=";
// const status = document.getElementsByClassName("stream-container");
//
// console.log(status[0]);

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
        console.log(data.stream.channel.name);
        let stream = document.getElementById(data.stream.channel.name);
        stream.className = "stream-status--online";
        stream.innerHTML = "Online";
        let status = document.getElementById(data.stream.channel.name + "-stream");
        status.innerHTML = data.stream.channel.status;

      }
    })

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })

});
