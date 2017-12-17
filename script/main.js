window.onload = function () {
  introSong ()
  document.getElementById("rudolph").addEventListener('click', introSong)
}
//play christmas song
function introSong(){
  intro = document.getElementById("intro-song")
  intro.play()
}
