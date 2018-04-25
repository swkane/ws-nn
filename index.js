let express = require('express');
let socket = require('socket.io');

let app = express();
let server = app.listen(4000, () => console.log("Listening to request on port 4000"));

app.use(express.static('public'));

var io = socket(server);

io.on('connection', socket => {
    console.log("made socket connection", socket.id);

    socket.on('chat', data => {
        console.log(data);
        io.sockets.emit('chat', data);
    });
});