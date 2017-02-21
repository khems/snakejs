document.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementsByTagName('canvas')[0]

  //returns a 2d drawing context on the canvas
  var ctx = canvas.getContext('2d')
  
  var player = new dot(ctx, 10, 10)

  //event listener for arrow keys
  document.addEventListener('keydown', function(e) {
    var key = e.keyCode
    console.log(key)
    moveDot(player, key)
    drawDot(ctx, player)
  })
})

function moveDot(dot, direction){
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
}

function drawDot(ctx, player){
  ctx.clearRect(0,0,300,150)
  ctx.fillRect(player.xpos, player.ypos, 10, 10)
}

function dot(ctx, xpos, ypos){
  this.xpos = xpos
  this.ypos = ypos
}
