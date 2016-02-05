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
    return (
    	<div className="adminForm">
			<form>
				<div className="row">
					<div classNme="input-field col s12">
						<i className="material-icons prefix">mode_edit</i>
						<label htmlFor="form-admin-challenge-question">Challenge Question</label>
						<textarea id="form-admin-challenge-question" className="materialize-textarea" length="120"></textarea>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s3">
						<label htmlFor="form-admin-start-date">Start Date</label>
						<input id="form-admin-start-date" type="date" className="datepicker" />
					</div>
					<div className="input-field col s3">
						<label htmlFor="form-admin-start-time">Start Time</label>
						<input id="form-admin-start-time" type="date" className="timepicker" />
					</div>
					<div className="input-field col s3">
						<label htmlFor="form-admin-end-time">End Time</label>
						<input id="form-admin-end-time" type="date" className="timepicker" />
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
					</div>
				</div>

			</form>
    	</div>
    );
  }
});

if (document.getElementById('formAdmin')) {
	React.render(<FormAdmin />, document.getElementById('formAdmin'));
	try{
		$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 1 // Creates a dropdown of 15 years to control year
		});

		$('.timepicker').pickatime({

		});
	}catch(e){
		console.log(e.message);
	}
	  
}else{
	console.log('formAdmin id is not found');
}
