var posts=["2025/09/19/hello-world/","2025/09/27/史纲/","2025/09/29/杭州/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };