const app     = require('express')();
var express   = require('express');
const favicon = require('serve-favicon');
var path      = require('path');
const http    = require('http').Server(app);
const io      = require('socket.io')(http);
var fs        = require('fs');

// Serve favicon
app.use(favicon(__dirname + '/favicon.ico'));

app.use(express.static(__dirname + '/public'));

var index = fs.readFileSync('./views/index.html')

// // Read Port From Arduino
// const SerialPort          = require('serialport').SerialPort;
// const { DelimiterParser } = require('@serialport/parser-delimiter');
// var port = new SerialPort(
//   { 
//     path: 'COM2', 
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
//   }
// );
// const parser = port.pipe(new DelimiterParser({ delimiter: '\n' }));
// parser.on('open', function() {
//   console.log('u hap!');
// });
// parser.on('error', function(err) {
//   console.log(err);
// });

// var portCOM5 = new SerialPort(
//   { 
//     path: 'COM5', 
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
//   }
// );
// const parserCOM5 = portCOM5.pipe(new DelimiterParser({ delimiter: '\n' }));
// parserCOM5.on('open', function() {
//   console.log('u hap!');
// });
// parserCOM5.on('error', function(err) {
//   console.log(err);
// });


// Check serialport is open.
/*
setInterval(async () => {
  let ports = await SerialPort.list();
  console.log(ports);
 
}, 1000);
*/


// Send to Index page.
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

// Send to Scene 2.
app.get('/giagia', function(req, res) {
  res.sendFile(path.join(__dirname, './views/giagia.html'));
});

// Send to Scene 3.
app.get('/elenitsa', function(req, res) {
  res.sendFile(path.join(__dirname, './views/elenitsa.html'));
});

// Send to Scene 4.
app.get('/pappous', function(req, res) {
  res.sendFile(path.join(__dirname, './views/pappous.html'));
});

// Send to Scene Monitors.
app.get('/monitors/:filname',function(req,res){
  const mypath = req.params.filname;
  res.sendFile(path.join(__dirname, './views/monitors/' + mypath + '.html'));
})

app.get('/interface', function(req, res) {
  res.sendFile(path.join(__dirname, './views/interface.html'));
});

// Send to Scene Games.
app.get('/games/:filname',function(req,res){
  const mypath = req.params.filname;
  res.sendFile(path.join(__dirname, './views/games/' + mypath + '.html'));
})

