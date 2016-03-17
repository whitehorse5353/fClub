var React = require('react');
var ReactDOMServer = require('react-dom/server');
var extend = require('react/lib/Object.assign');
var path = require('path');
var api = require('../../middleware/serviceAPI');
require('babel-register')({
  presets: ['es2015', 'react']
});
module.exports = function (input, out) {
  var asyncOut = out.beginAsync();
  var obj = extend(input, {
    isServer: input.isServer ? input.isServer : true
  });
  if (!obj.dataComponentName || !obj.dataRenderPath) {
    if (obj.dataComponentName) {
      obj.dataRenderPath = obj.dataComponentName;
    } else if (obj.dataRenderPath) {
      obj.dataComponentName = obj.dataRenderPath;
    } else {
      return asyncOut.end('Component reference data-component-name or data-render-path is required');
    }
  }
  if (!obj.dataContentModel) {
    return asyncOut.end('Component ' + obj.dataComponentName + ' has no data-content-model available');
  } else if (!obj.dataComponentUrl) {
    return asyncOut.end('Component ' + obj.dataComponentName + ' has no data-component-url available');
  }
  var renderPath = obj.dataRenderPath,
    state = {},
    hostURL = 'http://' + input.dataHost + obj.dataContentModel;
  //iso = out.global.iso;
  if (obj.isServer === 'true') {
    console.log(path.resolve(__dirname, '../../assets/js/' + input.dataComponentUrl + '/scripts/'));
    var component = require(path.resolve(__dirname, '../../assets/js/' + input.dataComponentUrl + '/scripts/'));
    api.getData(hostURL)
      .then(function (res) {
        state[renderPath] = res;
        state['host'] = hostURL;
        state['component_meta'] = obj;
        //if (Object.keys(res).length) {
        try {
          var fragment = '<div id=' + renderPath + '>' + ReactDOMServer.renderToString(React.createElement(component, {
              data: res,
              contentModel: obj.dataContentModel
            })) + '</div>';
          //iso.add('', state, renderPath);
          asyncOut.end(fragment);
        } catch (reactComponentRenderErr) {
          out.global.logger.error({err: reactComponentRenderErr}, 'React Component rendering failed from server');
          asyncOut.end(reactComponentRenderErr);
        }
        //} else {
        //    return asyncOut.end('Please verify ' + obj.dataComponentName + ' component data model');
        //}
      }, function (err) {
        out.global.logger.error({err: err}, 'React Component API data fetch failed');
        console.log(err);
      });
  } else {
    state[renderPath] = '';
    state['host'] = hostURL;
    state['component_meta'] = obj;
    var fragment = '<div id=' + renderPath + '></div>';
    //iso.add('', state, renderPath);
    asyncOut.end(fragment);
  }
};
