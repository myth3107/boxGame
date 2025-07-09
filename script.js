// declaring all stuff
const canvas = document.getElementById('canvas');
const box = document.getElementById('box');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

//declaring size of canvas
const canvasWidth = 800;
const canvasHeight = 500;
const boxSize = 50;

let boxX = 375;
let boxY = 225;

//update box position
function updateBoxPosition(){
    box.style.left = boxX + 'px';
    box.style.top = boxY + 'px';
}

//fuction moving left
function moveLeft(){
    if(boxX >= 50){
        boxX -=50;
        updateBoxPosition();
    }
}

//function moving right
function moveRight(){
    if(boxX <= canvasWidth - boxSize - 50){
        boxX += 50;
        updateBoxPosition();
    }
}

function moveUp(){
    if(boxY >= 50){
        boxY -=50;
        updateBoxPosition();
    }
}

function moveDown(){
  if (boxY <= canvasHeight - boxSize - 50){
        boxY += 50;
        updateBoxPosition();
   }
}


//add eventListener
leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);
upBtn.addEventListener('click', moveUp);
downBtn.addEventListener('click', moveDown);


