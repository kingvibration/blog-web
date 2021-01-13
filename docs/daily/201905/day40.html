<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] html5都有哪些新的特性？移除了哪些元素？

      语义化的标签，header,footer,nav,section,article等。
      表单类型增多，date,datetime,email,range,url,time等。
      视频音频标签，localstorage,sessionstorage等。
      canvas，拖动的api。

      移除了basefont，big，center，font,s，strike，tt，u，frame，frameset，noframes；

    [css] 怎么才能让图文不可复制？

      -webkit-user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;

      js方式

      禁止复制+剪切
      禁止右键，右键某些选项：全选、复制、粘贴等
      禁用文字选择，能选择却不能复制，体验很差
      user-select用css禁止选择文本
      // 禁止右键菜单
      document.body.oncontextmenu = e => {
          return false;
          // e.preventDefault();
      }
      // 禁止文字选择
      document.body.onselectstart = e => {
          return false;
          // e.preventDefault();
      }
      // 禁止复制
      document.body.oncopy = e => {
          return false;
          // e.preventDefault();
      }
      // 禁止粘贴
      document.body.onpaste = e => {
          return false;
          // e.preventDefault();
      }

    [js] 为什么会有跨域问题？怎么解决跨域？

      浏览器为了安全，产生了同源策略，协议、域名、端口有一个不同，就会产生跨域。
      跨域方式有jsonp,代理方式，cors，domain改变主域相同，postmessage也可以。

      为什么会有跨域

      跨域一句话的理解就是：服务端和请求端的地址不一样。

      什么是跨域
      Ajax 的便利性大家都清楚，可以在不向服务器提交完整的页面的情况下，实现局部更新页面。但是浏览器处于对安全方面的考虑，不允许跨域调用其他页面的对象。
      其实这个也不能怪浏览器，假设谁都可以随随便便向你发送请求，那样有很大的安全隐患。
      根据浏览器的同源策略, 只有当协议，域名，端口相同的时候才算是同源, 反之则均视为是一个跨域的请求.
      也就是说我刚刚的Vue端口是8081，服务端端口是8080，端口不一样，因为同源策略的存在 ，所有我的请求会失败。

      一个问题，当找到了原因，这个问题就解决了一半了。

      怎么解决跨域
      下面就先介绍三种跨全域的方法：

      JSONP

      应该是最常见解决跨域的方法了，
      他为什么能解决跨域呢，是因为Web 页面上调用 js 文件不受浏览器同源策略的影响，所以通过 Script 便签可以进行跨域的请求：

      首先前端先设置好回调函数，并将其作为 url 的参数。
      服务端接收到请求后，通过该参数获得回调函数名，并将数据放在参数中将其返回
      收到结果后因为是 script 标签，所以浏览器会当做是3脚本进行运行，从而达到跨域获取数据的目的。

      &lt;script src="http://localhost:3000?callback=jsonpCallback">&lt;/script>

      至此，通过 JSONP 跨域获取数据已经成功了，jsonp这种方法跨域，他的兼容性很好，可以在古老的浏览器中国使用，因为这种方法是利用了 script 标签的特殊性，所有只支持GET请求。

      CORS

      CORS 是一个 W3C 标准，全称是"跨域资源共享"（Cross-origin resource sharing）它允许浏览器向跨源服务器，发出 XMLHttpRequest 请求，从而克服了 ajax 只能同源使用的限制。

      CORS 需要浏览器和服务器同时支持才可以生效，对于开发者来说，CORS 通信与同源的 ajax 通信没有差别，代码完全一样。浏览器一旦发现 ajax 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

      因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。


      http.createServer((req, res)=>{
        res.writeHead(200, {'Access-Control-Allow-Origin': 'http://127.0.0.1:8080'});
        ...

      CORS与JSONP的使用目的相同，但是比JSONP更强大。

      JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

      Server Proxy
      服务器代理，顾名思义，当你需要有跨域的请求操作时发送请求给后端，让后端帮你代为请求，然后最后将获取的结果发送给你。

      假设有这样的一个场景，你的页面需要获取 CNode：Node.js专业中文社区 论坛上一些数据，如通过 https://cnodejs.org/api/v1/topics，当时因为不同域，所以你可以将请求后端，让其对该请求代为转发。

      后端代码如下：

      http.createServer((req, res)=>{
      const path = url.parse(req.url).path.slice(1);
      //核对请求路由是否一致
      if(path === 'topics'){
          https.get('https://cnodejs.org/api/v1/topics', (resp)=>{
              //https代发请求
              let data='';
              resp.on('data', chunk=>{
                  data+= chunk
              });
              resp.on('end', ()=>{
                  res.writeHead(
                      200,
                      {'Content-Type': 'application/json; charset=utf-8'}
                  );
                  res.end(data);
              })
          })
      }

      }).listen(3000, '127.0.0.1');



      总结
      常用的跨域方式基本就是这三种：

      JSONP
      优点是可以兼容老浏览器，缺点是只能发送GET请求
      CORS
      优点简单方便，支持post请求，缺点是需要后端的配合,不支持老版浏览器。。
      Server Proxy
      优点是前端正常发送ajax请求，缺点是后端会二次请求。
      其他的跨域方式还有：location.hash、window.name、postMessage等方式，有时间也可以了解一下。

      参考资料：

      <a href="http://www.ruanyifeng.com/blog/2016/04/cors.html" target="_blank">跨域资源共享 CORS 详解[阮一峰的博客]</a>
      <a href="https://zhuanlan.zhihu.com/p/25778815" target="_blank">关于跨域，你想知道的全在这里</a>
      <a href="https://segmentfault.com/a/1190000015597029" target="_blank">不要再问我跨域的问题了[sf]</a>
      <a href="https://www.cnblogs.com/chenshishuo/p/4919224.html">关于跨域,以及跨域的几种方式[cnblog]</a>
      <a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy" target="_blank">浏览器的同源策略[MDN]</a>


    [软技能] 说说你对NodeJs的理解及用途

      Node.js 应用场景的7个部分。
      1）初衷，server端，成了前端开发的基础设施（npm）
      2）命令行辅助工具，甚至可以是运维
      3）移动端：cordova，pc端：nw.js和electron
      4）组件化，构建，代理
      5）架构，前后端分离、api proxy
      6）性能优化、反爬虫与爬虫
      7) 全栈最便捷之路

  </pre>
</body>

<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script>

  //手写

  //实现

  /* 测试代码

  http.createServer((req, res)=>{
      const data = {
          x: 10//返回的数据
      };
      const callback = url.parse(req.url, true).query.callback;
      res.writeHead(200);
      res.end(`${callback}(${JSON.stringify(data)})`);
      //执行回调函数，返回data
  }).listen(3000, 'localhost');

  */
  function jsonpCallback(data) {
      console.log('获得 X 数据:' + data.x);
  }

  console.log('启动服务，监听 localhost:3000');
  // 然后使用node server.js运行

    $.ajax({
        url:"https://cnodejs.org/api/v1/topics",
        success:function(res){
            // $('body').text(JSON.stringify(res));
            console.log(res);
        }
    });

</script>
</html>
