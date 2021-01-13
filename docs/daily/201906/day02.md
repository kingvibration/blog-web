<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] 有使用过HTML5的拖放API吗？说说你对它的理解

      图片默认自带拖拽功能，非图片元素设置draggable属性为true即可拖拽。

      被拖拽元素的事件：

      ondragstart 拖拽的一瞬间触发
      ondrag 拖拽期间连续触发
      ondragend 拖拽结束触发

      目标元素事件（将拖拽元素释放的地方）：

      ondragenter 进入目标元素触发（鼠标光标进入）
      ondragover 进入离开目标元素连续触发
      ondragleave 离开目标元素触发
      ondrop 在目标元素上释放鼠标触发

      默认状态下，一个元素不能放在另一个元素上面，需要在ondragover上阻止默认事件。

    [css] 手动写动画最小时间间隔是多少，为什么？

      一般浏览器的刷新频率为每秒60次，所以最小事件间隔为 1/60*1000 约 16.7ms

    [js] 有用过HTML5的WebWork吗？它主要解决了什么问题？

      主要解决了单线程的问题 由于js执行环境是单线程 所以当处理cpu密集型问题时就没办法了 这时候就可以使用webwork开启一个子线程进行处理


    [软技能] 说说你对同构和SSR的理解

      Isomorphism, 同构，指一套代码既可以在server端工作，也可以在web 客户端运行，可以无缝在server端和client端渲染两种模式间切换。这个概念由airbnb的Rendr发扬光大。
      所以一楼说的其实指的并不是同构JS，而是Universal Javascript.

      在PWA 大行其道的环境下，因为爬虫需要和框架初始化容易白屏等等问题，服务端渲染的呼声又物论沸腾。SSR其实就是在server端把需要的页面和数据组装起来发给客户端而已。

      SSR的好处

      SEO友好
      首页加载更快
      减少请求


  </pre>


  <div id="drag" style="width: 200px;height: 200px;border: 1px solid" draggable="true">被拖拽元素</div>

  <div id="drop" style="width: 300px;height: 300px;border: 1px solid bisque">目标元素（将拖拽元素释放的地方）</div>

</body>

<script>

  //手写

  //实现

  // 拖拽相关

  window.onload = function () {
      let drag = document.getElementById("drag");
      let drop = document.getElementById("drop");
      drag.ondrag = function (e) {
          //console.log(e)
      }
      drag.ondragstart = function (e) {
          console.log('拖拽开始', e)
      }
      drag.ondragend = function (e) {
          console.log('拖拽结束', e)
      }
      drop.ondragenter = function (e) {
          console.log('进入目标元素触发', e)
      }
  }

</script>
</html>
