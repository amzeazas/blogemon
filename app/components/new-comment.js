import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        text: this.get('text'),
        user: this.get('user'),
        post: this.get('post'),
      };
      this.set('addNewComment', false),
      this.sendAction('save2', params);
    }
  }
});
