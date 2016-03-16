/**
 * This is just an example file created at Wed Mar 16 2016 13:46:18 GMT+0530 (India Standard Time).
 *
 */

var React = require("react");
var profileAction = require("../actions/profile.Action");
var profileStore = require("../stores/profile.Stores");
var profileStyle = require("../../styles/profile.scss");

var Profile = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  getDefaultProps : function(){
    return{
      userName: 'User 1',
      avatar : 'https://www.wagonhq.com/images/posts/react.png',
      jobTitle : 'UI Developer',
      bio : 'abc bla bla bla bla',
      rank : 10
    }
  },
  render: function(){
    return <div>
    	<div className="user-profile">
			<img className="avatar" src={this.props.avatar} alt={this.props.userName} />
		    <div className="username">{this.props.userName}</div>
		  <div className="bio">
		  	{this.props.jobTitle}
		  </div>
		    <div className="description">
		      {this.props.bio}
		  	</div>
		  	<div className="rank">
		      {this.props.rank}
		  	</div>		  
		</div>
    </div>
  }
});

if ( document.getElementById('profile') ) {
	React.render(<Profile />, document.getElementById('profile'));
}else{
	console.log ( 'profile id is not found' );
}
