
/**
 * Module dependencies.
 */

var assert = require('assert');
var slice = [].slice;

/**
 * Wrap emitter and return a thunk.
 *
 * @param {Emitter} e
 * @return {Function}
 * @api public
 */

module.exports = function(e){
  return function(done){
    var emit = e.emit;
    e.emit = function(type){
      if ('error' != type) emit.apply(e, arguments);
      var args = slice.call(arguments, 1);
      done(null, new Event(type, args));
    };
  }
};

/**
 * Initialize an event.
 *
 * @param {String} type
 * @param {Arguments} args
 * @api private
 */

function Event(type, args) {
  this.type = type;
  this.args = args;
}