<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] 说说你对 meta 标签的理解

      &lt;meta> 标签放在 &lt;head> 中间，不会在网页中显示，主要是给机器以及爬虫来阅读的。
      Meta ： 即 **元数据（Metadata）**是数据的基本信息。


      比较常用的属性有下面几个：

      charset: 在 HTML5 中推荐的用法，一般设为 UTF-8 防止出现乱码。 <meta charset="UTF-8" />
      name 与 content 的搭配使用: <meta name="xxx" content="xxx" />
      name=viewport: 移动端开发使用的属性，用来设置视窗的宽度，是否允许缩放等。与 Day 10 viewport 常见设置都有哪些？ 相关
      name=author: 用来设置作者，给 SEO 使用
      name=description: 页面的描述，在浏览器用作书签时会显示对应的内容
      name=keywords: 网页的关键字，给 SEO 使用
      http-equiv 与 content 的搭配使用
      refresh: 允许页面在一定时间后刷新或者重定向到另一个地址
      参考文章：
      <a href="https://segmentfault.com/a/1190000004279791" target="_blank">HTML meta 标签总结与属性使用介绍</a>
      <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta" target="_blank">&lt;meta> MDN</a>

    [css] rgba()和opacity这两个的透明效果有什么区别呢？

      rgba 只对颜色有影响。如果放在 background 上的话，只对背景颜色有影响。不会影响元素中的其他内容以及子元素内容。

      opacity 的透明效果是作用整个元素以及其子元素上的。


    [js] 解释下这段代码的意思！

      [].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })

      作用

      在你的Chrome浏览器的控制台中输入这段代码，你会发现不同HTML层都被使用不同的颜色添加了一个高亮的边框。是不是非常酷？但是，简单来说，这段代码只是首先获取了所有的页面元素，然后使用一个不同的颜色为它们添加了一个1px的边框。

      解析
      1. [].forEach.call() => 调用引用数组的forEach方法
      2. $$('*') => document.querySelectorAll('*')
      3. ~~a => parseInt(a)
      4. 1<<24 => 对二进数1小数点右移24位
      5. (parseInt(Math.random()*(1<<24)).toString(16)) => 获得了一个位于0-16777216之间的随机整数，也就是随机颜色，再使用toString(16)将它转化为十六进制数。

      手写简版

      [].forEach.call(
          document.querySelectorAll('*'),
          function(a){
              a.style.outline="1px solid #" + (parseInt(Math.random()*(1<<24)).toString(16))
          }
      )

      参考：
      <a href="https://my.oschina.net/l3ve/blog/330358" target="_blank">从一行代码里面学点JavaScript</a>


    [软技能] 在浏览器中输入url到页面显示出来的过程发生了什么？

      DNS解析得到ip，通过ip向服务器发起tcp链接，发送请求，服务器返回数据，浏览器解析渲染显示，关闭连接。


      1.用户在浏览器中输入网址后，浏览器会先对输入的地址进行解析。比如用的协议 http 还是 https

      2.之后会根据域名进行 IP 的寻址

        (1).寻址先从缓存开始，如 host
        (2).之后再访问 DNS 服务器，一层一层直至访问到根服务器
        (3).服务器再把 IP 告诉客户端

      3.客户端拿到 IP 后发起请求

        (1).与服务器进行 HTTP 连接建立（3 次握手）

      4.建立成功后服务器返回数据，浏览器进行渲染

        (1).DOM 树构建、CSSOM 树的构建、JavaScript 资源下载

          a. CSS 的重排重绘，CSSOM 与 DOM 一起进行绘制
          b. JavaScript 资源的阻塞

      5.渲染出页面

      <a href="https://dailc.github.io/2018/03/12/whenyouenteraurl.html" target="_blank">从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！</a>
  </pre>
</body>

<script>

  //手写

  //实现

  [].forEach.call(document.querySelectorAll('*'), function(a){
      a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
  });

  [].forEach.call(
      document.querySelectorAll('*'),
      function(a){
          a.style.outline="1px solid #" + (parseInt(Math.random()*(1<<24)).toString(16))
      }
  )


</script>
</html>
