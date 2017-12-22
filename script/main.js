window.onload = function () {
introSong ()
  document.getElementById("rudolph").addEventListener('click', introSong)

  //Get modal
  var modal1 = document.getElementById("giftModal-1");
  var modal2 = document.getElementById("giftModal-2");
  var modal3 = document.getElementById("giftModal-3");
  var modal4 = document.getElementById("giftModal-4");

  //get button that opens modal
  var gift1 = document.getElementById("gift-1")
  var gift2 = document.getElementById("gift-2")
  var gift3 = document.getElementById("gift-3")
  var gift4 = document.getElementById("gift-4")


  //get the <span> element that close the Modal
  var span1 = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];
  var span3 = document.getElementsByClassName("close")[2];
  var span4 = document.getElementsByClassName("close")[3];

  // whe the user clicks on the button, open Modal
  gift1.onclick = function(){
    modal1.style.display = "block"
  }
  gitf1.onTouchStart = function(){
    modal1.style.display = "block"
  }
  gift2.onclick = function(){
    modal2.style.display = "block"
  }
  gift3.onclick = function(){
    modal3.style.display = "block"
  }
  gift4.onclick = function(){
    modal4.style.display = "block"
  }

  // when user clicks on <span> (x), close the Modal
  span1.onclick = function () {
    modal1.style.display = "none"
  }
  span2.onclick = function () {
    modal2.style.display = "none"
  }
  span3.onclick = function () {
    modal3.style.display = "none"
  }
  span4.onclick = function () {
      modal4.style.display = "none"
    }



  //when the user clicks anywhere outside the modal, close it
  window.onclick = function(event){
      if (event.target == modal1) {
        modal1.style.display ="none"
      } else if (event.target == modal2) {
        modal2.style.display ="none"
      } else if (event.target == modal3) {
        modal3.style.display ="none"
      } else if (event.target == modal4) {
        modal4.style.display ="none"
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
