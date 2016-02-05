/**
 * This is just an example file created at Fri Feb 05 2016 07:16:52 GMT+0530 (India Standard Time).
 *
 */

var formUserDispatcher = require("../dispatcher/formUser.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var formUserStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

formUserDispatcher.register(function(payload){
  /* store private methods */

  formUserStore.emitChanges();

  return true;
});

module.exports = formUserStore;
