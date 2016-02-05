/**
 * This is just an example file created at Fri Feb 05 2016 07:16:52 GMT+0530 (India Standard Time).
 *
 */

var React = require("react");
var formUserAction = require("../actions/formUser.Action");
var formUserStore = require("../stores/formUser.Stores");
var formUserStyle = require("../../styles/formUser.scss");

var FormUser = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div>formUser Component render Code</div>
  }
});

if ( document.getElementById('formUser') ) {
	React.render(<FormUser />, document.getElementById('formUser'));
}else{
	console.log ( 'formUser id is not found' );
}
