const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve your static files (html, css, js) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route handler for the root URL ("/")
app.get('/', (req, res) => {
  // Send the index.html file when the root URL is requested
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.IO logic goes here...

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('A client has connected');
  // Additional Socket.IO logic can be added here
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
