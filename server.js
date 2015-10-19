var app = require('http').createServer();
var io = require('socket.io')(app);
var port = (process.env.PORT || 8081);

io.on('connection', function(socket){
  socket.on('moveServo', function(servo){
    io.emit('moveServo', servo);
    console.log('Moving ' + servo);
  });

  console.log('Someone is on the port');
});

app.listen(port);
console.log('Listening on ' + port);
