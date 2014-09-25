// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    //set the initial values for 'votes' to 0
    this.set({'votes': 0});
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function(song){
  	this.trigger('enqueue', this);
  },
  dequeue: function(){
  	this.trigger('dequeue', this);
  },
  endPlay: function(){
  	this.trigger('endPlay', this);
  },


  votes: function(){
    //return the votes attribute on this model.  Stuck?  check out http://backbonejs.org/#Model-get
    return this.get('votes');
  },
  upvote: function(){
    //write a function that will set the 'votes' to the current votecount plus one.  Stuck?  check out http://backbonejs.org/#Model-set
    this.set('votes', this.votes()+1);
  }
});
