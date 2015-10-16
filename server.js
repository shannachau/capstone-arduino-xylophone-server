var app = require('http').createServer();
var io = require('socket.io')(app);
var port = (process.env.PORT || 8081);

// io = io.listen(app);

io.on('connection', function(socket){
  // socket.on('key pressed', function(msg){
  //   io.emit('key pressed', msg);
  // });

  socket.on('testing', function(test){
    io.emit('testing', test);
    console.log('test actually fucking works');
  });
  console.log('someone is on the port');
});

app.listen(port);
console.log('Listening on ' + port);

// app - doesnt need to listen to port, only emit events
// server - needs to act as the port and listen and emit events
// arduino - listens to port
