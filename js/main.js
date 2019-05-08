/*----- constants -----*/


const reload = new Audio('https://freesound.org/data/previews/276/276956_5172328-lq.mp3')
const gunShot = new Audio('https://freesound.org/data/previews/212/212607_1654571-lq.mp3');
/*----- app's state (variables) -----*/
var target1 = document.getElementById("target");
var timer1 = document.getElementById("timer");
var start = document.getElementById("start");
// var startGame = document.querySelector('button');
var points = document.getElementById('score');
var fOv = document.querySelector('.level');
var areas = document.getElementsByClassName('area');
var miss = document.getElementById("miss");


/*----- cached element references -----*/
var level, points, miss, currentTarget


/*----- event listeners -----*/
points.addEventListener('click', hit)
target1.addEventListener('click', hit);
start.addEventListener('click', render);
fOv.addEventListener('click', gunSound);
miss.addEventListener('click', hit);


/*----- functions -----*/
init()

function popUp() {
  var random = Math.floor((Math.random() * 6) + 0);
  currentTarget = areas[random];
  currentTarget = currentTarget.append(target1)
  
  //currentTarget.textContent = "HERE";
}

function removePopUp() {
  if (currentTarget = currentTarget) {
    currentTarget = null;
  }
}
//count down 

function timer() {
  var timeStart = 60;
  var gameTime = setInterval(function () {
    timer1.innerHTML = timeStart;
    timeStart -= 1;
    if (timeStart < 0) {
      clearInterval(gameTime);
      
    }
    
  }, 1000)
  
}

//HIT  and Miss funtion!!!!!
function hit(evt) {
  var marker = evt.target;
  if(marker === marker) {
   points.value = ++points;
  } else if(marker !== marker) {
     miss.value = ++miss;
  }
 
  console.log(points);
  console.log(miss);
}




// button to start clock
function render() {
  var popUs = setInterval(function () {
    popUp()
  }, 1000)
  var removePopUps = setInterval(function () {
    removePopUp()
  }, 1000)
  reload.play();
  timer();
  
  }

  //gun  sound

function gunSound() {
  gunShot.play();
  gunShot.currentTime = 0;
}


function init() {
  currentTarget = [null, null, null, null, null, null];
  points = 0;
  miss = 0;
  
}
