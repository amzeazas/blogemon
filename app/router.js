import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact', function() {
    this.route('address');
    this.route('phone');
    this.route('email');
  });
});

export default Router;
