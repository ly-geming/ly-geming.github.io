var posts=["2025/09/27/史纲/","2025/09/29/杭州/","2025/10/01/国庆规划/","2025/10/04/分治算法/","2025/10/03/深度优先搜索算法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };