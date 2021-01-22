## [html] 在HTML5中如何组合标题？用哪个元素？

&lt;hgroup>，内含多个 &lt;h1> ~ &lt;h6> 元素。

主要用于整合文章的主、副标题，抑或是整合文档/页面标题与章节/段落标题。

当有多个h标签的元素时,
需要用hgroup包裹

```html
<hgroup>
  <h1><a href="/">标题一</a></h1>
  <h2>标题二</h2>
</hgroup>
```

但是实际使用中各级标题中会有其他内容，实用性不强，已经W3C被移除


## [css] 标签、class和id选择器三者的区别是什么？分别在什么时候用？

三者的权重不同，都可以作为 CSS 的选择器使用。id > class > tag。

不过在一般的使用中，id 会留给 JavaScript 使用，用来进行 DOM 的操作并且 id 不允许重复。class 和 tag 一般用在 CSS 上，用来进行样式的编辑。

## [js] 用js写一个事件侦听器的方法

```javascript
var eventTool = {
  //获取事件 window.event兼容ie
  getEvent: function (e) {
    return e || window.event
  },
  //获取事件触发元素 srcElement ie独有
  getTarget: function (e) {
    return e.target || e.srcElement
  },
  addListener: function (e, type, hander) {
    if (e.addEventListener) {
      //兼容ie ie没有事件捕获的说法 因此设为false
      //dom2 
      e.addEventListener(type, hander, false);
    } else if (e.attachEvent) {
      //IE
      e.attachEvent('on' + type, hander)
    } else {
      //dom0
      e['on' + type] = hander
    }
  },
  removeListener: function (e, type, hander) {
    if (e.removeEventListener) {
      e.removeEventListener(type, hander, false)
    } else if (e.detachEvent) {
      e.detachEvent('on' + type, hander)
    }
    else { e['on' + type] = null }
  },
  //阻止事件冒泡
  stopPropagation: function (e) {
    if (e.stopPropagation) {
      // ie以外阻止冒泡
      e.stopPropagation()
    }
    else {
      //ie独有阻止冒泡 新版本的chrome等浏览器也支持
      e.cancelBubble = true
    }
  },
  // 阻止事件相关元素的默认事件
  preventDefault: function (e) {
    if (e.preventDefault) {
      e.preventDefault()
    }
    else {
      //ie的阻止默认事件方式
      e.returnValue = false;
    }
  }
}
var btn = document.getElementById('a');
var link = document.getElementById('b');
var fun = function (e) {
  var e = eventTool.getEvent(e);
  var t = eventTool.getTarget(e);
  console.log(e)
  console.log(t)
  eventTool.stopPropagation(e)
}
var add = function () {
  eventTool.addListener(btn, 'click', fun)
  eventTool.addListener(link, 'click', fun)
}
var remove = function () {
  console.log(btn)
  eventTool.removeListener(btn, 'click', fun)
}
```
## [软技能] shim和polyfill有什么区别？它们分别有什么用？

首先 polyfill是shim的一种.目的都是在没有相关API的环境上顺利执行代码

区别是:

shim:是js库, 用库定义的api去执行一些操作, 如jquery,$.ajax,底层用ActiveXObject或XMLHttpRequest实现,用户不直接用标准API,而是用库定义的api,具体环境判断和实现交给库.

polyfill: 用js模拟标准api，抹平环境差异，用户仍是使用标准api

如发现window.requestAnimationFrame不存在,polyfill会用setTimeout覆写window.requestAnimationFrame

polyfill的好处在于，可以动态监测浏览器版本,低版本加载,而在高本版浏览器可以不加载这段js，用户代码不修改直接可用
shim则是无论浏览器版本都要加载这段js，因为用的api是库定义的
