var app = require('http').createServer();
var io = require('socket.io')(app);
var port = (process.env.PORT || 8081);

io.on('connection', function(socket){
  // listens for specific event
  socket.on('moveServo', function(servo){
    // when event happens, server emits this event to all listeners
    io.emit('moveServo', servo);
    console.log('Moving ' + servo);
  });

  console.log('Someone is on the port');
});

app.listen(port);
console.log('Listening on ' + port);
