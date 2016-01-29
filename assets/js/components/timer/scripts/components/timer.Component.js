/**
 * This is just an example file created at Thu Jan 28 2016 20:36:18 GMT+0530 (India Standard Time).
 *
 */

var React = require("react");
var timerAction = require("../actions/timer.Action");
var timerStore = require("../stores/timer.Stores");
var timerStyle = require("../../styles/timer.scss");

var Timer = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  getDefaultProps : function(){
    return {
      endTIme : 'January 28 2016 21:59:59'
    }
  },
  render: function(){
    return <div>
      <div className="timer-component">
        {this.props.endTime}
      </div>
    </div>
  }
});

React.render(<Timer />, document.getElementById('timer'));
