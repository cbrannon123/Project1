/*----- constants -----*/


const reload = new Audio('https://freesound.org/data/previews/276/276956_5172328-lq.mp3')
const gunShot = new Audio('https://freesound.org/data/previews/212/212607_1654571-lq.mp3');
/*----- app's state (variables) -----*/
var target1 = document.getElementById("target");
var timer1 = document.getElementById("timer");
var start = document.getElementById("start");
var points = document.getElementById('score');
var fOv = document.querySelector('.level');
var areas = document.getElementsByClassName('area');
var miss = document.getElementById('miss');


/*----- cached element references -----*/
var level, points, miss, currentTarge, gameLive, timeStart;


/*----- event listeners -----*/
points.addEventListener('click', hit);
target1.addEventListener('click', hit);
start.addEventListener('click', render);
fOv.addEventListener('click', gunSound);
fOv.addEventListener('click', noHit);


/*----- functions -----*/
init();

function winMsg() {
  alert('You win')
}

function loseMsg() {
alert("you lose")
}


function popUp() {
  var random = Math.floor((Math.random() * 6) + 0);
  currentTarget = areas[random];
  currentTarget = currentTarget.append(target1)
}

function removePopUp() {
  if (currentTarget = target1) {
    currentTarget.style.display = null;
  }
  
}
//count down 

function timer() {
  timeStart = 10;
  var gameTime = setInterval(function () {
    start.removeEventListener('click', render);
    timer1.innerHTML = timeStart;
    timeStart -= 1;
    if (timeStart < 0) {
      points.innerHTML = 0;
      miss.innerHTML = 0;
      clearInterval(gameTime);
      start.addEventListener('click', render);
    } 
    
  }, 1000)
  
  
}

//HIT  and Miss funtion
function hit(evt) {
  var marker = evt.target;
  if (marker == marker) {
    points.innerHTML = ++points.innerHTML;
    target1.style.display = "none"
    // popUp()
  } 
  if (points.innerHTML >= 10) {
    winMsg()
  }
    
  
}

function noHit(evt) {
  var marker = evt.target;
  if (marker !== target1) {
    miss.innerHTML = ++ miss.innerHTML;
  }
  if(miss.innerHTML >= 5) {
    loseMsg()
  }
  
  
}




// button to start 
function render() {
  var startPop = setInterval(function () {
    if(timeStart == 0){
      target1.style.display = "none"
      clearInterval(startPop)
    }
    popUp()
  }, 900)
  var endPop = setInterval(function () {
    if(timeStart == 0){
      target1.style.display = "none"
      clearInterval(endPop)
    }
    removePopUp()
  }, 700)
  

  if(timer1.innerHTML <= 0){
    loseMsg()
  }
  reload.play();
  
  timer();
  
  
  
  }

  //gun  sound

function gunSound() {
  gunShot.play();
  gunShot.currentTime = 0;
  
}



function init() {
  
//  points = 0;
//  miss = 0;
 gameLive = false;
 target1.style.display = 'none'
 
  
  
}
