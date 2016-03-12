function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
    }
}


var socket = io();

var div = document.getElementById('log');

socket.on('log', function(msg) {
    div.innerHTML += '<li>' + msg + '</li>';
})

window.onload = "draw()";