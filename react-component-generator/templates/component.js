/**
 * This is just <%= whatIsThis %>.
 *
 */

var React = require("react");

var <%= filename.substring(0, 1).toUpperCase() + filename.substring(1, filename.length) %> = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div><%= filename %> Component render Code</div>
  }
});

module.exports = <%= filename.substring(0, 1).toUpperCase() + filename.substring(1, filename.length) %>;
