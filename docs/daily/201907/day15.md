## [html] 举例说明你对ol和ul标签的区别？它们的运用场景分别是什么呢？

ol 为有序列表，ul 为无需列表。浏览器默认会给这两个加上不同的样式。ol 的列表前会添加序号；而 ul 的列表前则是圆点。我们可以通过 list-style-type 来改变样式。

ol 和 ul 有语义上的区别，对于确实有顺序关系的我们应该使用 ul。

## [css] CSS的overflow属性定义溢出元素内容区的内容会如何处理呢

* visible（默认值）：溢出的内容会照常显示在元素内容区之外；
* hidden：溢出的内容会被裁剪；
* scroll：溢出的内容会出现在滚动区，通过滚动条滚动可以看到；
* auto：当内容溢出时表现同scroll；
参考文档：[overflow - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)

## [js] 写个方法随机打乱一个数组

```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5)
```
Fisher-Yates 洗牌随机数组排列
```javascript
 function shuffle (arr) {
   let l = arr.length
   while (l) {
         let index = Math.floor(Math.random() * l--);
         let cur = arr[l];
         arr[l] = arr[index];
         arr[index] = cur;
   }
   return arr
 }
 
 console.log(  shuffle(arr) )
 ```

## [软技能] 当项目准备上线前，你有做过哪些性能优化吗？

单页面应用首屏优化
1. 第三方包CDN
2. 路由懒加载,按需加载
