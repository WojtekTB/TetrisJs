this.inHandPiece;
//block texts
this.block_L = [
0, 1, 0,
0, 1, 0,
0, 1, 1,
0, 0, 0];

this.block_RL = [
0, 1, 0,
0, 1, 0,
1, 1, 0,
0, 0, 0];

this.block_S = [
0, 0, 0,
0, 1, 1,
1, 1, 0,
0, 0, 0];

this.block_RS = [
0, 0, 0,
1, 1, 0,
0, 1, 1,
0, 0, 0];

this.block_T = [
0, 0, 0,
0, 1, 0,
1, 1, 1,
0, 0, 0];

this.block_I = [
0, 1, 0,
0, 1, 0,
0, 1, 0,
0, 1, 0];

this.block_O = [
0, 0, 0,
1, 1, 0,
1, 1, 0,
0, 0, 0];

this.block_D = [
1, 1, 1,
1, 1, 1,
1, 1, 1,
1, 1, 1];


//directions
this.direction_up = 0;
this.direction_down = 1;
this.direction_right = 3;
this.direction_left = 4;
//
// function drawBox(x, y, color)
// {
//   var context = canvas.getContext('2d');
//   context.fillStyle = color;
//   rect(x*scale, y*scale, scale, 5, 5, 5);
// }

function placedown(x, y, block_type)
{
  for(let xPos = x; x < 3; xPos++)
  {
    editLine(x,y, block_type[xPos]);
  }
  for(let xPos = x; x < 3; xPos++)
  {
    editLine(x,y+1, block_type[xPos+3]);
  }
  for(let xPos = x; x < 3; xPos++)
  {
    editLine(x,y+2, block_type[xPos+6]);
  }
  for(let xPos = x; x < 3; xPos++)
  {
    editLine(x,y+3, block_type[xPos+9]);
  }
}

function rednerBlock(block_type, drawXimp, drawYimp, directionimp)
{
  let direction = directionimp;
  let drawX = drawXimp;
  let drawY = drawYimp*myScale;
  let color;
  switch (block_type) {//change color depending on type of block
    case (block_L):
    color = `rgb(0, 0, 255)`;
    break;
    case (block_S):
    color = `rgb(0, 255, 0)`;
    break;
    case (block_T):
    color = `rgb(255, 0, 255)`;
    break;
    case (block_RL):
    color = `rgb(255, 110, 0)`;
    break;
    case (block_RS):
    color = `rgb(255, 0, 0)`;
    break;
    case (block_I):
    color = `rgb(0, 150, 255)`;
    break;
    case (block_O):
    color = `rgb(255, 255, 0)`;
    break;
    default:
    color = `rgb(0, 0, 0)`;
  }
  let context = canvas.getContext("2d");
  if(direction === direction_up)
  {
    context.fillStyle = color;
    for(let x = drawX; x < (drawX+12); x++)//draw block in the up position
    {
      if(block_type[x-drawX] === 1 && x<3+drawX){
        rect(x*myScale, drawY, myScale, myScale, 5, 5, 5);
      }
      else if (block_type[x-drawX] === 1 && x<6+drawX)
      {
        rect((x-3)*myScale, drawY + myScale, myScale, myScale, 5, 5, 5);
      }
      else if (block_type[x-drawX] === 1 && x<9+drawX)
      {
        rect((x-6)*myScale, drawY + (2*myScale), myScale, myScale, 5, 5, 5);
      }
      else if (block_type[x-drawX] === 1 && x<12+drawX)
      {
        rect((x-9)*myScale, drawY + (3*myScale), myScale, myScale, 5, 5, 5);
      }
    }
  }
  else if(direction === direction_down)
  {
    drawY = drawY + 1 * myScale;
    drawX--;
    context.fillStyle = color;
    let d = 0;
    for(let x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        console.log(drawX*myScale+(x*myScale), drawY+(3*myScale), myScale, myScale, 5, 5, 5);
        rect(drawX*myScale+(x*myScale), drawY+(3*myScale), myScale, myScale, 5, 5, 5);
      }
      d++;
    }
    for(let x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        rect(drawX*myScale+(x*myScale), drawY+(2*myScale), myScale, myScale, 5, 5, 5);
      }
      d++;
    }
    for(let x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        rect(drawX*myScale+(x*myScale), drawY+(myScale), myScale, myScale, 5, 5, 5);
      }
      d++;
    }
    for(let x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        rect(drawX*myScale+(x*myScale), drawY, myScale, myScale, 5, 5, 5);
      }
      d++;
    }
  }
  else if(direction === direction_left)
  {
    drawX--;
    context.fillStyle = color;
    let d = 0;
    for(x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        rect(drawX * myScale, drawY + (myScale * x), myScale, myScale, 5, 5, 5);
      }
      d++;
    }
    for(x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        rect(drawX * myScale + (myScale), drawY + (myScale * x), myScale, myScale, 5, 5, 5);
      }
      d++;
    }
    for(x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        rect(drawX * myScale + 2* (myScale), drawY + (myScale * x), myScale, myScale, 5, 5, 5);
      }
      d++;
    }
    for(x = 3; x > 0; x--)
    {
      if(block_type[d] === 1)
      {
        rect(drawX * myScale + (3* myScale), drawY + (myScale * x), myScale, myScale, 5, 5, 5);
      }
      d++;
    }
  }
  else if (direction === direction_right)
  {
    drawY = drawY + 1 * myScale;
    context.fillStyle = color;
    for(let x = 0; x < 3; x++)
    {
      if(block_type[x] === 1)
      {
        rect(drawX*myScale+(3*myScale), drawY+(x*myScale), myScale, myScale, 5, 5, 5);
      }
    }
    for(let x = 0; x < 3; x++)
    {
      if(block_type[x+3] === 1)
      {
        rect(drawX*myScale+(2*myScale), drawY+(x*myScale), myScale, myScale, 5, 5, 5);
      }
    }
    for(let x = 0; x < 3; x++)
    {
      if(block_type[x+6] === 1)
      {
        rect(drawX*myScale+myScale, drawY+(x*myScale), myScale, myScale, 5, 5, 5);
      }
    }
    for(let x = 0; x < 3; x++)
    {
      if(block_type[x+9] === 1)
      {
        rect(drawX*myScale, drawY+(x*myScale), myScale, myScale, 5, 5, 5);
      }
    }
  }
}
