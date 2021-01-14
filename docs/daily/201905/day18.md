  <style>
    html,
    body {
      padding: 0;
      margin: 0;
    }
    .page-container {
      position: relative;
      top: 0;
      transition: all 1000ms ease;
      touch-action: none;
    }
    .page-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
    }
  </style>

## [html] 说说你对WEB标准和W3C的理解与认识？

  网页主要由三个部分组成，表现、结构和行为。

  我理解的就是：

  html是名词--表现
  
  css是形容词--结构
  
  javascript是动词--行为
  
  以上这三个东西就形成了一个完整的网页，但是js改变时，可以会造成css和html的混乱，让这三个的界限不是那么清晰。

  这个时候，web标准就出来了，web标准一般是将该三部分独立分开，使其更具有模块化。

  W3C对web标准提出了规范化的要求，也就是在实际编程中的一些代码规范：包含如下几点

  1.对于结构要求：（标签规范可以提高搜索引擎对页面的抓取效率，对SEO很有帮助）

  * 标签字母要小写
  * 标签要闭合
  * 标签不允许随意嵌套

  2.对于css和js来说

  尽量使用外链css样式表和js脚本。是结构、表现和行为分为三块，符合规范。同时提高页面渲染速度，提高用户的体验。
  
  样式尽量少用行间样式表，使结构与表现分离，标签的id和class等属性命名要做到见文知义，标签越少，加载越快，用户体验提高，代码维护简单，便于改版

  这里顺便解释下什么是web标签语义化，即用正确的标签做正确的事情。

  比如：

  W3C组织意识到了之前HTML版本的不足，推出的HTML5进一步推进了Web语义化发展，采用了诸如footer、section等语义化标签，弥补了采用id="footer"或者class="footer"形式的不足，以更好的推动Web的发展。

## [css] 你知道全屏滚动的原理是什么吗？它用到了CSS的哪些属性？

  全屏滚动
  
  1. 知识点
  * JS 滚动监听事件
  * JS 移动端touch监听事件
  
  函数节流
  
  * DOM操作
  
  2. 示例GIF
  
  * 示例GIF

  3. 代码分析
  
  1. CSS
  
  html, body设置 overflow 为 hidden, 让视图中只包括一个分页;设置滑动分页的长宽都是 100%; 外部容器设置 transition 过渡效果, 并设置为相对定位, 滚动是修改外部容器的 Top 值, 实现滚动效果.
  见head style

  2. HTML
  
  初始三个分页

  <div class="page-container">
    <div class="page-item">1</div>
    <div class="page-item">2</div>
    <div class="page-item">3</div>
  </div>
  
  3.JavaScript
  
  1. 初始化值
  
  容器高度设置为窗口高度
```javascript
  var container = document.querySelector('.page-container')
  // 获取根元素高度, 页面可视高度
  var viewHeight = document.documentElement.clientHeight
  // 获取滚动的页数
  var pageNum = document.querySelectorAll('.page-item').length
  // 初始化当前位置, 距离原始顶部距离
  var currentPosition = 0
  // 设置页面高度
  container.style.height = viewHeight + 'px'
```

  2. 初始化滚动事件
  
  向下滚动时, 当 currentPosition 比 -整体分页高度 大的时候(绝对值相比小的时候), 向下滚动;向上滚动时, 当 currentPosition 大于 0 的时候, 向上滚动.
```javascript
  // 向下滚动页面
  function goDown () {
    if (currentPosition > - viewHeight * (pageNum - 1)) {
      currentPosition = currentPosition - viewHeight
      container.style.top = currentPosition + 'px'
    }
  }

  // 向上滚动页面
  function goUp () {
    if (currentPosition < 0) {
      currentPosition = currentPosition + viewHeight
      container.style.top = currentPosition + 'px'
    }
  }
```
  3. 节流函数
  
  即在规定时间内只会触发一次指定方法, 用于滚动时防止多次触发
  ```javascript
  function throttle (fn, delay) {
    let baseTime = 0
    return function () {
      const currentTime = Date.now()
      if (baseTime + delay < currentTime) {
        fn.apply(this, arguments)
        baseTime = currentTime
      }
    }
  }
  ```
  4. 监听鼠标滚动
  滚动事件firefox与其他浏览器的事件不同, 所以需要进行判断. deltaY大于0的时候, 想下滚动; 反之, 向上滚动.
  ```javascript
  var handlerWheel = throttle(scrollMove, 1000)
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property
  // firefox的页面滚动事件其他浏览器不一样
  if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
    document.addEventListener('mousewheel', handlerWheel)
  } else {
    document.addEventListener('DOMMouseScroll', handlerWheel)
  }
  function scrollMove (e) {
    if (e.deltaY > 0) {
      goDown()
    } else {
      goUp()
    }
  }
  ```
  5. 监听移动端touch操作
  
  当 touch 的最终位置大于起始位置时, 则页面向上滚动; 反之, 向下滚动.
  ```javascript
  var touchStartY = 0
  document.addEventListener('touchstart', event => {
    touchStartY = event.touches[0].pageY
  })
  var handleTouchEnd = throttle(touchEnd, 500)
  document.addEventListener('touchend', handleTouchEnd)
  function touchEnd (e) {
    var touchEndY = e.changedTouches[0].pageY
    if (touchEndY - touchStartY < 0) { // 向上滑动, 页面向下滚动
      goDown()
    } else {
      goUp()
    }
  }
  ```
  4.参考资料
  
  <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement</a>
  <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight</a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property</a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Touch_events</a>

## [js] 你对事件循环有了解吗？说说看！

  单线程模型
  JS 引擎有多个线程，但引擎同时只执行一个任务，其他任务都必须在后面排队，即引擎只在一个线程上运行。这个线程称为主线程。

  事件循环机制
  JS 本身并不慢，慢的是读写外部数据，比如等待 Ajax 请求返回结果。如果等着 Ajax 返回结果出来，再往下执行，就会耗费很长的时间。所以 JS 设计了一种机制，CPU 可以不管 IO 操作，而是挂起该任务，先执行后面的任务，等到 IO 操作返回了结果，再继续执行挂起的任务。

  同步任务执行完后，引擎一遍又一遍检查那些挂起来的异步任务是否满足进入主线程的条件。这种循环检查的机制，就叫做事件循环机制。

  任务队列
  JS 引擎运行时，除了一个正在运行的主线程，还提供一个或多个任务队列，里面是各种被挂起的异步任务。首先，主线程会去执行所有的同步任务，等到同步任务全部执行完，就会去看任务队列里面的异步任务，如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就会变成同步任务。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。

  同步任务和异步任务
  程序里面所有的任务可以分成两类：

  同步任务：没有被引擎挂起，在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。
  异步任务：被引擎挂起，不进入主线程，而进入任务队列的任务。只有引擎认为某个异步任务可以执行了，该任务才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行。

## [软技能] 最近996一词很火，谈谈你对996的看法

  其实, 我不介意996, 我介意的是, 不必要的996, 无偿的996, 耍流氓的996, 强迫式的996
