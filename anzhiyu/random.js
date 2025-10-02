var posts=["2025/09/27/史纲/","2025/09/29/杭州/","2025/09/01/国庆规划/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };