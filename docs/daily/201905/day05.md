<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
    [html] 用一个div模拟textarea的实现

      <div class="edit" contenteditable="true" style="border: 1px solid; padding:3px; resize: both">用一个div模拟textarea的实现</div>

    [css] 使用flex实现三栏布局，两边固定，中间自适应

      <div style="display: flex;">
        <div style="width: 100px;background: #eeeeee">1</div>
        <div style="flex-grow: 1;background: aquamarine">2</div>
        <div style="width: 100px;background: #00cc99">3</div>
      </div>

      弹性盒子中 flex: 0 1 auto 表示什么意思

      解释
      三个参数分别对应的是 flex-grow, flex-shrink 和 flex-basis，默认值为0 1 auto。

      flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
      flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
      flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
      三值语法
      三个值的含义：

      第一个 number 表示 flex-grow
      第二个 number 表示 flex-shrink
      第三个描述宽度的值表示 flex-basis
      flex 各属性含义介绍
      flex-grow
      这个属性设置的是当前 flex 元素在 main-size 中的伸缩系数，main-size 指的是宽度和高度（由 flex-direction 属性控制），这个属性的默认值是 0。

      flex 值越大，代表所占的空间越大。如下图所示，A、B、C、F 这几个元素设置的 flex 值为 1，而 D、E 元素设置的 flex 值为 2，所以 D 和 E 元素所占的比例就是其它几个的两倍。

      flex-grow

      flex-shrink
      flex-shrink 属性设置的是 flex 元素的收缩系数。假设所有元素加起来的大小超出了 flex 容器，那么就需要用 flex-shrink 这个属性来控制如何收缩。它的默认值是 1。

      如下图所示，A、B、C、D、E 这几个元素的大小超出了容器大小本身，A、B、C 设置的 flex-shrink 属性的值为 1，D 和 E 属性设置的值是 2，那么 D 和 E 这两个元素的大小会更小一点，这两个收缩的会更厉害一点。

      flex-shrink

      flex-basis
      这个属性设置的是一个 flex 元素的初始大小。它可以用以下几种值填充：

      （1）宽度

      flex-basis: 10em;
      flex-basis: 3px;
      flex-basis: auto;

      auto 是 flex-basis 的默认值

      （2）内置调节大小的关键字

      flex-basis: fill;
      flex-basis: max-content;
      flex-basis: min-content;
      flex-basis: fit-content;

      （3）根据内容自动调节大小

      flex-basis: content;

      （4）全局值

      flex-basis: inherit;
      flex-basis: initial;
      flex-basis: unset;

    [js] 请你解释一个为什么10.toFixed(10)会报错？

      之所以会报错，是因为在这里的 . 发生了歧义，它既可以理解为小数点，也可以理解为对方法的调用。
      因为这个点紧跟于一个数字之后，按照规范，解释器就把它判断为一个小数点。

      所以我们可以这样修改下：

      (10).toFixed(10)
      10..toFixed(10)
      10 .toFixed(10)
      10.0.toFixed(10)

      当然出现这个报错是因为前面这个数是整数，如果本来就是小数就不会出现这个报错。

    [软技能] 谈一谈你知道的前端性能优化方案有哪些？

      客户端优化

      减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
      使用CSS雪碧图（CSS Sprites）CSS Sprites一句话：将多个图片合并到一张单独的图片，这样就大大减少了页面中图片的HTTP请求。
      减少DOM操作次数，优化javascript性能。
      少用全局变量、减少DOM操作、缓存DOM节点查找的结果。减少IO读取操作。
      延迟加载 | 延迟渲染
      图片预加载，将样式表放在顶部，将脚本放在底部 加上时间戳。
      避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。

      服务端优化

      尽量减少响应的体积，比如用 gzip 压缩，优化图片字节数，压缩 css 和 js；或加快文件读取速度，优化服务端的缓存策略。
      客户端优化 dom、css 和 js 的代码和加载顺序；或进行服务器端渲染，减轻客户端渲染的压力。
      优化网络路由，比如增加 CDN 缓存；或增加并发处理能力，比如服务端设置多个域名，客户端使用多个域名同时请求资源，增加并发量。

      最后

      　　对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘IO。向前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，能在缓存服务器上直接返回的不要到应用服务器，程序能直接取得的结果不要到外部取得，本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。
      　　减少数据库操作指减少更新次数、缓存结果减少查询次数、将数据库执行的操作尽可能的让你的程序完成（例如join查询），减少磁盘IO指尽量不使用文件系统作为缓存、减少读写文件次数等。程序优化永远要优化慢的部分，换语言是无法“优化”的。

      涉及的知识点太多，从客户端浏览器、渲染机制、缓存、 网络请求、代码压缩合并、图片格式、服务器代理、数据库的查询.....
      暂时只能想到这么多，觉得自己答得并不是很好，希望有大佬回答一下这个问题。

      <a href="https://github.com/yingnian/Yahoo-35" target="_blank">雅虎前端优化35条军规</a>

  </pre>
</body>

<script>

  //手写

  //实现

</script>
</html>
