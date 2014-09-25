// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!


  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
      // console.log("Here2", this.model.attributes);
      //this.model.enqueue(this.model.attributes);
      //sb : Add song to Song Queue
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
