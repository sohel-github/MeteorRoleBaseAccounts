FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// Dashboard Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
    	if(Meteor.userId()){
    		BlazeLayout.render("AppLayout", {main: "Dashboard"});
    	}else{
    		FlowRouter.go('/');
    	}
    }
});