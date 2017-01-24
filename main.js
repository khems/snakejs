document.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementsByTagName('canvas')[0]

  //returns a 2d drawing context on the canvas
  var ctx = canvas.getContext('2d')
  
  setInterval(function(){drawSnakeParts(ctx, snake)}, 1000)
  
  //snake
  var snake = new snakePart(ctx, 10, 10)

  //event listener for arrow keys
  document.addEventListener('keydown', function(e) {
      var key = e.keyCode
      console.log(key)
      moveSnakePart(key, snake)
    //  drawSnakeParts(ctx, snake)
  })
})

function moveSnakePart(direction, snakePart){
  switch (direction){
    case 37: 
      snakePart.xpos -= 10
      console.log('left')
      break
    case 38: 
      snakePart.ypos -= 10
      console.log('up')
      break
    case 39: 
      snakePart.xpos += 10
      console.log('right')
      break
    case 40: 
      snakePart.ypos += 10
      console.log('down')
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