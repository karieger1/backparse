var React = require("react");
var _ = require("underscore");
var validator = require("validator");
var Register = require("../models/UserModel");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="userinfo">

		
				<form onSubmit = {this.verify}>

					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
					</div>
					
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>

					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Confirm Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					
					<center><button type="submit" className="btn btn-default">Submit</button></center>
				</form>


			</div>
		);
	},

	verify: function(e){
		e.preventDefault();
		//console.log("form submitted")
		var NewUser = new Register({
			email: this.refs.email.getDOMNode().value,
			password: this.refs.password.getDOMNode().value,
			confirmPassword: this.refs.confirmPassword.getDOMNode().value
		});

		
			if(this.refs.password.getDOMNode().value 
				!= this.refs.confirmPassword.getDOMNode().value) {

				error.password = "Passwords do not match!"

			}
		

		var error = {};

		if(!NewUser.get("email")) {
			error.email = "You must enter an email address!";
		}

		else if(!validator.isEmail(NewUser.get("email")) {
			error.email = "The email looks wrong.";
		}
  
        if(!NewUser.get("password")) {
			error.password = "Password cannot be left blank.";
        } 
        else if (!((NewUser.get("password")).length >= 6)) {
        	error.password = "Password must be at least 6 characters.";
        }
        //need to make sure both passwords match


//do backbone router assignment, profile w/ models