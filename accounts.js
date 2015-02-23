Accounts.onCreateUser(function(options, user) {
	var accessToken= user.services.twitter.accessToken,
		result,
		profile;
	result = Meteor.http.get("https://api.twitter.com/1.1/account/verify_credentials.json", {	
		params: {
			access_token: accessToken
		}
	});
	
	if (result.error)
		throw result.error;
	
	profile_data = Meteor.http.get("https://api.twitter.com/1.1/users/show.json", {
		
		params: {
			screen_name:rsarver
		}
	});	
	
	profile=_.pick(profile_data.data,
		"name",
		"profile_image_url",
		"location",
		"user_id");
	user.profile = profile;
	
	return user;
	
});
		