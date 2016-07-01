import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('root', {path: '/'});

  this.route('lines', function() {
    this.route('new');
    this.route('show', {path: ':line_id'});
    this.route('edit', {path: ':line_id/edit'});
    this.route('destroy', {path: ':line_id/destroy'});
  });
});

export default Router;
