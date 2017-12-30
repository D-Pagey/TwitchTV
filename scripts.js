const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["freecodecamp", "macie_jay", "yo_boy_roy", "rainbow6", "p4wnyhof", "tsm_viss", "edberg"];
const urlEnd = "?callback=";

function extractJson(data) {
  return data.json();
}

function displayInfo(data) {
  const stream = document.getElementById(data.stream.channel.name);
  const status = document.getElementById(data.stream.channel.name + "-stream");
  const div = document.getElementById(data.stream.channel.name + "-div")

  if (data.stream) {
    console.log(data);

    stream.className = "stream-status-online";
    stream.innerHTML = "Online";

    const link = document.createElement('a');
    link.href = data.stream.channel.url;
    link.target = "_blank";
    link.className = "stream-link";

    status.innerHTML = data.stream.channel.status.slice(0, 27) + "...";
    status.className = "stream-description-online";
    link.appendChild(status);
    div.insertBefore(link, stream);
  }
}

// Fetch each channels stream data
user.forEach(function(element) {

const finalUrl = url + element + urlEnd;

  fetch(finalUrl)
    .then(extractJson)
    .then(function(data) {
      displayInfo(data);
    })

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })

});
