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
var level, points, miss, currentTarge, gameLive;


/*----- event listeners -----*/
points.addEventListener('click', hit);
target1.addEventListener('click', hit);
start.addEventListener('click', render);
fOv.addEventListener('click', gunSound);
fOv.addEventListener('click', noHit);


/*----- functions -----*/
init();


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
  var timeStart = 10;
  var gameTime = setInterval(function () {
    timer1.innerHTML = timeStart;
    timeStart -= 1;
    if (timeStart < 0) {
      clearInterval(gameTime);
      
    } 
    
  }, 1000)
  
}

//HIT  and Miss funtion
function hit(evt) {
  var marker = evt.target;
  if (marker == marker) {
    points.innerHTML = ++points.innerHTML;
  } 
    
  
}

function noHit(evt) {
  var marker = evt.target;
  if (marker !== target1) {
    miss.innerHTML = ++ miss.innerHTML;
  }
  
  
}




// button to start 
function render() {
  setInterval(function () {
    popUp()
  }, 800)
   setInterval(function () {
    removePopUp()
  }, 700)
  
  reload.play();
  
  timer();
  init()
  
  
  }

  //gun  sound

function gunSound() {
  gunShot.play();
  gunShot.currentTime = 0;
  
}


function init() {
  
 //points = 0;
 //miss = 0;
 gameLive = false;
 
  
  
}
