(function(){
  'use strict';

// anxious, bored, cold, confident
// curious, disappointed, disgusted, exhausted
// happy, hot, hysterical, interested
// lonely, satisfied, surprised, thoughtful

var emotions = [
  {
    name: "angry"
    // song: "",
    // color: "",
    // emoticon: "",
    // gif: "",
  },
  // {
  //   name: "sad",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "excited",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "embarrassed",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "silly",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "smart",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "shocked",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "devilish",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "frustrated",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "cool",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "scared",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "frisky",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "grouchy",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "heartbroken",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  // {
  //   name: "overwhelmed",
  //   song: "",
  //   color: "",
  //   emoticon: "",
  //   gif: "",
  // },
  {
    name: "overjoyed"
    // song: "",
    // color: "",
    // emoticon: "",
    // gif: "",
  }
];

var MyRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "emotion/:id": "emotion",
  },

  index: function(){
    var template = _.template( $('#start-screen').text()
    );
    var renderedTemplate = template( {anEmotion: emotions});
    $('container').html(renderedTemplate);
  },

//   index: function(){
//     var emotionIndex = Number(id);
//     var emotion = emotions[emotionIndex];
//
//     var template = _.template( $('#start-screen').text()
//     );
//     var renderedTemplate = template({emotion: emotions});
//     $('container').html(renderedTemplate);
//     }
// });

  emotion: function(){
    var template = _.template( $('showemotion').text());
    var renderedTemplate = template();
    $('container-showemotion').html(renderTemplate);}
});

$(document).ready(function(){
  var router = new MyRouter();
  Backbone.history.start();
  console.log('hi');


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
