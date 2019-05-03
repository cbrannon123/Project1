/*----- constants -----*/
const targets = {
  bg1: {
    img: 'img/index.jpg',
    pts: '10'
  }

}
/*----- app's state (variables) -----*/
var target1 = document.querySelector(".image");

/*----- cached element references -----*/

/*----- event listeners -----*/
document.querySelector(".image").addEventListener('click', kill)
 

/*----- functions -----*/
render()

function kill(evt) {
  var marker = evt.target;
marker.style.display = "none";
render()
}

function render() {
target1.style.content = 'url(img/index.jpg)';
}



//const playerResultEl = document.querySelector('#player > div > div');
//playerResultEl.style.backgroundImage = `url(${rps[results.p].img})`;