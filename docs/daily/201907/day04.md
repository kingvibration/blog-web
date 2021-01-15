## [html] HTML5的应用程序缓存与浏览器缓存有什么不同？

应用程序缓存是 HTML5 的重要特性之一，提供了离线使用的功能，让应用程序可以获取本地的网站内容，例如 HTML、CSS、图片以及 JavaScript。这个特性可以提高网站性能，它的实现借助于 manifest 文件，与传统浏览器缓存相比，它不强制用户访问的网站内容被缓存

发现application cache这个标准居然被废弃了；被Service Workers标准给替代了；

参考文档：

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache)

[HTML5-离线缓存（Application Cache）](https://juejin.im/entry/5acde43bf265da2393776fc8)

## [css] 说说你对BEM规范的理解，同时举例说明常见的CSS规范有哪些？

BEM是比较好的CSS规范，应该也是得到大家认可最多的CSS规范

OAMC是WeUI根据BEM改造来的

object-area-meta-control

还有OOCSS，面向对象的CSS书写规范。

不管哪种，解决问题，同时团队大家共同维护遵守的，才是好的规范和执行。

BEM：block（块）、element（元素）、modifier（修饰符），一种命名约定，可以让代码更易理解
如：
```css
.card
.card__body
.card__button--primary
```


## [js] 举例说明什么是IIFEs？它有什么好处？

Instantly Invoked Function Expression 即时调用函数表达式

**示例**

```javascript
;(function () {
    // ... statements
    return 'xxx'
)()
```
最好在 IIFE 前追加分号 ; 来避免解析时与前一个表达式合并出现问题

**好处**

创建一个局部作用域隔离变量；但在 ES6 拥有了块级作用域后变得没有必要，可以用语句块 { ... } 配合 let/const 替代
将运行逻辑转化为可求值的表达式，弥补 JavaScript 基本逻辑语句不是表达式的缺陷
e.g.
```javascript
const a = (() => {
    if (xxx) return 1
    else return 0
})()
```
基本等价于
```javascript
let a
if (xxx) a = 1
else a = 0
```

## [软技能] 一个项目写很多的纯静态页面，有公共的部分（例如头和尾）你是怎么提取公用的？

1. 写成js,插入
2. 组件化开发

用 jsp 或 php 那样的 include 插入，但需要基于后端

首尾加载完成后 ajax 一个 html 文件 append 过来

用 node 起个服务，监听 koa-router 同样 include 插入，build 的时候可以前端完成
