import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		Ember.$(document).ready(function() {
  		/* Pop Video Box */  
		  Ember.$('.playVideoButton').fancybox({
		    'padding': 0,
		    'width': '100%',
		    'height': '100%',
		    'type': 'iframe'
		    });
		});
	}
});
