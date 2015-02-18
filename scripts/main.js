(function(){
  'use strict';
  window.App = window.App || {};
// http://tiny-pizza-server,herokuapp.com/collectons/toots
/**********************************************
    Models
*******************************************/


// var BlogsCollection = Backbone.Collection.extend({
//   url: "http://tiny-pizza-server.herokuapp.com/"
//   });
// var blogsCollection = new BlogsCollection();

var BlogModel = Backbone.Model.extend({
  defaults: {
    title: "",
    body: '',
    timestamp: "(new Date()).toString()"
  }

});

var BlogsCollection = Backbone.Collection.extend({
  url: "http://tiny-pizza-server.herokuapp.com/",
  model: BlogModel,
  comparator: 'timestamp',
  events: {
    "submit": 'createPost'
  },
  createPost: function(e){
    e.preventDefault();
    var body = $('.js-new-post-body').val();
    var title = $('.js-new-post-title').val();
    this.collection.create({title: title, body: body});
    this.$('.js-new-post-body').val('');
    this.$('.js-new-post-body').val('');
  }

});


/**********************************************
    Views
*******************************************/
var BlogListView = Backbone.View.extend({
  el: '.blog-list',
  initialize: function(){
    this.listenTo($('.js-blog-edit'), "create sync", 
      this.render);
  },
  render: function(){
    console.log('BlogListView just rendered');
  }
});

var BlogItemView = Backbone.View.extend({
  model: "BlogModel",
  el: ".js-blog-title",
  initialize: function(){
    console.log('BlogItemView initialized');
  },
  render: function(){
    self = this;
    _.each(blogs, function(){

    });
  }
});

var AddPostView = Backbone.View.extend({
  el: '.js-add-post-button',
  events: {
    "click": function(){
      $('.js-new-post-wrap').css("visibility", "visible");
    }
  }
});



var NewPostTitle = Backbone.View.extend({
  el: '.js-new-post-title',
  events: {
    "submit": 'submitPostTitle'
  },
  submitPostTitle: function(e){
      e.preventDefault();
      newPostTitle = this.$el.val();
      console.log('the post title');
 
  },
  render: function(){
     
  }
});

var NewPostBody = Backbone.View.extend({
  el: '.js-new-post-body',
  events: {
    "submit .js-submit-new-post": 'createPost'
  },
  createPost: function(e){
    e.preventDefault();
    $('.js-new-post-wrap').css("visibility", "none");
  }
});



/**********************************************
    Routers
*******************************************/
var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "postdetail": "postDetail"
  },
  initialize: function(){

    this.blogsCollection = new BlogsCollection();
    this.listView = new BlogListView();
    this.blogItem = new BlogItemView();
    

  },
  index: function(){
    this.blogsCollection.fetch();
    var addPost = new AddPostView();
    var newPost = new NewPostBody();
    var newPostTitle = new NewPostTitle();
    $('.js-new-post-wrap').css("visibility", "hidden");
  },
  postDetail: function(){

  }
});




/**********************************************
    Document Ready
*******************************************/


$(document).ready(function(){

var appRouter = new AppRouter();


  Backbone.history.start();



});
})();









