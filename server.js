let express = require('express');

let server = express();

server.use(express.static('.'));
server.get('/', (req,res)=>{
	res.send('hello');
});
server.listen(8080, ()=>{
	console.log('listen 8080');
});
