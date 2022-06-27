const EventEmitter = require('events');


var url = 'http://mylogger.io/log';

class LOGGER extends EventEmitter{
 log(message){

    console.log(message);

    
    //Raise an event
    this.emit('messageLogged', { id: 1, url: 'http://'});
 }
}


module.exports = LOGGER;