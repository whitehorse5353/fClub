/**
 * This is just an example file created at Thu Feb 04 2016 19:30:25 GMT+0530 (India Standard Time).
 *
 */

var React = require("react");
var formAdminAction = require("../actions/formAdmin.Action");
var formAdminStore = require("../stores/formAdmin.Stores");
var formAdminStyle = require("../../styles/formAdmin.scss");

var FormAdmin = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div>
			<div className="row">
			    <form className="col s12">
			      <div className="row">
			        <div className="input-field col s6">
			          <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
			          <label htmlFor="first_name">First Name</label>
			        </div>
			        <div className="input-field col s6">
			          <input id="last_name" type="text" className="validate" />
			          <label htmlFor="last_name">Last Name</label>
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
			          <label htmlFor="disabled">Disabled</label>
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <input id="password" type="password" className="validate" />
			          <label htmlFor="password">Password</label>
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <input id="email" type="email" className="validate" />
			          <label htmlFor="email">Email</label>
			        </div>
			      </div>
			    </form>
			  </div>
    </div>
  }
});

if (document.getElementById('formAdmin')) {
	React.render(<FormAdmin />, document.getElementById('formAdmin'));
}else{
	console.log('formAdmin id is not found');
}
