import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  user: DS.attr(),
  post: DS.belongsTo('post', { async: true}),
});
