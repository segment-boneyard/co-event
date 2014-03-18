
var Emitter = require('events');
var event = require('..');
var co = require('co');

var queue = new Emitter;

co(function *(){
  var e;
  out: while (e = yield event(queue)) {
    switch (e.type) {
      case 'job':
        console.log('job : %s', e.args[0].id);
        break;

      case 'close':
        console.log('done');
        break out;
    }
  }

  process.exit();
})()

setInterval(function(){
  queue.emit('job', { id: Math.random() });
}, 100);

setTimeout(function(){
  queue.emit('close');
}, 2000);