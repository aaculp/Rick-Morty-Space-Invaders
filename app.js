window.onload = function () {
  //set const variables
const body = document.body;
let morty = document.createElement('div')
morty.classList.add('morty')

function createMorty() {
  body.append(morty)
  // randomly moves morty

  morty.addEventListener('click', gameLogic)

  function moveMorty(morty) {
    morty.style.bottom = Math.random() * window.innerLength + 'px'
    morty.style.left = Math.random() * window.innerWidth + 'px'
  }
  // how long it takes morty to move up
  setInterval(function() {
    moveMorty(morty)
  }, 5000)
}
  for (let i=0; i < 5; i++) {
    createMorty();
  }

document.addEventListener('keydown', moveRick)
document.addEventListener('keyup', shootRocket)
let rickMove = 600;

function shootRocket(event) {
  let rocket = document.querySelector('#rocket')
  event.preventDefault()
  if (event.keyCode == 32) {
    rocket.style.top = 635 + 'px'
    console.log('space')
  }
}

function moveRick(event) {
  let rick = document.querySelector('#rick')
  if (event.keyCode == 39) {
    event.preventDefault()
    rickMove += 50;
    rocket.style.left = rickMove + 'px'
    rick.style.left = rickMove + 'px'
    console.log('right')
  } else if (event.keyCode == 37) {
    event.preventDefault()
    rickMove += -50;
    rocket.style.left = rickMove + 'px'
    rick.style.left = rickMove + 'px'
    console.log('left')
  }
}

setInterval(function(){
allcollapsed ();
}, 250)

function allcollapsed () {
  let morty = document.querySelectorAll('.morty');
  let rocket = document.querySelector('#rocket');
  for (i = 0; i < 5; i++) {
    gameLogic(rocket, morty[i]);
  }
}

function gameLogic() {
 let rickTop = window.getComputedStyle(rick, null).getPropertyValue("top");
 let rickLeft = window.getComputedStyle(rick, null).getPropertyValue("left");
 let rickHeight = window.getComputedStyle(rick, null).getPropertyValue("height");
 let rickWidth = window.getComputedStyle(rick, null).getPropertyValue("width");
 let rickBottom = window.getComputedStyle(rick, null).getPropertyValue("bottom");
 rickTop = parseInt(rickTop.split('px')[0])
 rickLeft = parseInt(rickLeft.split('px')[0])
 rickHeight = parseInt(rickHeight.split('px')[0])
 rickWidth = parseInt(rickWidth.split('px')[0])
 rickBottom = parseInt(rickBottom.split('px')[0])

 let rocketTop = window.getComputedStyle(rocket, null).getPropertyValue("top");
 let rocketLeft = window.getComputedStyle(rocket, null).getPropertyValue("left");
 let rocketHeight = window.getComputedStyle(rocket, null).getPropertyValue("height");
 let rocketWidth = window.getComputedStyle(rocket, null).getPropertyValue("width");
 let rocketBottom = window.getComputedStyle(rocket, null).getPropertyValue("bottom");
 rocketTop = parseInt(rocketTop.split('px')[0])
 rocketLeft = parseInt(rocketLeft.split('px')[0])
 rocketHeight = parseInt(rocketHeight.split('px')[0])
 rocketWidth = parseInt(rocketWidth.split('px')[0])
 rocketBottom = parseInt(rocketBottom.split('px')[0])

 let mortyTop = window.getComputedStyle(this, null).getPropertyValue("top");
 let mortyLeft = window.getComputedStyle(this, null).getPropertyValue("left");
 let mortyHeight = window.getComputedStyle(this, null).getPropertyValue("height");
 let mortyWidth = window.getComputedStyle(this, null).getPropertyValue("width");
 let mortyBottom = window.getComputedStyle(this, null).getPropertyValue("bottom");
 mortyTop = parseInt(mortyTop.split('px')[0])
 mortyLeft = parseInt(mortyLeft.split('px')[0])
 mortyHeight = parseInt(mortyHeight.split('px')[0])
 mortyWidth = parseInt(mortyWidth.split('px')[0])
 mortyBottom = parseInt(mortyBottom.split('px')[0])

 let bottomHeight = window.getComputedStyle(body, null).getPropertyValue("height");
 let bottomWidth = window.getComputedStyle(body, null).getPropertyValue("Width");
 bottomHeight = parseInt(bottomHeight.split('px')[0]) //679
 bottomWidth = parseInt(bottomWidth.split('px')[0]) //820

 if (mortyTop < rocketTop + rocketHeight && mortyTop + mortyHeight > rocketTop &&
    mortyLeft < rocketLeft + rocketWidth && mortyLeft + mortyWidth > rocketLeft) {
  this.remove()
  rocket.style.top = 10 + 'px'
  rocket.style.transition = 'none'
  setTimeout(function(){
  rocket.style.transition = 'top 1s linear'
  },0)
  //if rocket hits bottom, rocket disappears then top of 10px
  } else if (bottomHeight < rocketTop + rocketHeight) {
  rocket.style.top = 10 + 'px'
  rocket.style.transition = 'none'
  setTimeout(function(){
  rocket.style.transition = 'top 1s linear'
    },0)
  } else if (rickBottom < mortyBottom + mortyHeight && rickBottom + rickHeight > mortyBottom &&
    rickLeft <= mortyLeft + mortyWidth && rickLeft + rickWidth >= mortyLeft) {
  alert('You Lose!')
  }
}
  setInterval(function(){
   gameLogic()
  }, 0)

}




