var myEmitter = require('./myemitter');

var event = 'user_registered';

myEmitter.on(event, (user) => {
    console.log('received event ' + event);
    console.log(user);
});