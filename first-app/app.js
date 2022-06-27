/* const path = require('path')

var pathObj = path.parse(__filename);

console.log(pathObj); */
//const EventEmitter = require('events');

//Register a Listener
//emitter.on('messageLogged',function(arg) {


/* const LOGGER = require('./logger');
const logger = new LOGGER();

logger.on('messageLogged', (arg) => {
    console.log('Listerner called', arg);
}); 
logger.log('message'); */

//http module

const http = require('http');

const server = http.createServer((req, res) =>{
  if(req.url === '/'){
    res.write('Hello World');
    res.end();

  }
  if (req.url === '/api/courses'){
    res.write(JSON.stringify([1,2,3,4]));
    res.end();

  }

  
});


server.listen(3000);

console.log('Listening on port 3000...');


