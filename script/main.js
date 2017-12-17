window.onload = function () {
  introSong ()
  document.getElementById("rudolph").addEventListener('click', introSong)
}

function introSong(){
  intro = document.getElementById("intro-song")
  intro.play()
}
