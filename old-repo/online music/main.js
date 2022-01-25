var playlist_index = 0;
var song = ["shape of you", "believer", "hope", "changes"];
art = ["shape of you.jpeg", "believer.jpeg", "hope.jpeg", "changes.jpeg"];
dir = "audio/";
ext = ".mp3";
var playbtn = document.querySelector(".playbutton");
var music = document.querySelector("#aud");
var playimgtop = document.querySelector(".bs");
var listen = dir + song[playlist_index] + ext;
var seekb = document.querySelector("#seekBar");
var list = document.querySelector("#song-list");
function Playinit(n) {
  music.setAttribute("src", "" + dir + song[n] + ext + "");
  music.play();

  playbtn.setAttribute("onclick", "Pause()");
  playbtn.style.background = ` url(./img/pause.png) no-repeat center/cover `;
  seekb.setAttribute("max", "" + music.duration + "");

  setInterval(function Seek(e) {
    seekBar.value = music.currentTime;
  }, 1000);
}

function Pause() {
  music.pause();
  playbtn.setAttribute("onclick", "Play()");
  playbtn.style.background = ` url(./img/play.png) no-repeat center/cover `;
}

function Play() {
  music.play();
  playbtn.setAttribute("onclick", "Pause()");
  playbtn.style.background = ` url(./img/pause.png) no-repeat center/cover `;
}

function previous() {
  if (playlist_index > 0) {
    playlist_index--;
  } else if ((playlist_index = 0)) {
    playlist_index = song.length;
  }
  Playinit(playlist_index);
}

function nex() {
  if (playlist_index >= 0) {
    playlist_index++;
  } else if ((playlist_index = song.length)) {
    playlist_index = 1;
  }
  Playinit(playlist_index);
}

function vol(e) {
  music.volume = e;
}
