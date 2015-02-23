



Session.set("page","header");
Template.user_loggedout.events({
	"click #login": function (e, tmpl) {
	Meteor.loginWithTwitter= function (err) {
		if (err) {
			//error handling
		} else {
			//show an alert
		}
	}
	}
	
});

Template.user_loggedin.events({
	"click #logout": function (e, tmpl) {
		Meteor.logout(function(err) {
			if (err) {
				//show err message
			} else {
				//show alert
			}
		});
	},

});

Template.SignUp.events = {
  		'click input.add': function () {
  			var nonprofit= document.getElementById("np").value;
  			var location = document.getElementById("city").value;
  			var name = document.getElementById("name").value;
  			var contact = document.getElementById("email").value;
  			var description = document.getElementById("about").value;
  			var picture = document.getElementById("pic").value;
  			var category = document.getElementById("category").value;
  			var number = document.getElementById("number").value;
  			NPO.insert({nonprofit: nonprofit, location:location, 
  				name: name, contact: contact, description: description, picture: picture, 
  				category:category, number: number,});
  			
  			Session.set("page","Volunteer");
  			},
  		'click input.back': function () {
  			Session.set("page","Volunteer");
  		},
  		
	

  	
  	};
  		
Template.NPlist.Non_Profits = function (category) {
    return NPO.find({category:category},{sort: {location:1}});
    
  	
	};

Template.NPlist.getPage = function (){
	 return Session.get("page");

	};

Template.Volunteer.events = {
	'click input.Education': function () {
	Session.set("page","Education");//in the future set NPlist(generic) to education specific page
	},
	'click input.Register': function () {
	Session.set("page","SignUp");
	},
	'click input.Environment': function () {
	Session.set("page","Environment");
	},
	'click input.Animals': function () {
	Session.set("page","Animals");
	},
	'click input.Justice': function () {
	Session.set("page","Social Justice");
	},
	'click input.Other': function () {
	Session.set("page","Other");
	},
	
  };
  
Template.TopButtons.events = {
	'click input.VButton': function () {
		Session.set("page","Volunteer");
	},
	'click input.PButton': function () {
		Session.set("page","Profile");
	},

};


Template.bodyTemplate.isNPlist= function(){
	return Session.equals("page","NPlist");
	};
Template.bodyTemplate.isSignUp= function(){
	return Session.equals("page","SignUp");
};
Template.bodyTemplate.isEducation= function(){
	return Session.equals("page","Education");//again NPlist will later be the education specific template
	};
Template.bodyTemplate.isEnvironment= function(){
	return Session.equals("page","Environment");//again NPlist will later be the education specific template
	};
Template.bodyTemplate.isAnimals= function(){
	return Session.equals("page","Animals");//again NPlist will later be the education specific template
	};
Template.bodyTemplate.isJustice= function(){
	return Session.equals("page","Social Justice");//again NPlist will later be the education specific template
	};
Template.bodyTemplate.isVolunteer = function(){
	return Session.equals("page","Volunteer");
	};
Template.bodyTemplate.isOther = function(){
	return Session.equals("page","Other");
	};
Template.bodyTemplate.isheader = function(){
	return Session.equals("page","header");
	};
Template.bodyTemplate.isProfile = function(){
	return Session.equals("page","Profile");
};


Template.Profile.events={
	'click button.hours': function(){
	var e = document.getElementById("select1");
    var strSel = + e.options[e.selectedIndex].value;
    //var hours = 
    alert(strSel);
  }
}

 


 
 
 
  