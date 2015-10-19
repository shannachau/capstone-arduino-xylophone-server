var app = require('http').createServer();
var io = require('socket.io')(app);
var port = (process.env.PORT || 8081);

// io = io.listen(app);

io.on('connection', function(socket){
  // socket.on('key pressed', function(msg){
  //   io.emit('key pressed', msg);
  // });

  socket.on('moveServo', function(servo){
    io.emit('moveServo', servo);
    console.log('Moving ' + servo);
  });

  // socket.on('servo3', function(test){
  //   io.emit('servo3', test);
  //   console.log('Moving servo3');
  // });
  //
  // socket.on('servo4', function(test){
  //   io.emit('servo4', test);
  //   console.log('Moving servo4');
  // });
  //
  // socket.on('servo5', function(test){
  //   io.emit('servo5', test);
  //   console.log('Moving servo5');
  // });
  //
  // socket.on('servo6', function(test){
  //   io.emit('servo6', test);
  //   console.log('Moving servo6');
  // });
  //
  // socket.on('servo8', function(test){
  //   io.emit('servo8', test);
  //   console.log('Moving servo8');
  // });
  //
  // socket.on('servo9', function(test){
  //   io.emit('servo9', test);
  //   console.log('Moving servo9');
  // });
  //
  // socket.on('servo10', function(test){
  //   io.emit('servo10', test);
  //   console.log('Moving servo10');
  // });

  console.log('someone is on the port');
});

app.listen(port);
console.log('Listening on ' + port);

// app - doesnt need to listen to port, only emit events
// server - needs to act as the port and listen and emit events
// arduino - listens to port
