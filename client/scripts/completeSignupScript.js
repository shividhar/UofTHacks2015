Template.completesignup.events({
	'click ###Form SUbmit button###' : function(e, t){
		e.preventDefault();
		// retrieve the input field values
		var email = t.find('#login-email').value
		, password = t.find('#login-password').value;

		// Trim and validate your fields here.... 

		// If validation passes, supply the appropriate fields to the
		// Meteor.loginWithPassword() function.
		Meteor.loginWithPassword(email, password, function(err){
		if (err){return alert("Login failed. Try Again.")}
			Router.go("homePage");
		});
		return false; 
	}
});