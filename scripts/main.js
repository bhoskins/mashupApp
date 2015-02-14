(function(){
  'use strict';

// anxious, bored, cold, confident
// curious, disappointed, disgusted, exhausted
// happy, hot, hysterical, interested
// lonely, satisfied, surprised, thoughtful

// giph public key dc6zaTOxFJmzC
// giph search path /v1/gifs/search
// Parameters

// q - search query term or phrase
// limit - (optional) number of
//    results to return, maximum 100.
//    Default 25.
// offset - (optional) results
//   offset, defaults to 0.
// rating - limit results to those
//   rated (y,g, pg, pg-13 or r).

//  data: [ { embed_url, rating: }]
// pagination: count

// get gif by id path: /v1/gifs/<gif_id>

// "embed_url": "http://giphy.com/embed/feqkVgjJpYtjy",

//random gif
//http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho

// How to get play and embed url

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=anxious+nervous&api_key=dc6zaTOxFJmzC&limit=10");
xhr.done(function(data) {
   console.log("success got data",
 data);
 console.log("play url: ", data.data[0].images.fixed_height.url);
 console.log("embed url: ", data.data[0].embed_url);
 var gifPlayUrl = data.data[0].images.fixed_height.url;
 var gifEmbedUrl = data.data[0].embed_url;
});

/**********************************************
    Models
*******************************************/
var searchTermPre = "\?q\=";
var searchTermFull;
var gifPlayUrl;
var gifEmbedUrl;
var giphyUrlBase = "http://api.giphy.com/v1/gifs";
var giphyApiKey = "&api_key=dc6zaTOxFJmzC";
var giphyLimit = "&limit=10";
var giphySearchUrl = "http://api.giphy.com/v1/gifs/search";

function giphyFetchPlayUrls(searchTerm){
  searchTermFull = searchTermPre + searchTerm;
  var gifUrl = (('http://api.giphy.com/v1/gifs/search&api_key=dc6zaTOxFJmzC').slice(0, 35));
  gifPlayUrl = gifUrl.concat(searchTermPre, searchTerm, giphyApiKey, giphyLimit );
  console.log('gifPlayUrl: '  + gifPlayUrl );

  // anxiousDataModel.get(gifEmbedUrl);
  // console.log("function giphyFetch: " + gifPlayUrl);
  // anxiousDataModel.save();
}


var EmotionDataModel = Backbone.Model.extend({

  url: giphySearchUrl + searchTermPre + giphyApiKey,
  defaults: {
    embed_url: "",
    searchTerm: ""
  }
});


var anxiousDataModel = new EmotionDataModel({
  // anxiousDataModel.fetch().then(function(){
  //   searchTerm = searchTermPre + "anxious+nervous";
  //   anxiousDataModel.get(searchTerm + giphyApiKey + giphyLimit);
  //   anxiousDataModel.get(gifEmbedUrl);
  //   // anxiousDataModel.save();

    fetch: function(searchTerm){
      searchTerm = 'anxious+nervous';
      giphyFetchPlayUrls(searchTerm);
    }
  });

  anxiousDataModel.fetch('anxious+nervous');

var emotionDataModel = new EmotionDataModel();


var EmotionsCollection = Backbone.Collection.extend({
  model: EmotionDataModel
});

var EmotionsView = Backbone.View.extend({
  collection: "EmotionsCollection",
  el: '.container',

});

var emotionsAll = new EmotionsView();

var AnxiousView = Backbone.View.extend({
  collection: "EmotionsCollection",
  model: EmotionDataModel,
  el: '.anxious',
    events: {
    "click": "collectData"
  },
  collectData: function() {
    var self = this;
    console.log("anxiousView func: " + this.className);
    // console.log("hey: " + this.className);

    $("." + this.className).css({
      "border-top": "1px solid blue",
      "border-right": "3px solid blue",
      "border-bottom": "3px solid blue",
      "border-left": "1px solid blue"
    });

    $("." + this.className).siblings().css({
      "border": "none"
    });
  }
 });

 var BoredView = Backbone.View.extend({
   collection: "EmotionsCollection",
   model: EmotionDataModel,
   el: '.bored',
   events: {
     "click": "collectData"
   },
   collectData: function() {
     var self = this;
     console.log("boredView func: " + this.className);
     // console.log("hey: " + this.className);

     $("." + this.className).css({
       "border-top": "1px solid blue",
       "border-right": "3px solid blue",
       "border-bottom": "3px solid blue",
       "border-left": "1px solid blue"
     });

     $("." + this.className).siblings().css({
       "border": "none"
     });
   }
  });

  var ExpressEmotionView = Backbone.View.extend({
    // collection: "EmotionsCollection",
    model: "EmotionDataModel",
    el: '.showemotion-wrap',
    render: function(){
      $el.css("background-image", toString(giphyPlayUrl));
    }

  });

  var expressEmotionView = new ExpressEmotionView();
  expressEmotionView.render();

//From backbone doc
//view.listenTo(model, 'change', view.render);


var MyRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    express: "express",
  },

  index: function(){

  },

  express: function(){

  }

});

