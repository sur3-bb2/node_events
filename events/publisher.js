var myEmitter = require('./myemitter');

var user = {
    name: 'suresh babu',
    company: 'target'
};

var event = 'user_registered';

myEmitter.emit(event, user);