## [html] HTML5的video在有的移动端设备无法自动播放？怎么解决？

避免自动播放浪费流量，手机网页访问带有audio的页面不能自动播放。
一、利用微信的JSAPI的创建页面监听WeixinJSBridgeReady()是实现：
```html
<audio autoplay="autoplay" loop="loop" id="audios"> 
  <source src="music/bng.mp3" type="audio/mp3" /> 
</audio>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script> document.addEventListener('WeixinJSBridgeReady', function() { 
    document.getElementById('audios').play() 
})
</script>
```
二、添加控制属性（controls），让用户手动触发
```html
<audio autopaly ="autoplay" loop="loop" id="audios" controls="controls"> 
<source src=".mp3音乐路径" type="audio/mp3"/> 
<audio>
```
三、添加触摸监听，当用户打开浏览出，触摸屏幕事件来监听播放
```javascript
document.addEventLinstener('touchstart',function(){ 
    document.getEmlementById("audios").play()
})
```

## [css] css中的border:none和border:0px有什么区别？

在于浏览器解析与否

1. border为0的情况下虽然看不见,但是浏览器会对border进行渲染,还是占据内存的
而border为none时浏览器不会对其渲染,所以不会占据内存
2. border为none的兼容差 在老IE浏览器上还是会有边框
而border为0的时候是可以隐藏的

最简单的一个例子：
从border: 10px;过渡到border: none;，是不会有动画的；
从border: 10px;过渡到border: 0px;，是可以有动画的。


## [js] 用原生JS封装插件的方式有哪些？

一般的插件封装
```javascript
;(function (global) { 
  "use strict";
  function MyPlugin(el, options) {
    //some cod
  };
  MyPlugin.prototype = {
    //定义方法
    show: function () {
      //some code
    }
 };
  if (typeof module !== 'undefined' && module.exports) {    //兼容CommonJs规范 
    module.exports = MyPlugin;
  } else if (typeof define === 'function') {   //兼容AMD/CMD规范
    define(function () {
      return MyPlugin
    })
  } else {    //注册全局变量，兼容直接使用script标签引入插件
    global.MyPlugin = MyPlugin;
  }
})(this);
```

## [软技能] 如何让你做一个文件无刷新上传的功能，你有哪些方法可以做到？

* iframe + form表单 模拟无刷新上传
* ajax + FormData 局部刷新
