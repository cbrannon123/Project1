/*----- constants -----*/
const targets = {
  bg1: {
    img: 'img/bg1.png',
    pts: '10'
  }

}
/*----- app's state (variables) -----*/
var target1 = document.querySelector(".target");
var timer1 = document.getElementById("timer");

/*----- cached element references -----*/


/*----- event listeners -----*/
target1.addEventListener('click', kill)

 

/*----- functions -----*/

timer();

function timer(){
  var timeStart = 60;
  var gameTime = setInterval(function(){
    timer1.innerHTML = timeStart;
    timeStart -= 1;
    if(timeStart <= 0){
      clearInterval(gameTime);
    }
    
  }, 1000)
}




function kill(evt) {
  var marker = evt.target;
marker.style.display = "none";

}

