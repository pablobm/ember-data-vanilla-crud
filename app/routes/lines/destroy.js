import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    confirm(record) {
      record.destroyRecord()
        .then(() => this.transitionTo('lines'));
    },
  }
});
