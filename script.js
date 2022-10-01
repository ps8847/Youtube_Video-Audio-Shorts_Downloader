var link = document.querySelector(".link");
var format = document.querySelector(".format");

function download() {
  if (link.value != "") {
    var url = link.value;

    var casee;
    var id;
    if (url.includes("v=")) {
      casee = url.split("v=")[1];
      id = casee;
    }
    if (url.includes(".be/")) {
      casee = url.split(".be/")[1];
      id = casee;
    }
    if (url.includes("shorts/")) {
      casee = url.split("shorts/")[1].substring(0, 11);
      id = casee;
    }

    document.querySelector(
      ".result1"
    ).innerHTML = `<img id="vidImg" src="https://img.youtube.com/vi/${id}/hqdefault.jpg" height="450px" width="97%" style=" margin:10px; border-radius:10px; align-items:center; justify-content:center;">`;

    var url2 = `https://loader.to/api/button/?url=${link.value}&f=${format.value}`;

    document.querySelector(
      ".result2"
    ).innerHTML = `<iframe style="width:100%; height:50px; border:hidden; overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
  }
}
