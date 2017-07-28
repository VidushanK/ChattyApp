
const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  
  console.log('Client connected');
  // receives the message and broadcasts the message to every client
  // changes the types of message
  ws.on('message', function incoming(data) {
    var message = JSON.parse(data)
    console.log("Name", message.username,"says", message.content);
    if (message.type === 'postMessage') {
      message.type = 'incomingMessage';
    } else if (message.type === 'postNotification') {
      message.type = 'incomingNotification';
    }
      broadcast(message);
  ;});

  // broadcast the current client size to every client
  const clientCount = {
    type: 'incomingClientSize',
    clientSize: wss.clients.size
  }
  broadcast(clientCount);

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  // once a user closes their browser, the client size will be lowered and be broadcasted
  ws.on('close', () => {
    console.log('Client disconnected');
    broadcast(clientCount);
  });
});

// send every client a msg
function broadcast(msg) {
  for(let client of wss.clients) {
    client.send(JSON.stringify(msg));
  }
}