//   document.ready

$(document).ready(function(){
  var router = new MyRouter();
  var anxiousView = new AnxiousView();
  var boredView = new BoredView();
  Backbone.history.start();
  // console.log(emotionsAll.el);


});
})();













// nasa pic of the day
//
// http://api.froyo.io/apod
//
// To see the machine-friendly response, please make the request with 'application/vnd.collection.doc+json' or 'application/vnd.amundsen-uber+xml' Accept headers.

//http://musicovery.com/api/doc/documentation.php

//https://developer.gracenote.com/web-api




/*  evernote api OAuth

var client = new Evernote.Client.new({
  consumerKey: 'YOUR API CONSUMER KEY',
  consumerSecret: 'YOUR API CONSUMER SECRET',
  sandbox: [true or false] // Optional (default: true)
});
client.getRequestToken('YOUR CALLBACK URL', function(error, oauthToken, oauthTokenSecret, results) {
  // store tokens in the session
  // and then redirect to client.getAuthorizeUrl(oauthToken)
});

to get access token:
client.getAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
  // store 'oauthAccessToken' somewhere
});

now you can amake other api calls

var client = new Evernote.Client({token: oauthAccessToken});
var noteStore = client.getNoteStore();
notebooks = noteStore.listNotebooks(function(err, notebooks) {
  // run this code
});

UserStore:
can call UserStore.getUser:
var client = new Evernote.Client(token: token);
var userStore = client.getUserStore();
userStore.getUser(function(err, user) {
  // run this code
});

You can omit authenticationToken in the arguments of UserStore/NoteStore functions.

If you want to call NoteStore.listNotebooks:

var linkedNotebook = noteStore.listLinkedNotebooks[0]; // any notebook
var sharedNoteStore = client.sharedNoteStore(linkedNotebook);
sharedNoteStore.getSharedNotebookByAuth(function(err, sharedNotebook) {
  sharedNoteStore.listTagsByNotebook(err2, sharedNotebook.notebookGuid, function(tags) {
    // run this code
  });
});

userStore.getUser(function(err, user) {
  if (user.isBusinessUser) {
    client.getBusinessNoteStore().listNotebooks(function(err, notebooks) {
      // run this code
    });
  }
});

see:
https://github.com/evernote/evernote-sdk-js

can list business notebooks
create a business note
create a business notebook
get a notebook corresponding to the given business notebook

determine if the user is part of a business

To test code:
Yes. You can test your code in Chrome. Open Chrome using open /Applications/Google\ Chrome.app/ --args --disable-web-security .

api reference:
https://dev.evernote.com/doc/reference/

jsOAuth
var exports=exports||this;exports.OAuth=function(a){function b(a){var e,b=arguments,c=b.callee,f=(b.le


*/
