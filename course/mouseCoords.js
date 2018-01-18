var mouseX = 0;
var mouseY = 0;

$(document).mousemove(function(e){
    var wX = e.pageX; // положения по оси X
    var wY = e.pageY; // положения по оси Y
    offset = $('#field').offset();
    var fX = offset.left;
    var fY = offset.top;
    $("#mCoords").html((wX-fX)+"<br>"+(wY-fY)).css({'top':wY+20,'left':wX+20});
});   