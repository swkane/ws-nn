// Make Connection

// we have access to io variable becuase we have loaded in the io library in our index.html
let socket = io.connect('http://localhost:4000');

let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// Listen for events

socket.on('chat', data => {
    output.innerHTML += `<p><strong> ${data.handle}:</strong> ${data.message}</p>`;
});
