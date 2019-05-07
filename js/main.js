/*----- constants -----*/


const reload = new Audio('https://freesound.org/data/previews/276/276956_5172328-lq.mp3')
const gunShot = new Audio('https://freesound.org/data/previews/212/212607_1654571-lq.mp3');
/*----- app's state (variables) -----*/
var target1 = document.getElementById("target");
var timer1 = document.getElementById("timer");
var start = document.getElementById("start");
// var startGame = document.querySelector('button');
var points = document.querySelector('.score');
var fOv = document.querySelector('.level');
var areas = document.getElementsByClassName('area')


/*----- cached element references -----*/
var level, points, miss, currentTarget


/*----- event listeners -----*/
target1.addEventListener('click', hit);
start.addEventListener('click', render);
fOv.addEventListener('click', gunSound);

//points.addEventListener('click', hit);


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


function hit(evt) {
  var marker = evt.target;
  var point = 0;
  point = points;
  if(marker === target1) {
    return point =+ 1;
    
  }
  console.log(marker);
  
}




// button to start clock
function render() {
  var popUs = setInterval(function () {
    popUp()
  }, 1000)
  var removePopUps = setInterval(function () {
    removePopUp()
  }, 900)
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
  
  
}
