/*----- constants -----*/


const reload = new Audio('https://freesound.org/data/previews/276/276956_5172328-lq.mp3')
const gunShot = new Audio('https://freesound.org/data/previews/212/212607_1654571-lq.mp3');
/*----- app's state (variables) -----*/
var target1 = document.querySelector(".target");
var timer1 = document.getElementById("timer");
var startGame = document.querySelector('button');
var points = document.querySelector('.score');
var fOv = document.querySelector('body');

/*----- cached element references -----*/
var level, hit, miss


/*----- event listeners -----*/
target1.addEventListener('click', hit);
startGame.addEventListener('click', render);
fOv.addEventListener('click', gunSound);
points.addEventListener('click', hit);
 

/*----- functions -----*/

//count down func

function timer(){
  var timeStart = 60;
  var gameTime = setInterval(function(){
    timer1.innerHTML = timeStart;
    timeStart -= 1;
   if(timeStart < 0){
      clearInterval(gameTime);
   }
   
  }, 1000)
  
}
//gun  sound

function gunSound() {
  if(timer1 === false) {
    return gunShot.paused();
  }
  gunShot.play();
  gunShot.currentTime = 0;
  
  
}



function hit(evt) {
  var marker = evt.target;
  

}
// button to start clock
function render() {
  reload.play();
  timer();
 
}

function init () {
  level = [null, null, null, null, null, null];
  points = 0;

}
