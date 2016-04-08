import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.find('line', params.id);
  },

  actions: {
    confirm(record) {
      record.destroyRecord()
        .then(() => this.transitionTo('lines'));
    },
  }
});
