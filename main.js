document.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementsByTagName('canvas')[0]

  //returns a 2d drawing context on the canvas
  var ctx = canvas.getContext('2d')

  //event listener for arrow keys
  document.addEventListener('keydown', function(e) {
      var key = e.keyCode
      switch(key) {
          case 37:
          //move left
              break
          case 38:
          //move down
              break
          case 39:
         //move right
              break
          case 40:
          //move up
              break
      }
  })

})
