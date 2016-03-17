var React = require("react");
var ReactDOM = require('react-dom');
var <%= filename %>Style = require("./styles/<%= filename %>.scss");

var Component = require('./scripts/index');

ReactDOM.render(<Component />, document.getElementById("<%= filename %>"));
