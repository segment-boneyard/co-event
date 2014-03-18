
var Emitter = require('events');
var event = require('..');
var co = require('co');

describe('event(emitter)', function(){
  it('should return events in sequence', function(done){
    var emitter = new Emitter;

    co(function *(){
      var e;
      while (e = yield event(emitter)) {
        switch (e.type) {
          case 'foo':
            e.args.should.eql([1, 2]);
            break;

          case 'bar':
            e.args.should.eql([]);
            break;

          case 'error':
            e.args.should.eql([new Error('test')]);
            done();
            break;
        }
      }

    })();

    emitter.emit('foo', 1, 2);
    emitter.emit('bar');
    emitter.emit('error', new Error('test'));
  })
})