let backgroundColor = [90, 96, 95];
var posX;
var posY;
var rotation;
var frame = 0;

function setup(){
  createCanvas(playingFieldWidth, playingFieldHight);
  clearField();
}

function draw(){
  if (frame === 30)
  {
    dropBlock();
    frame = 0;
  }
  var context = canvas.getContext('2d');
  playingFieldBackground = background(backgroundColor);
  drawGrid();
  let blockInHand = block_O;
  rednerBlock(blockInHand , currentX, currentY, rotation);
  frame++;
}

function drawLine(x1, y1, x2, y2, color)
{
  var context = canvas.getContext('2d');
  context.strokeStyle = color;
  // Reset the current path
  context.beginPath();
  // Staring point (x1,y1)
   context.moveTo(x1, y1);
  // End point (x2,x1)
  context.lineTo(x2, y2);
  // Make the line visible
  context.stroke();
}


function drawGrid()
{
var context = canvas.getContext('2d');
  color = '#4b4b4b';
  for(let x = 0; x < 22; x++)//vertical lines
  {
    drawLine(0, x * myScale, playingFieldWidth+1, x * myScale, color);
  }
  for(let x = 0; x < 12; x++)//horizontal lines
  {
    drawLine(x * myScale, 0, x * myScale, playingFieldHight, color);
  }
}


function keyPressed(){
  if(keyCode === LEFT_ARROW)
  {
    currentX--;
  }
  else if(keyCode === RIGHT_ARROW)
  {
    currentX++;
  }
  else if(keyCode === UP_ARROW)
  {
    currentY--;
  }
  else if(keyCode === DOWN_ARROW)
  {
    currentY++;
  }
  else if(keyCode === 65)
  {
    rotation = direction_up;
  }
  else if(keyCode === 83)
  {
    rotation = direction_down;
  }
  else if(keyCode === 68)
  {
    rotation = direction_left;
  }
  else if(keyCode === 70)
  {
    rotation = direction_right;
  }
  else{
    posX = 3;
    posY = 2;
  }
}
