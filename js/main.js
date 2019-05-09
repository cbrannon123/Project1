/*----- constants -----*/
const grunt = new Audio('https://freesound.org/data/previews/369/369003_6812364-lq.mp3')
const hitSound = new Audio('https://freesound.org/data/previews/166/166605_71257-lq.mp3')
const winMusic = new Audio('https://freesound.org/data/previews/251/251419_970024-lq.mp3')
const music = new Audio('https://freesound.org/data/previews/125/125185_45941-lq.mp3')
const loser = new Audio('https://freesound.org/data/previews/77/77176_216886-lq.mp3')
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
var msg = document.getElementById('msg');

/*----- cached element references -----*/
var points, miss, currentTarge, timeStart


/*----- event listeners -----*/
points.addEventListener('click', hit);
target1.addEventListener('click', hit);
start.addEventListener('click', render);
fOv.addEventListener('click', gunSound);
fOv.addEventListener('click', noHit);


/*----- functions -----*/
init();

function winMsg() {
  msg.innerHTML = `YOU WIN with ${points.innerHTML} hits!`;
  target1.style.display = "none";
  timeStart = 2;
  winMusic.play()

}

function timeUp() {
  msg.innerHTML = `Press start to play again!`;
  target1.style.display = "none";
  music.pause()
}

function loseMsg() {
  msg.innerHTML = `YOU LOSE! Missed ${miss.innerHTML} times!`;
  timeStart = 2;
  loser.play()

}


function popUp() {
  var random = Math.floor((Math.random() * 6) + 0);
  currentTarget = areas[random];
  currentTarget = currentTarget.append(target1);
}

function removePopUp() {
  if (currentTarget = target1) {
    currentTarget.style.display = null;
  }

}
//count down 
function timer() {
  timeStart = 20;
  msg.innerHTML = "THE STREETS ARE MEAN"
  var gameTime = setInterval(function () {
    start.removeEventListener('click', render);
    timer1.innerHTML = timeStart;
    timeStart -= 1;
    if (timeStart < 0) {
      timer1.innerHTML = 20;
      clearInterval(gameTime);
      timeUp()
      start.addEventListener('click', render);
    }

  }, 1000)

}

//HIT  and Miss funtion
function hit(evt) {
  var marker = evt.target;
  if (marker == marker) {
    points.innerHTML = ++points.innerHTML;
    damage();
    target1.style.display = "none"

  }
  if (points.innerHTML >= 10) {
    miss.innerHTML = 0;
    timer1.innerHTML = 20;
    winMsg()
  }

}

function noHit(evt) {
  var marker = evt.target;
  if (marker !== target1) {
    miss.innerHTML = ++miss.innerHTML;
  }
  if (miss.innerHTML >= 3) {
    loseMsg()
    points.innerHTML = 0;
    timer1.innerHTML = timeStart;

  }

}


// button to start 
function render() {
  music.play();
  points.innerHTML = 0;
  miss.innerHTML = 0;
  var startPop = setInterval(function () {
    if (timeStart == 0) {
      target1.style.display = "none"
      clearInterval(startPop)
    }
    popUp()
  }, 800)
  var endPop = setInterval(function () {
    if (timeStart == 0) {
      target1.style.display = "none"
      clearInterval(endPop)
    }
    removePopUp()
  }, 500)
  if (timer1.innerHTML <= 0) {
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
function damage() {
  hitSound.play();
  hitSound.currentTime = 0;
  grunt.play();
  grunt.currentTime = 0;
}


function init() {
  target1.style.display = 'none';
  msg.innerHTML = "THE STREETS ARE MEAN";
  
}
