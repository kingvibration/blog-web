<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] HTML5如果不写&lt;! DOCTYPE html> ，页面还会正常工作么？

      页面添加了<! DOCTYPE html>，说明该页面采用了W3C标准，如果不加则页面会根据浏览器自身的解析标准来解析，这可能会导致页面在不同的浏览器呈现出不同的效果。

    [css] 元素竖向的百分比设置是相对容器的高度吗？

      元素竖向的百分比设置高度是相对父级的高度，但是margin 和padding 是参照父级的宽度来设置的。

      父级非 auto 的 height 时，子级百分比的 height 才有效。
      即使父级有 min-height 或其他子级撑起的高度，子级百分比 height 依旧无效。

    [js] 请解释下什么是cookie隔离？为什么要隔离？如何隔离？

      什么是 Cookie 隔离？

      或者说：请求资源的时候不要让它带 cookie 怎么做

      cookie 隔离技术和传统的多域名拆分请求，提高浏览器并发请求数有点类似，均是采用多域名来处理请求
      传统做法是将 css，js，图片等静态文件放在多个域名下面请求，这样就可以跨过浏览器对统一主机名并发连接数的限制，提高整体并发请求量。
      cookie 隔离技术则是通过使用多个非主要域名来请求静态文件，如果静态文件都放在主域名下，那静态文件请求的时候带有的 cookie 的数据提交给 server 是非常浪费的，还不如隔离开。
      因为 cookie 有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有 cookie 数据，这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。同时这种方式不会将 cookie 传入 webserver，也减少了 webserver 对 cookie 的处理分析环节，提高了 webserver 的 http 请求的解析速度。
      经典总结：

      如果静态文件都放在主域名下，那静态文件请求的时候都带有的 cookie 的数据提交给 server 的，非常浪费流量，
      所以不如隔离开。
      因为 cookie 有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有 cookie 数据，
      这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。
      同时这种方式不会将 cookie 传入 Web Server，也减少了 Web Server 对 cookie 的处理分析环节，
      提高了 webserver 的 http 请求的解析速度。

    [软技能] 如果面试官让你说说下你的家庭？你会从哪些方面说呢？

      父母在，人生尚有归处


  </pre>

  <div style="height: auto">
    123
    <div style="background: #00cc99;height: 100%"></div>
  </div>
</body>

<script>

  //手写

  //实现

</script>
</html>