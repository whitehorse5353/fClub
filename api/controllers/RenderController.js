/**
 * RenderController
 *
 * @description :: Server-side logic for managing renders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var React = require('react');
var path = require('path');
var superagent = require('superagent');
var Promise = require('bluebird');
require('node-jsx').install();
module.exports = {
  doRenderComponent: function (componentPath, exportedClass) {
    var Component = require(componentPath)[exportedClass];
    this.getData()
    .then(function(res){
      //console.log(res);
    });
    return React.renderToString(React.createElement(Component));
  },
  getData: function(){
    return new Promise(function(resolve, reject){
      superagent.get('http://api.myapifilms.com/imdb/idIMDB?title=matrix&token=9f0123a3-06f6-44a8-903f-89b16c3cf5f6')
        .end(function(err,res){
          if(err) { reject(err) }
          resolve(res.body);
        });
    });
  }
};

