/*----- constants -----*/


const reload = new Audio('https://freesound.org/data/previews/276/276956_5172328-lq.mp3')
const gunShot = new Audio('https://freesound.org/data/previews/212/212607_1654571-lq.mp3');
/*----- app's state (variables) -----*/
var target1 = document.querySelector(".target");
var timer1 = document.getElementById("timer");
var start = document.getElementById("start");
// var startGame = document.querySelector('button');
var points = document.querySelector('.score');
var fOv = document.querySelector('.level');
var areas = document.getElementsByClassName('area')
console.log(areas)

/*----- cached element references -----*/
var level, hit, miss, target, currentTarget


/*----- event listeners -----*/
target1.addEventListener('click', hit);
start.addEventListener('click', render);
fOv.addEventListener('click', gunSound);

//points.addEventListener('click', hit);


/*----- functions -----*/
init()

function popUp(){
  var random = Math.floor((Math.random() * 6) +1);
  currentTarget = areas[random]
  currentTarget.textContent = "yoOOOOOO";

}



//count down 

function timer() {
  var timeStart = 20;
  var gameTime = setInterval(function () {
    timer1.innerHTML = timeStart;
    timeStart -= 1;
    if (timeStart < 0) {
      clearInterval(gameTime);
     
    }
  }, 1000)
}

//gun  sound

function gunSound() {
  gunShot.play();
  gunShot.currentTime = 0;
}


function hit(evt) {
  var marker = evt.target;
  console.log(marker);
}

function playGame(){
  render()
}

// button to start clock
function render() {
  reload.play();
  var popUps = setInterval(function () {
    popUp()
  }, 1000)
  // var removePopUps = setInterval(function () {
  //   removePopUp()
  // }, 1000)
  timer();
}

function init() {
  target = [null, null, null, null, null, null];
  points = 0;
}
