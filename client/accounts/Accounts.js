AccountsTemplates.configure({
	showLabels: false,
	//socialLoginStyle: "popup",
	showAddRemoveServices: false,
	showForgotPasswordLink: true
});


AccountsTemplates.addFields([
	{
		_id: 'username',
		type: 'text',
		displayName: 'Username',
		required: true,
		func: function(value){
        if (Meteor.isClient) {
            console.log("Validating username...");
            var self = this;
            Meteor.call("userExists", value, function(err, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    },
	}, {
		_id: 'phone',
		type: 'tel',
		displayName: 'Phone',
		required: true,
		func: function(){
			if (Meteor.isServer){
	          if (isValidPhone(number))
	              return false; 
	          return true;
	        }
		},
		errStr: 'Invalid Phone number!'
	}, {
		_id: 'profession',
		type: 'select',
		displayName: 'Profession',
		required: true,
		select: [
			{
				text: 'Select Role',
				value: ''
			}, {
				text: 'Developer',
				value: 'developer'
			}, {
				text: 'Designer',
				value: 'designer'
			}, {
				text: 'Other',
				value: 'other'
			}
		]
	}
]);