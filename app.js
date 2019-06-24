const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req,res) => {
   res.end('hey');
});

server.listen(3000);

const io = socketio.listen(server);

io.sockets.on('connection',(socket) => {
   console.log('Kullanıcı Bağlandı');

   setInterval(() => {
      socket.emit('merhaba de',{country:'Türkiye'});
   },1000);

   socket.on('selamVer',(data)=>{
      console.log('selam ' + data.name + ' ' + data.city);
   });

   socket.on('disconnect',() => {
      console.log('Kullanıcı Ayrıldı.');
   })
});

