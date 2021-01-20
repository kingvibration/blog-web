## [html] 什么是svg？说说svg有什么运用场景？

SVG是可缩放的矢量图形，是用XML来定义的图像。一个最基础的svg标签如下：

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300px" height="100px"  />
</svg>
```

经过缩放不会有失真的情况。

一般可以通过以下几种方式来使用：

```html
<img src="test.svg"> 兼容性差
<embed src="test.svg" type="image/svg+xml">
<iframe src="test.svg“> 不推荐
<object data="test.svg" type="image/svg+xml">

```

## [css] 说说你对设备像素比的理解

设备像素比(Device Pixel Ratio 简称：DPR)，是指物理像素和CSS像素的比例。

可以参考：[移动Web开发基础-Viewport](https://blog.csdn.net/u013778905/article/details/78073566)


## [js] 请详细描述AJAX的工作原理

AJAX是用于网页和服务器进行异步通信的技术。

基本原理是，通过XMLHttpRequest向服务器发送异步请求，获得服务器返回的数据，利用js更新页面。

其核心功能在于XMLHttpRequest对象。

创建一个ajax的步骤大致可以分为以下几步

* 创建XHMHttpRequest对象
* 打开链接 （指定请求类型，需要请求数据在服务器的地址，是否异步i请求）
* 向服务器发送请求（get类型直接发送请求，post类型需要设置请求头）
* 接收服务器的响应数据（需根据XMLHttpRequest的readyState属性判定调用哪个回调函数）
* 更新页面

## [软技能] 前端页面有哪三层构成？分别有什么作用？

三层即结构层、表示层、行为层。

结构层为页面的骨架，由 HTML 或 XHTML 标记语言创建，用于搭建文档的结构。

表示层为页面的样式，由 CSS （层叠样式表）负责创建，用于设置文档的呈现效果。

行为层为页面的行为，由 JavaScript 语言创建，用于实现文档的行为。

不过，在这三种技术之间存在着一些潜在的重叠区域，如：DOM 技术可以用来改变网页的结构。在 CSS 身上也可以找到这种技术相互重叠的例子。诸如 :hover 和 :focus 之类的预定义符号（伪 class 属性） 使我们可以根据用户触发事件来改变呈现效果。改变元素的呈现效果当然是表示层的“势力范围”，但对用户触发事件做出反应却是行为层的领地。表示层和行为层 的这种重叠形成了一个灰色地带。
