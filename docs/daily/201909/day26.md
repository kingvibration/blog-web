## [html] xpath和dom有什么区别？

* xpath是一门在XML文档中查找信息的语言

* DOM是文档对象类型。
  * ---W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。
  W3C DOM 标准被分为 3 个不同的部分：

核心 DOM - 针对任何结构化文档的标准模型

XML DOM - 针对 XML 文档的标准模型

HTML DOM - 针对 HTML 文档的标准模型

## [css] position跟margin collapse这些特性相互叠加后会怎么样？

怎样防止外边距重叠？

底部元素脱离文档流(float: left/right || position: absolute/fixed)

## [js] 怎样在JavaScript中创建一个worker线程？

webworker基本流程，新建一个worker，然后postMessage来传递数据，onmessage接收数据并执行函数。

```javascript
var worker = new Worker('a.js');
worker.postMessage('Hello World');
worker.onmessage = function (e) {
  console.log(e.data);
}
```

## [软技能] 移动端的性能优化有哪些方法？

* 首屏加载和按需加载，非首屏内容滚屏加载，保证首屏内容最小化
* 模块化资源并行下载
* inline 首屏必备的 CSS 和 JavaScript
* meta dns prefetch 设置 DNS 预解析
```html
<!--cdn域名预解析-->
<meta http-equiv="x-dns-prefetch-control" content="on" >
<link rel="dns-prefetch" href="//cdn.domain.com" >
```
* 资源预加载:对于移动端首屏加载后可能会被使用的资源，需要在首屏完成加载后尽快进行加载，保证在用户需要浏览时已经加载完成
* 尝试使用 PWA 模式
* 图片压缩处理
* 使用较小的图片，合理使用 base64 内嵌图片
* 使用更高压缩比格式的图片：webp格式
* 图片懒加载
* 使用 iconfont 代替图片图标
