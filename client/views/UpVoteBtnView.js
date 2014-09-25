// PlayerView.js - Defines a backbone view class for the music player.
var UpVoteBtnView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<button class="upvoteBtn"/></>',

  template: _.template('<button class="upvoteBtn">UpVote</button>'),

  initialize: function() {
  },

  events: {
    'click': function() {
      this.model.upvote();
      //this.model.dequeue();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr(this.template());
  }

});