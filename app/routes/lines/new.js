import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('line');
  },

  actions: {
    save(record) {
      record.save()
        .then(() => this.transitionTo('lines'));
    },

    willTransition() {
      const record = this.controller.get('model');
      if (record.get('isNew')) {
        this.store.unloadRecord(record);
      }
    },
  },
});
