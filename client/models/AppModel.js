// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    this.set({'votes': 0});

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      if(this.get('songQueue').length < 1){        
        this.set('currentSong', song);
      }
    }, this);

    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
    }, this);

    params.library.on('enqueue', function(song){
    this.get('songQueue').add(song);
      // if(this.get('songQueue').length === 1){
      //   this.get('songQueue').playFirst();
      // }
    }, this);

   params.library.on('endPlay', function(song){
    this.get('songQueue').remove(song);
    // this.get('songQueue').playFirst();
    this.set('currentSong', this.get('songQueue').at(0));
    }, this);

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
