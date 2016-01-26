/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var marko = require('marko');
var temaplate = marko.load(require.resolve('../../views/base.marko'));
module.exports = {
  doRender: function (req, res) {
    temaplate.stream().pipe(res);
  }
};
