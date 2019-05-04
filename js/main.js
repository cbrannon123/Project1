/*----- constants -----*/
const targets = {
  bg1: {
    img: 'img/index.jpg',
    pts: '10'
  }

}
/*----- app's state (variables) -----*/
var target1 = document.querySelector("#bg1");
var target2 = document.querySelector("#bg2");
var target3 = document.querySelector("#bg3");

/*----- cached element references -----*/

/*----- event listeners -----*/
target1.addEventListener('click', kill)
target2.addEventListener('click', kill)
target3.addEventListener('click', kill)
 

/*----- functions -----*/
render()

function kill(evt) {
  var marker = evt.target;
marker.style.display = "none";

}
//figure out how to make this show pictures!!!
function render() {
 
}



//const playerResultEl = document.querySelector('#player > div > div');
//playerResultEl.style.backgroundImage = `url(${rps[results.p].img})`;