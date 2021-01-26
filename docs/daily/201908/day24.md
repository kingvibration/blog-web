## [html] 你知道什么是锚点吗？它的作用是什么？怎么创建一个锚点？

基于window对象，查找dom对应id的元素就是锚点。操作该元素组成的dom，用js改变视图层。在HTML中定义id，用document.queryselector找到该元素，既可以视作锚点。

```html
<a href="#ss">   ----->     name="ss" 的a标签
<a href="#ss">   ----->    id="ss" 的任意标签
```
## [css] 有用过scss和sass吗？说说它们之间的区别是什么？

sass和scss其实是一样的css预处理语言，其后缀名是分别为 .sass和.scss两种。

SASS版本3.0之前的后缀名为.sass，而版本3.0之后的后缀名.scss。

两者是有不同的，继sass之后scss的编写规范基本和css一致，sass时代是有严格的缩进规范并且没有‘{}’和‘；’。而scss则和css的规范是一致的。

## [js] 如何实现一个全屏的功能？

chrome下：
```javascript
// 针对某一元素进行全屏，其他元素都被屏蔽。有点类似聚焦的效果。
document.querySelector(".js-issue-title").requestFullscreen();
// 全屏聚焦document元素
document.documentElement.requestFullscreen();
```

生产环境：
不同浏览器的实现方案不同，没有形成统一的标准。可以交由专门的类库———— [screenFull](https://github.com/sindresorhus/screenfull.js)实现。

## [软技能] 说说你对重构的理解

换一种方式实现与原来相同的功能，从而改善系统代码质量，提高可重用性和可扩展性。

再次审视代码，可能之前写的代码有冗余，提取公共组件，精简代码，统一规范。
