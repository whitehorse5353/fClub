/**
 * This is just an example file created at Thu Feb 04 2016 19:30:25 GMT+0530 (India Standard Time).
 *
 */

var formAdminDispatcher = require("../dispatcher/formAdmin.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var formAdminStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

formAdminDispatcher.register(function(payload){
  /* store private methods */

  formAdminStore.emitChanges();

  return true;
});

module.exports = formAdminStore;
