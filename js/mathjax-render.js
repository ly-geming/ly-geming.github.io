// source/js/mathjax-render.js

// 配置 MathJax（仅首次加载时生效）
if (typeof MathJax === 'undefined') {
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    },
    loader: {
      load: ['input/tex', 'output/chtml']
    }
  };
}

// 加载 MathJax（只加载一次）
if (!window.MathJaxLoaded) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.id = 'MathJax-script';
  script.async = true;
  script.onload = () => {
    window.MathJaxLoaded = true;
    // 首次渲染
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  };
  document.head.appendChild(script);
}

// pjax 完成后重新渲染
function renderMath() {
  if (window.MathJax && typeof window.MathJax.typeset === 'function') {
    window.MathJax.typesetClear();
    window.MathJax.typeset();
  }
}

// 首次加载
document.addEventListener('DOMContentLoaded', renderMath);

// pjax 导航后重新渲染（anzhiyu 使用 pjax）
document.addEventListener('pjax:complete', renderMath);