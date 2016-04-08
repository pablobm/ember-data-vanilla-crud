import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('line', params.id);
  },

  actions: {
    save(record) {
      record.save()
        .then(() => this.transitionTo('lines'));
    },

    willTransition() {
      const record = this.controller.get('model');
      record.rollbackAttributes();
    },
  },
});
