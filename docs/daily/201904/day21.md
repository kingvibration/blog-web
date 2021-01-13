
## [html] 谈谈你对input元素中readonly和disabled属性的理解

  readonly：把表单的属性设置为只读

  只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本，也可点击。

  readonly 属性可以防止用户对值进行修改，直到满足某些条件为止（比如选中了一个复选框）。然后，需要使用 JavaScript 消除 readonly 值，将输入字段切换到可编辑状态。

  disabled：禁用某个表单

  被禁用的 input 元素既不可用，也不可点击。可以设置 disabled 属性，直到满足某些其他的条件为止（比如选择了一个复选框等等）。然后，就需要通过 JavaScript 来删除 disabled 值，将 input 元素的值切换为可用。

  不同点

  生效范围不同

    readonly只对可输入的表单有效
    disabled对所有表单生效

  效果不同

    readonly设置只读，可以获取焦点
    disabled直接阻止表单的一切操作

  提交不同

    readonly可以正常提交
    disabled会忽略提交

## [css] 说说你对line-height是如何理解的？

  line-height 在日常用的最多的是让单行文字垂直居中（其实不需要设置 height，一个 line-height 即可）。
    因为 line-height - font-size 为行距，一般会近似平分到文字的上下两边，使文字看上去垂直居中。如果需要多行文字的垂直居中，还需要加上 vertical-align: middle;。

  line-height 可以不设置单位，表示 font-size 的倍数。

  另外对于非替换元素的纯内联元素，其高度是由 line-height 所决定的。

  参考文章：张鑫旭大神 《CSS 世界》<a href="https://juejin.im/post/5bf805fde51d453a68008e32" target="_blank">CSS 深入理解之 line-height</a>

## [js] 写一个方法验证是否为中文



## [软技能] 来说说你对重绘和重排的理解，以及如何优化？

  浏览器加载网页时会生成DOM树和CSSOM树

  重绘：
  当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。
  触发重绘的条件：改变元素外观属性。如：color，background-color，font-size(???)等。

  重排(回流)：
  当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。
  重绘和重排的关系：在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。
  所以，重排必定会引发重绘，但重绘不一定会引发重排。
  　　触发重排的条件：任何页面布局和几何属性的改变都会触发重排，
  比如：
  　　1、页面渲染初始化；(无法避免)
  　　2、添加或删除可见的DOM元素；
  　　3、元素位置的改变，或者使用动画；
  　　4、元素尺寸的改变——大小，外边距，边框；
  　　5、浏览器窗口尺寸的变化（resize事件发生时）；
  　　6、填充内容的改变，比如文本的改变或图片大小改变而引起的计算值宽度和高度的改变；
  触发重排的条件：改变元素的大小 位置 等如：width、height、pading、margin、position等，　添加删除DOM操作等
  重绘重排的代价：耗时，导致浏览器卡慢。

  优化
  1、浏览器自己的优化：浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。
  2、我们要注意的优化：我们要减少重绘和重排就是要减少对渲染树的操作，则我们可以合并多次的DOM和样式的修改。并减少对style样式的请求。
  （1）直接改变元素的className
  （2）display：none；先设置元素为display：none；然后进行页面布局等操作；设置完成后将元素设置为display：block；这样的话就只引发两次重绘和重排；
  （3）不要经常访问浏览器的flush队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流；
  （4）使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
  （5）将需要多次重排的元素，position属性设为absolute或fixed，元素脱离了文档流，它的变化不会影响到其他元素；
  （6）如果需要创建多个DOM节点，可以使用DocumentFragment创建完后一次性的加入document；

  <a href="https://juejin.im/post/5c87b54ce51d455f7943dddb" target="_blank">在掘金上看到一篇不错的文章</a>



  <form action="/pass" method="get">
    user：<input type="text" name="user" value="name" onclick="alert(0)">
    pass：<input type="password" name="pass" value="123" disabled onclick="alert(1)">
    addr：<input type="text" name="pass" value="杭州" readonly onclick="alert(2)">
    <input type="submit" value="提交">
  </form>

  <div style="height: 50px;line-height: 50px;border: 1px solid">单行文字</div>
  <div style="height: 200px;vertical-align: middle;border: 1px solid">多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字多行文字</div>
  <div style="height: 48px;line-height: 3;border: 1px solid">单行文字</div>
  <div style="height: 48px;line-height: 300%;border: 1px solid">单行文字</div>

```javascript
  //实现

  //使用的Unicode 编码 4e00 和 9fa5 分别表示第一个汉字和最后一个汉字的编码

  function isChinese(str) {
      const re = /^[\u4e00-\u9fa5]+$/;
      return re.test(str);
  }

```
