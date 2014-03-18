
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
      done(null, { type: type, args: args });
    };
  }
};