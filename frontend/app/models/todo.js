import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn Ember',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Create Todo mvc',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Just hack it',
      isCompleted: false
    }
  ]
});

export default Todo;
