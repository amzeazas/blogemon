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
  this.route('post', {path: '/post/:post_id'});
});

export default Router;
