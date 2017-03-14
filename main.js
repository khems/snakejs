document.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementsByTagName('canvas')[0]
  // Returns a 2D drawing context on the canvas
  var ctx = canvas.getContext('2d')
  
  var player = new dot(10, 10)
  makeCoin(ctx)
  
  playerScore = 0

  // Event listener for arrow keys
  document.addEventListener('keydown', function(e) {
    var key = e.keyCode
    ctx.clearRect(player.xpos, player.ypos, 10, 10)
    player = moveDot(ctx, player, key)
    drawDot(ctx, player)
  })
})

var playerScore

//Returns dot (with direction parameters)
function getSquareAtDirection(ctx, oldDot, direction){
  var newDot = new dot(oldDot.xpos, oldDot.ypos)
  switch(direction){
    case 37:
      newDot.xpos -= 10
      break
    case 38:
      newDot.ypos -= 10
      break
    case 39:
      newDot.xpos += 10
      break
    case 40:
      newDot.ypos += 10
      break
  }
  checkWrapping(newDot)
  return newDot
}

function checkForAndGetCoin(ctx, dot){
  imageData = ctx.getImageData(dot.xpos, dot.ypos, 10, 10).data
  var color = [imageData[0], imageData[1], imageData[2]];
  if(color.toString() == [255, 255, 0].toString()){ //hack
    playerScore++
    makeCoin(ctx)
  }
  
  document.getElementById('score').innerHTML = parseInt(playerScore)
}

function moveDot(ctx, oldDot, direction){
  newDot = getSquareAtDirection(ctx, oldDot, direction)
  checkForAndGetCoin(ctx, newDot)
  return newDot
}

function checkWrapping(dot){
  if(dot.xpos < 0){
    dot.xpos = 290
  }
  else if(dot.xpos > 290){
    dot.xpos = 0
  }
  if(dot.ypos < 0){
    dot.ypos = 140
  }
  else if(dot.ypos > 140){
    dot.ypos = 0
  }
}

function drawDot(ctx, dot){
  ctx.fillStyle = 'black';
  ctx.fillRect(dot.xpos, dot.ypos, 10, 10)
}

function dot(xpos, ypos){
  this.xpos = xpos
  this.ypos = ypos
}

function makeCoin(ctx){
  xpos = Math.floor(Math.random() * 30) * 10
  ypos = Math.floor(Math.random() * 15) * 10
  ctx.fillStyle = 'yellow';
  ctx.fillRect(xpos, ypos, 10, 10)
}
