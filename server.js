const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server
const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Read the index.html file
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If there's an error reading the file, send a 404 response
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            // If the file is successfully read, send its contents as the response
            res.end(data);
        }
    });
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
