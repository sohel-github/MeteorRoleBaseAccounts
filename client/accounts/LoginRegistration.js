Template.MainNav.events({
	'click .logout': function(){
		Meteor.logout(function(){
			FlowRouter.go('/');
		});
	}
});