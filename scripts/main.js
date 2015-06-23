var React = require('react');
var UserComponent = require("./components/usercomponent");
var Backbone = require("backbone");
Backbone.$ = require("jquery");
var UserInfo = require("./components/usercomponent");



var Pages = Backbone.Router.extend({

  routes: {
  	"": "register",
  	"register": "register",
  	"login": "login",
  	"profile": "profile"
   
  },

	register: function() {
    	console.log("this is the register page");
    	React.render(<UserInfo/>, document.querySelector('#container'));
  },

	// login: function() {
	// 	console.log("this is the login page");
 //  		React.render(<Login/>, document.querySelector('#container'));
 //  },

 //  	profile: function() {
 //  		console.log("this is the profile page");
 //  	}

});
var pages = new Pages();
Backbone.history.start();