const envConfig = require('./configuration');
const discountenvConfig = require('./discountConfig');
const http = require('http');

console.log('port number is ' + envConfig.PortNumber);
const port = envConfig.PortNumber || 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	const msg = 'Hello Node!';
	res.end(JSON.stringify({ data: msg }));
});

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}/`);
});
