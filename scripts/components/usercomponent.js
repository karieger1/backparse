var React = require("react");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="userinfo">

		
				<form onSubmit = {this.verify}>
					<div className = "form-group">
						<label htmlFor="name">Full Name</label>
						<input type="text" className="form-control" placeholder="Joffrey Baratheon" />
					</div>

					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
					</div>
					
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
				 
					
					<center><button type="submit" className="btn btn-default">Submit</button></center>
				</form>


			</div>
		);
	},

	verify: function(e){
		e.preventDefault();
		console.log("form submitted")
	}
});

//do verification stuff in here

//do backbone router assignment, profile w/ models