// GET Fwtografos Talking
app.get('/fwtografos/:filname',function(req,res){
  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Fwtografos/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Fwtografos Bubbles
app.get('/fwtografosBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Fwtografos/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Efterpi Talking
app.get('/Efterpi/:filname',function(req,res){
  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Efterpi/' + mypath ;
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Efterpi Bubbles
app.get('/EfterpiBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Efterpi/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Elenitsa Talking
app.get('/Elenitsa/:filname',function(req,res){
  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Elenitsa/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Elenitsa Bubbles
app.get('/ElenitsaBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Elenitsa/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Giagia Talking
app.get('/Giagia/:filname',function(req,res){
  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Giagia/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Giagia Bubbles
app.get('/GiagiaBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Giagia/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Nikolas Talking
app.get('/Nikolas/:filname',function(req,res){
  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Nikolas/' + mypath ;
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})




// GET Nikolas Bubbles
app.get('/NikolasBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Nikolas/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Pappous Talking
app.get('/Pappous/:filname',function(req,res){
  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Pappous/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Pappous Bubbles
app.get('/PappousBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Pappous/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Pagopolis Talking
app.get('/pagopolis/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Pagopolis/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Pagopolis Bubbles
app.get('/PagopolisBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Pagopolis/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Raftis Talking
app.get('/raftis/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Raftis/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})

// GET Raftis Bubbles
app.get('/RaftisBubbles/:filname',function(req,res){

  const mypath = req.params.filname;
  // The path of the video from local file system
  const videoPath = './public/videos/Raftis/Bubbles/' + mypath + '.webm';
  // Creating readStream for th HTML video tag
  fs.createReadStream(videoPath).pipe(res)
})



//Whenever someone connects this gets executed
io.on('connection', function(socket) {

  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
   console.log('A user disconnected');
  });

  socket.on('messagegame1', function (message) {
    io.emit('messagegame1', message);
  });
  socket.on('gameHasStarted', function (message) {
    io.emit('gameHasStarted', message);
  });
  socket.on('gameHasStarted3', function (message) {
    io.emit('gameHasStarted3', message);
  });
  socket.on('messagegame2', function (message) {
    io.emit('messagegame2', message);
  });
  socket.on('messagegame3', function (message) {
    io.emit('messagegame3', message);
  });
  socket.on('playMinigame', function (message) {
    io.emit('playMinigame', message);
  });
  socket.on('playMinigamePagopoli', function (message) {
    io.emit('playMinigamePagopoli', message);
  });
  socket.on('resetGameMonitor', function (message) {
    io.emit('resetGameMonitor', message);
  });
  socket.on('resetGameMonitorRafti', function (message) {
    io.emit('resetGameMonitorRafti', message);
  });

  socket.on('playMinigameRaftis', function (message) {
    io.emit('playMinigameRaftis', message);
  });
  socket.on('messageIceSeller', function (message) {
    io.emit('messageIceSeller', message);
  });
  
  socket.on('pagopolisStart', function (message) {
    io.emit('pagopolisStart', message);
  });
  socket.on('playIceGame', function (message) {
    io.emit('playIceGame', message);
  });

  socket.on('messageMrsBaglio', function (message) {
    io.emit('messageMrsBaglio', message);
  });

  socket.on('messageGiagia_Talking_5', function (message) {
    io.emit('messageGiagia_Talking_5', message);
  });

  
  socket.on('giagiaEnded', function (message) {
    io.emit('giagiaEnded',message);
    console.log('socketi nga backend')
  });
  socket.on('itemClicked', function (message) {
    io.emit('itemClicked',message);
  });
  socket.on('resetArrowPago', function (message) {
    io.emit('resetArrowPago',message);
  });
  socket.on('resetArrowRafti', function (message) {
    io.emit('resetArrowRafti',message);
  });
  socket.on('resetArrowPhoto', function (message) {
    io.emit('resetArrowPhoto',message);
  });
  socket.on('itemClickedPago', function (message) {
    io.emit('itemClickedPago',message);
  });
  socket.on('itemClickedRafti', function (message) {
    io.emit('itemClickedRafti',message);
  });
  socket.on('itemClickedPhoto', function (message) {
    io.emit('itemClickedPhoto',message);
  });
  socket.on('resetGameEleni', function (message) {
    io.emit('resetGameEleni',message);
  });
  socket.on('resetGameRafti', function (message) {
    io.emit('resetGameRafti',message);
  });
  socket.on('messageNikolasStep', function (message) {
    io.emit('messageNikolasStep', message);
  });
  socket.on('playFotografoGame', function (message) {
    io.emit('playFotografoGame', message);
  });
  socket.on('resetGamePhoto', function (message) {
    io.emit('resetGamePhoto', message);
  });

  socket.on('messageEfterpiStep', function (message) {
    io.emit('messageEfterpiStep', message);
  });

  socket.on('messagegame2End', function (message) {
    io.emit('messagegame2End', message);
  });

  socket.on('messageRaftis_3_talkings', function (message) {
    io.emit('messageRaftis_3_talkings', message);
  });

  socket.on('messageClothes', function (message) {
    io.emit('messageClothes', message);
  });

  socket.on('messageRaftis_End', function (message) {
    io.emit('messageRaftis_End', message);
  });

  socket.on('messageFwtografos_3_talkings', function (message) {
    io.emit('messageFwtografos_3_talkings', message);
  });

  socket.on('messagePhotoboard', function (message) {
    io.emit('messagePhotoboard', message);
  });

  socket.on('messageFwtografos_End', function (message) {
    io.emit('messageFwtografos_End', message);
  });

  socket.on('messageNikolasBubble', function (message) {
    io.emit('messageNikolasBubble', message);
  });

  socket.on('messageEfterpiBubble', function (message) {
    io.emit('messageEfterpiBubble', message);
  });
  socket.on('startElenitsa', function (message) {
    io.emit('startElenitsa', message);
  });
  socket.on('resetGamePapou', function (message) {
    io.emit('resetGamePapou', message);
  });
  socket.on('resetGameForGiagia', function (message) {
    io.emit('resetGameForGiagia', message);
  });
  socket.on('resetGameIce', function (message) {
    io.emit('resetGameIce', message);
  });
  socket.on('resetGameMonitor', function (message) {
    io.emit('resetGameMonitor', message);
  });
  socket.on('scene4', function (message) {
    io.emit('scene4', message);
  });
});


// parser.on('data', function(data) {
//   var buf = Buffer.from(JSON.stringify(data)).toString('base64');
//   console.log(buf);
//   io.emit('data', buf);
// });

// parserCOM5.on('data', function(data) {
//   console.log('COM5 data: ' + data);
//   var buf = Buffer.from(JSON.stringify(data)).toString('base64');
//   console.log('COM5: ' + buf);
//   io.emit('elenitsaStart', 1);
// });




// var portScene4 = new SerialPort(
//   { 
//     path: 'COM4', 
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
//   }
// );
// const parserScene4 = portScene4.pipe(new DelimiterParser({ delimiter: '\n' }));

// parserScene4.on('data', function(data) {
//   console.log('scene4 data :' + data);
//   var buf = Buffer.from(JSON.stringify(data)).toString('base64');
//   console.log('scene4:' + buf);
//   io.emit('scene4', buf);
// });


http.listen(3000, function() {
  console.log('listening on *:3000');
});