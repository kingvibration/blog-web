
## [html] 页面中怎么嵌入Flash？有哪些方法？写出来

  <object width="550" height="400">
    <param name="movie" value="somefilename.swf">
    <embed src="somefilename.swf" width="550" height="400"></embed>
  </object>

## [css] 说说你对媒体查询的理解

  媒体查询可不只是为了适应终端尺寸的，比如你做了一个网页看起来很漂亮，手机电脑平板都没啥大问题，但是如果你需要打印出来的时候，你会发现布局好像不是那么回事了，而且有时候你希望的是我打印的时候是不需要打印一些只需要体现在网页上的元素，这些media query都可以解决的，例如：

  @media print{
      .site-footer-credits{ display: none;}
      .noprint {display: none;}
      .page-header {text-align: left}
  }

  <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries</a>

## [js] 写一个使两个整数进行交换的方法（不能使用临时变量）

```javascript
  //手写
  let a = 1, b= 2
  [a, b] = [b, a]

  //实现

  // 利用运算符优先级和0*

  b = a + 0 * (a = b);

  // 利用执行顺序

  a = a + b;
  b = a - b;
  a = a - b;

  // 异或取值

  a ^= b;
  b ^= a;
  a ^= b;

```

## [软技能] 说说你对本项目的看法及建议

  提升很多，初级前端突破基础知识的瓶颈，应该能顺利进入到中级前端的水平，这个项目确实nice，但是希望能多一些分类，比如说webpack要快快上噢
