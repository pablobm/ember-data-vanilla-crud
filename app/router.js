import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lines', function() {
    this.route('new');
    this.route('show', {path: ':id'});
    this.route('edit', {path: ':id/edit'});
    this.route('destroy', {path: ':id/destroy'});
  });
});

export default Router;
