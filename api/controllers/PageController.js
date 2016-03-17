/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var path = require('path');
module.exports = {
  doRender: function (req, res) {
    var baseTemplate = require('marko').load(require.resolve(path.resolve(__dirname, '../../views/root.marko')));
    baseTemplate.render({
      host: req.headers.host
    }, res);
  }
};
