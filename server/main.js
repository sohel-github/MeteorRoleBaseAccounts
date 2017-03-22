import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	Meteor.methods({
      "userExists": function(username){
          return !!Meteor.users.findOne({username: username});
      },
  });

});



var postSignUp = function(userId, info){
	Roles.addUsersToRoles(userId, ['users', info.profile.profession]);
}

AccountsTemplates.configure({
	postSignUpHook: postSignUp
});
