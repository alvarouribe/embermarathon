import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/', { path: 'index'} );
  this.route('about');
});

export default Router;
