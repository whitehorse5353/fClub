/**
 * This is just an example file created at Wed Mar 16 2016 13:46:18 GMT+0530 (India Standard Time).
 *
 */

var profileDispatcher = require("../dispatcher/profile.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var profileStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

profileDispatcher.register(function(payload){
  /* store private methods */

  profileStore.emitChanges();

  return true;
});

module.exports = profileStore;
