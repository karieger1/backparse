var React = require("react");

var UserComponent = React.createClass({
  render: function() {
    return (
      <div className="userinfo">
    
		<form>
			  <div className="form-group">
			    <label ="exampleInputEmail1">Email address</label>
			    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
			  </div>
			  <div className = "form-group">
			  	<label="First Name">First name</label>
			  	<input type="text" className="form-control" />
			  </div>
			  <div className="form-group">
			    <label for="exampleInputPassword1">Password</label>
			    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			  </div>
			 
			  <button type="submit" className="btn btn-default">Submit</button>
		</form>


      </div>
    );
  },
});

React.render(
  <userinfo />,
  document.getElementById('container')
);