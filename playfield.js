this.fillScreenLine1  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine2  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine3  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine4  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine5  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine6  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine7  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine8  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine9  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine14 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine15 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine16 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine17 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine18 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine19 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLine20 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
this.fillScreenLineTotal = [fillScreenLine1,
   fillScreenLine2,
    fillScreenLine3,
     fillScreenLine4,
      fillScreenLine5,
       fillScreenLine6,
        fillScreenLine7,
         fillScreenLine8,
          fillScreenLine9,
           fillScreenLine10,
            fillScreenLine11,
             fillScreenLine12,
              fillScreenLine13,
               fillScreenLine14,
                fillScreenLine15,
                 fillScreenLine16,
                  fillScreenLine17,
                   fillScreenLine18,
                    fillScreenLine19,
                     fillScreenLine20];

function clearField(){
  fillScreenLine1  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine2  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine3  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine4  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine5  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine6  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine7  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine8  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine9  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine14 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine15 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine16 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine17 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine18 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine19 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fillScreenLine20 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function getLine(lineNumber)
{
  return fillScreenLineTotal[lineNumber];
}

function getOnLineStatus(x, y)
{
  let editedLine = getLine(y);
  return editedLine[x];
}

function editOnLine(x, y, newStatus)//convert block on (x,y)
{
  lineArray = getLine(y);
  if(lineArray[x] === newStatus)
  {
    return;
  }
  else if(lineArray === 1 && newStatus === 0)
  {
    return;
  }
  else
  {
    lineArray[x] = newStatus;
  }
}

function clearLine(lineY)//empty line that is inputed and move all upper lines down
{
  let editedLine = getLine(lineY);
  editedLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function renderPlayField()
{
  var context = canvas.getContext('2d');
  color = 'rgb(255, 255, 255)';
  for(let y = 0; y < 20; y++)
  {
    for(let x = 0; x < 10; x++)
    {
      context.fillStyle = color;
      rect(x*myScale, y*myScale, myScale, myScale, 5, 5, 5);
    }
  }
}
