const url = "https://wind-bow.glitch.me/twitch-api/streams/";
const user = ["freecodecamp", "yo_boy_roy", "rainbow6", "kixstar", "shroud", "cdnthe3rd"];
const urlEnd = "?callback=";

function extractJson(data) {
  return data.json();
}

function createLink() {

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

        const link = document.createElement('a');
        link.href = "https://www.twitch.tv/" + data.stream.channel.name;
        link.target = "_blank";
        const snippet = document.createTextNode("testing the link");
        link.appendChild(snippet);
        const cdnDiv = document.getElementById("cdnDiv")
        cdnDiv.appendChild(link);
        link.appendChild(status);

      }
    })

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })

});
