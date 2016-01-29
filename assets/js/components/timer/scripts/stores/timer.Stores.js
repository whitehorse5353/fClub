/**
 * This is just an example file created at Thu Jan 28 2016 20:36:18 GMT+0530 (India Standard Time).
 *
 */

var timerDispatcher = require("../dispatcher/timer.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var timerStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

timerDispatcher.register(function(payload){
  /* store private methods */

  timerStore.emitChanges();

  return true;
});

module.exports = timerStore;
