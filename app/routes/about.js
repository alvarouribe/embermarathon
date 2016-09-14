import Ember from 'ember';

export default Ember.Route.extend({
	actions: 
	{
		error(error)
		{
			console.log('About - error', error);
      this.transitionTo('/');
		}	
	}
});
