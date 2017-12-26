const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["freecodecamp", "yo_boy_roy", "silentsentry", "shroud", "macie_jay", "scream", "symfuhny"];
const urlEnd = "?callback=";

function extractJson(data) {
  return data.json();
}

function createLink(data) {
  const stream = document.getElementById(data.stream.channel.name);
  const status = document.getElementById(data.stream.channel.name + "-stream");
  const div = document.getElementById(data.stream.channel.name + "-div")

  if (data.stream != null) {
    console.log("online");

    stream.className = "stream-status--online";
    stream.innerHTML = "Online";

    const link = document.createElement('a');
    link.href = "https://www.twitch.tv/" + data.stream.channel.name;
    link.target = "_blank";
    link.className = "stream-link";


    status.innerHTML = data.stream.channel.status.slice(0, 30) + "...";
    status.className = "stream-description--online";
    link.appendChild(status);
    div.insertBefore(link, stream);
  }
}



user.forEach(function(element) {

const finalUrl = url + element + urlEnd;

  fetch(finalUrl)
    .then(extractJson)
    .then(function(data) {
      console.log(data);
      createLink(data);
    })

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })

});
