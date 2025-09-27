var posts=["2025/09/19/hello-world/","2025/09/27/史纲/","2025/09/27/中国近现代史纲要 zn 理教106/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };