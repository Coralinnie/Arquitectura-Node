const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('Before');
        this.emit('start');
        cb(); //callBack 
        this.emit('finish');
        console.log('after');
    }
}

const logger = new Logger();

//SE PUEDE REALIZAR DIFERENTES PETICIONES CADA VEZ QUÉ OCURRE UN EVENTO
logger.on('start', () => console.log('Starting'));
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log("It's Done"));

//logger.execute(() => console.log('hello world')); 
logger.execute(() => setTimeout(() => console.log('hello world'), 500)); 
