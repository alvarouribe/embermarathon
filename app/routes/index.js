import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		$(document).ready(function() {
  		/* Pop Video Box */  
		  $('.playVideoButton').fancybox({
		    'padding': 0,
		    'width': '100%',
		    'height': '100%',
		    'type': 'iframe'
		    });
		});
	}
});
