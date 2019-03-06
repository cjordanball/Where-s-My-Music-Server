var http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {contentType: 'text/html'})
	res.end('<h1>Welcome to the WMM API!')
});

server.listen(3600)
