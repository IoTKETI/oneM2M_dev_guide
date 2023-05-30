/**
 *
 */
let Server = require('http');
let svr, port = 12345;

svr = Server.createServer ((req, res) => {
	res.writeHead(200, {'X-M2M-RSC' : 2000});
	var body = new String;
	
	console.log('request url: ', req.url)
	res.end(req.url);
	req.on('data', (chunk) => {
		body += chunk.toString();
		console.log(JSON.stringify(JSON.parse(chunk.toString()), null, 2) + '\n');
		//console.log(chunk.toString() + '\n');
	}).on('end', () => {
		res.end(body);
	});


});
svr.listen(port, 'localhost');
svr.close();

console.log('server is running at ', port);
