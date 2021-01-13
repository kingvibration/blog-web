
## [html] 常见的浏览器内核都有哪些？并介绍下你对内核的理解

浏览器内核：浏览器核心的部分，即 渲染引擎，负责对网页语法的解释 并渲染（显示）网页。

  1. Trident （IE内核）
  2. Gecko （FireFox内核）
  3. Webkit （Safari内核，Chrome内核原型）
  4. Blink （Chrome(28及往后版本)、Opera(15及往后版本)和Yandex）
  5. Presto ( Opera <= 12.18）
  6. X5（腾讯系浏览器，基于Blink）

## [css] 说说你对css盒子模型的理解

1. css盒模型由两个盒子组成，外在的控制是否换行的盒子，以及内在的控制元素内容的盒子。
  比如：display: inline-block, 则它的外在的盒子就是inline也就是不占据一行，而block则表示内部的元素具有块状特性。
  所以，display: inline其实就是display: inline-inline的缩写，display: block就是display: block-block的缩写。
2. 每一个内在的盒子有: width/height, padding, border, margin这几个控制盒子大小的属性。
  其中 width/height控制元素内容大小，padding则控制元素内容到border线内侧距离，border则是元素外围边框大小，而margin则是控制与其他元素的间距，它的背景透明。
3. 对于早期，计算一个元素的占据大小，需要通过width +2* padding + 2*border来计算，css3中提出了box-sizing：border-box，通过这样设置，就可以使元素最终的宽高就是设定的width/height, 浏览器会根据width/height, padding, border的大小来自动调整内部元素的大小。
## [js] 写一个获取当前url查询字符串中的参数的方法


## [软技能] 网页应用从服务器主动推送到客户端有那些方式？

服务端推送

  1.webSocket
  WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议

  WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

  2.eventsource(SSE)
  EventSource 接口是 Web 内容与服务器发送的事件的接口。一个 EventSource 实例打开一个持久连接 HTTP 服务器，它发送事件的 text/event-stream 格式。连接保持打开状态，直到通过调用关闭 EventSource.close()。

  与 WebSockets 不同，服务器发送的事件是单向的。也就是说，数据消息是从服务器到客户端（例如用户的 Web 浏览器）沿一个方向传递的


  3.Web Push
  就是用户订阅了一个站点的 Web Push 服务后，即使用户关闭了浏览器，一旦站点主动发送推送消息，用户都能收到，只要你的电脑是开着的。这是目前谷歌和苹果在 Chrome 和 Safari 上都力推的一种全新推送服务，Firefox 最近也加入了这个阵营。

  但是由于需要 GCM 支持，所以这个方法并不常见


```javascript
  //手写
    function getParams(url) {
        let getIndex = url.indexOf("?");
        let params = url.slice(getIndex+1)
        let arr = params.split("&")
        let obj = {};
        arr.forEach(v => {
            let [key, value] = v.split("=");
            obj[key] = value
        })
        console.log(obj)
    }
    getParams("www.baud.com?a=2&b=3&c=5")


  //实现

  function params() {
      let search = window.location.search;
      search = search.substr(1, search.length);
      const res = {};
      if (!search) return res;
      search.split('&').map(item => {
          const [key, value] = item.split('=');
          res[key] = decodeURIComponent(value);
      });
      return res;
  }

  // 实现2
  function urlParam(url){
      const param = {};
      url.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> {
          console.log($1, $2)
          param[$1] = $2
      });
      return param;
  }
  let res = urlParam("https://github.com/kk?tab=stars&assetId=311&page=DETAIL&projectPhase=2")

  console.log(res)


  // 在HTML5的服务器发送事件中，使用EventSource对象可以接收服务器发送事件的通知。
  // demo， test1是接口名
  var source = new EventSource("test1");
  source.onmessage = function(event) {
      var item = $("<li></li>").html(event.data);
      $("#list").append(item);
  }
```
