document.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementsByTagName('canvas')[0]

  //returns a 2d drawing context on the canvas
  var ctx = canvas.getContext('2d')
  
  var player = new dot(ctx, 10, 10)
  
  makeCoin(ctx)

  //event listener for arrow keys
  document.addEventListener('keydown', function(e) {
    var key = e.keyCode
    console.log(key)
    moveDot(ctx, player, key)
    //ctx.clearRect(0,0,300,150)
    drawDot(ctx, player)
  })
})

function moveDot(ctx, dot, direction){
  ctx.clearRect(dot.xpos, dot.ypos, 10, 10)
  switch(direction){
    case 37:
      dot.xpos -= 10
      break
    case 38:
      dot.ypos -= 10
      break
    case 39:
      dot.xpos += 10
      break
    case 40:
      dot.ypos += 10
      break
  }
  checkWrapping(dot)
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

function dot(ctx, xpos, ypos){
  this.xpos = xpos
  this.ypos = ypos
}

function makeCoin(ctx){
  xpos = Math.floor((Math.random() * 30) + 1) * 10
  ypos = Math.floor((Math.random() * 15) + 1) * 10
  ctx.fillStyle = 'yellow';
  ctx.fillRect(xpos, ypos, 10, 10)
}
