var wrapper = function($http){
  var WPCard = function(blog, index){
    this.initialize = function(){
      var url = "https://public-api.wordpress.com/rest/v1.1/sites/" + blog + "/posts/?number=2";
      var blogData = $http.get(url);
      var self = this;

      blogData.then(function(response){
        var blogPostData = response.data.posts[index]
        self.title = blogPostData.title
        self.date = new Date(blogPostData.date).toDateString();
        self.text = blogPostData.excerpt.replace(/(<([^>]+)>)/ig,"");
        self.link = blogPostData.URL
        self.author = blogPostData.author.nice_name
        self.photo = blogPostData.featured_image || blogPostData.attachments[Object.keys(blogPostData.attachments)[0]].URL || ""
      });
    };
    this.initialize();
  };
  return (WPCard);
};

angular
  .module('BlogBook')
  .factory('WPCard', wrapper)