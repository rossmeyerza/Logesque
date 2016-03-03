var socket = io();

socket.on('log', function(msg) {
	 $('#log').append($('<li>').text(msg));
})