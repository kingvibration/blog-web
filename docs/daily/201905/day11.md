<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] webSocket怎么做兼容处理？

      Socket.IO:

      Adobe Flash Socket（缺点：需要在服务器上打开一个额外的端口，默认为10843）
      Ajax long polling
      Ajax multipart streaming
      Forever iframe
      JSONP polling

    [css] 怎么让英文单词的首字母大写？

      text-transform 属性控制文本的大小写，是CSS2.1的属性，兼容性问题不大。
      属性值是关键字，有4+1种，这个1是实验性属性值。

      /* Keyword values */
      text-transform: capitalize;
      text-transform: uppercase;
      text-transform: lowercase;
      text-transform: none;
      text-transform: full-width;
      capitalize
      这个关键字强制每个单词的首字母转换为大写。

      uppercase
      这个关键字强制所有字符被转换为大写。

      lowercase
      这个关键字强制所有字符被转换为小写。

      none
      这个关键字阻止所有字符的大小写被转换。

      full-width （实验性属性值）
      这个关键字强制字符 — 主要是表意字符和拉丁文字 — 书写进一个方形里，并允许它们按照一般的东亚文字（比如中文或日文）对齐。

      除了以上，还有一些基本上不会用到的默认值等，就不多说了。

      /* Global values */
      text-transform: inherit;
      text-transform: initial;
      text-transform: unset;

    [js] 说说你对IIFE的理解

      (function( window, undefined ) {//……})(window);

      jQuery 整個就是一個立即执行函数。

      (function(){})(); 是立即执行函数常用的表现形式之一。

      另一种也很常用：

      (function(){}());

      什么时候使用

      1.当我们需要写一个 js 插件，并且复用率很高的时候，建议使用

      2.如果命名的函数只需要使用一次，建议使用

      3.独立模块，这个跟第一点差不多。单独出来，想强调一下立即执行函数的好处，开发的时候，能做到各组合模块的低耦合，减少对全局作用域的污染


    [软技能] 你有自己的博客吗？平时自己有写一些技术文章吗？
  </pre>
</body>

<script>

  //手写



  //实现

</script>
</html>
