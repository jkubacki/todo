import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCompleted: function(key, value) {
    return this.get('model').get('isCompleted');
  }.property('model.isCompleted')
});
