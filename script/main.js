window.onload = function () {
/*  introSong ()
  document.getElementById("rudolph").addEventListener('click', introSong)*/

  //Get modal
  var modal = document.getElementById("giftModal-1");

  //get button that opens modal
  var gift1 = document.getElementById("gift-1")


  //get the <span> element that close the Modal
  var span = document.getElementsByClassName("close")[0];

  // whe the user clicks on the button, open Modal
  gift1.onclick = function(){
    modal.style.display = "block"
  }

  // when user clicks on <span> (x), close the Modal
  span.onclick = function () {
    modal.style.display = "none"
  }

  //when the user clicks anywhere outside the modal, close it
  window.onclick = function(event){
    if (event.target == modal) {
      modal.style.display ="none"
    }
  }

  //get button to change language
  document.getElementById("language").addEventListener('click', changeLanguage)


}


//play christmas song
function introSong(){
  intro = document.getElementById("intro-song")
  intro.play()
}

//function to change language
function changeLanguage(){
let language = document.getElementsByClassName("language")
for (i=0; i<language.length; i++){
  language[i].classList.toggle('invis')
}


//document.getElementsByClassName("english").classList.toggle('invis')
}
