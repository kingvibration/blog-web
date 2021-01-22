## [html] HTML5标准提供了哪些新的API？你有用过哪些？

* 两个选择器API
```javascript
document.querySelector()
document.querySelectAll()
```
* 地理定位API
```javascript
getCurrrentPosition()
```
* 多媒体API
```html
<video></video>
<audio></audio>
```

* 拖放
```javascript
<div ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div draggable="true" ondragstart="drag(event)"></div>
```
* 文件
```javascript
window.requestFileSystem()
```
* XHR2
```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST", "@Url.Action("Upload")")
```

本地存储API

```javascript
localStorage
sessionStorage
canvas
```
```html
<canvas id="myCanvas" width="200" height="100">
```
svg

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
```

## [css] 当一个元素被设置为浮动后，它的display值变为什么呢？

一个元素被设为绝对定位或者浮动后，其display计算值就变为了block，尽管其表现形式和inline-block类似——包裹内部元素且不超出包含块的特性。按照如下方式在控制台尝试可验证：
```javascript
var span = document.createElement('span');
document.body.appendChild(span);
console.log('1.' + window.getComputedStyle(span).display);
span.style.float = 'left';
console.log('2.' + window.getComputedStyle(span).display);
// 输出：
// 1. inline
// 2. block
```


## [js] 分别写出数组的交集、并集、差集、补集这四个方法

```javascript
const intersect = (a, b) => a.filter(i => b.includes(i)) // 交
const exclude = (a, b) => a.filter(i => !b.includes(i)) // 差
const union = (a, b) => exclude(a, b).concat(b) // 并
const unionAll = (a, b) => a.concat(b) // 重复并
const xor = (a, b) => exclude(a, b).concat(exclude(b, a)) // 补
```
这几个方法全是 O(n2) 的复杂度…性能很差

1. 使用 filter、concat 来计算

```javascript
//交集
var c = a.filter(function(v){ return b.indexOf(v) > -1 });
//差集
var d = a.filter(function(v){ return b.indexOf(v) == -1 });
//补集
var e = a.filter(function(v){ return !(b.indexOf(v) > -1) }).concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}));
//并集
var f = a.concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}));
```

2. 对 Array 进行扩展

```javascript
//数组功能扩展
//数组迭代函数
Array.prototype.each = function(fn){
  fn = fn || Function.K;
   var a = [];
   var args = Array.prototype.slice.call(arguments, 1);
   for(var i = 0; i < this.length; i++){
       var res = fn.apply(this,[this[i],i].concat(args));
       if(res != null) a.push(res);
   }
   return a;
};

//数组是否包含指定元素
Array.prototype.contains = function(suArr){
  for(var i = 0; i < this.length; i ++){
      if(this[i] == suArr){
          return true;
      }
   }
   return false;
}

//不重复元素构成的数组
Array.prototype.uniquelize = function(){
   var ra = new Array();
   for(var i = 0; i < this.length; i ++){
      if(!ra.contains(this[i])){
          ra.push(this[i]);
      }
   }
   return ra;
};

//两个数组的交集
Array.intersect = function(a, b){
   return a.uniquelize().each(function(o){return b.contains(o) ? o : null});
};

//两个数组的差集
Array.minus = function(a, b){
   return a.uniquelize().each(function(o){return b.contains(o) ? null : o});
};

//两个数组的补集
Array.complement = function(a, b){
   return Array.minus(Array.union(a, b),Array.intersect(a, b));
};

//两个数组并集
Array.union = function(a, b){
   return a.concat(b).uniquelize();
};

/*使用*/
console.log("a与b的交集：", Array.intersect(a, b));
console.log("a与b的差集：", Array.minus(a, b));
console.log("a与b的补集：", Array.complement(a, b));
console.log("a与b的并集：", Array.union(a, b));
```

3. ES6
```javascript
var sa = new Set(a);
var sb = new Set(b);
// 交集
let intersect = a.filter(x => sb.has(x));
// 差集
let minus = a.filter(x => !sb.has(x));
// 补集
let complement = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];
// 并集
let unionSet = Array.from(new Set([...a, ...b]));
```

## [软技能] 你知道什么是图片防盗链吗？防盗链怎么实现呢？说说你的方法

盗链 是指在自己的页面上展示一些并不在自己服务器上的内容。通常的做法是通过技术手段获得它人服务器上的资源地址，绕过别人的资源展示页面，直接在自己的页面上向最终用户提供此内容。

防盗链 就是防止盗链。

在 http 协议中，如果从一个页面跳到另一个页面，header 字段里面会带个 Referer。图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链。
