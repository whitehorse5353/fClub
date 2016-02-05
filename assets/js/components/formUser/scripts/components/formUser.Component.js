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
    return (
    	<div className="userForm">
			<form>
				<div className="row">
					<div classNme="input-field col s12">
						<label htmlFor="form-user-question">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </label>
					</div>
				</div>
				<div className="row">
					<div classNme="input-field col s12">
						<label htmlFor="form-user-comment">Comments</label>
						<textarea id="form-user-comment" className="materialize-textarea" length="120"></textarea>
					</div>
				</div>
				<div className="row">
					<div className="file-field input-field col s12">
						<div className="btn">
							<span>Zip file </span>
							<input type="file" multiple />
						</div>
						<div className="file-path-wrapper">
							<input className="file-path validate" type="text" placeholder="Upload one or more files" />
						</div>
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

if ( document.getElementById('formUser') ) {
	React.render(<FormUser />, document.getElementById('formUser'));
}else{
	console.log ( 'formUser id is not found' );
}
