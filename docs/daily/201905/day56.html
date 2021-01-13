<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] 渐进式渲染是什么？

      渐进式渲染是用来提高网页性能，以尽快呈现页面的技术。
      比如：图片懒加载；确定显示内容的优先级；等

    [css] margin和padding使用的场景有哪些？

      margin:

           需要在border外侧添加空白时；

           空白处不需要背景（色）时；

          上下相连的两个盒子之间的空白，需要相互抵消时。

      padding：

          需要在border内测添加空白时；

          空白处需要背景（色）时；

          上下相连的两个盒子之间的空白，希望等于两者之和时。

    [js] JSONP的原理是什么？解决什么问题？

      解决跨域

      原理：

      创建script元素 请求对应路径
      将回调函数挂载全局
      将script元素挂载到页面上
      script请求到的代码会执行挂载在全局的回调函数 并传递响应值
      当script加载完毕移除该元素
      function JSONP(url, params, callback) {
          const script = document.createElement("script");
          script.src = url + parseObjToParams({...params, callback: "jsonpCallback"});
          document.body.appendChild(script);
          window.jsonpCallback = callback;
          script.onload = () => {
              document.body.removeChild(script)
          }
      }

      JSONP("http://localhost:3019/asd", {name: "vijay"}, (data) => {
          console.log(data);
      });

      //server
      app.use("/asd", (req, res, next) => {
          res.jsonp({ user: 'tobi' })
      });

    [软技能] 说说你对域名收敛和域名发散的理解？分别在什么场景下使用？

      域名发散

      域名发散就是为了突破浏览器对于同一域名并发请求数的限制，chrome浏览器同一时刻只能发送6个http请求，而且一个http1.1还有对头堵塞链，使用域名发散为同一个服务申请多个域名，从而可以一定程度上提高并发量。对于淘宝这种多图网站有很大提升。

      域名收敛

      域名收敛就是将静态资源放在一个域名下不进行发散，这主要是为了适应移动端的发展需求；通常DNS是一个开销较大的操作，而移动端由于网络带宽和实时性、资源等的限制，这些开销对移动端的用户体验是致命的，因此需要进行域名收敛；

      进入http1.1时代，由于长连接特性的出现和服务器能力的增强，资源发散策略在某些情况下不再具有优势，对同一服务器进行多次请求，后发起的请求可以继续使用之前打开的tcp连接，而对于分散的资源进行请求则必须重新进行tcp连接，带来额外的消耗，所以，采用域名收敛的策略，可以有效提升客户端的性能。

      而且 后面的http2 多路复用可以解决域名发散的问题。

      以后http2普及之后，域名发散没有太大优势。


  </pre>
</body>

<script>

  //手写

  //实现

</script>
</html>
