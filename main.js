document.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementsByTagName('canvas')[0]

  //returns a 2d drawing context on the canvas
  var ctx = canvas.getContext('2d')
  
  movementLockOff = true;
  //snake
  var snake = new snakePart(ctx, 10, 10)
  
  var directionArray = ["right"]
  var snakePartArray = []
  
  snakePartArray.push(snake)
  
  setInterval(function(){
    drawSnakeParts(ctx, snakePartArray)
    movementLockOff = true
  }, 1000)

  //event listener for arrow keys
  document.addEventListener('keydown', function(e) {
    if(movementLockOff){
      var key = e.keyCode
      console.log(key)
      handleDirectionPresses(key, snake)
      movementLockOff = false;
    }
    //drawSnakeParts(ctx, snake)
  })
})

function handleDirectionPresses(direction, directionArray){
  switch (direction){
    case 37: 
      directionArray.push('left')
      console.log('left')
      break
    case 38: 
      directionArray.push('up')
      console.log('up')
      break
    case 39: 
      directionArray.push('right')
      console.log('right')
      break
    case 40: 
      directionArray.push('down')
      console.log('down')
      break
  }
}

function moveSnake(snake, directonArray){
  switch(directionArray[0]){
    case 'left':
      snake[0].xpos -= 10
      break
    case 'up':
      snake[0].ypos -= 10
      break
    case 'right':
      snake[0].xpos += 10
      break
    case 'down':
      snake[0].ypos += 10
      break
  }
}

function drawSnakeParts(ctx, snakeparts){
  ctx.clearRect(0,0,300,150)
  ctx.fillRect(snakeparts.xpos, snakeparts.ypos, 10, 10)
}

function snakePart(ctx, xpos, ypos){
  this.xpos = xpos
  this.ypos = ypos
}