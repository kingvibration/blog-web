<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] 解释下你对GBK和UTF-8的理解？并说说页面上产生乱码的可能原因

      gbk和utf8的理解

      我们这里将以最简单最容易理解的方式来描述GBK和UTF8的区别，以及它们分别是什么。

      GBK编码：是指中国的中文字符，其它它包含了简体中文与繁体中文字符，另外还有一种字符“gb2312”，这种字符仅能存储简体中文字符。

      UTF-8编码：它是一种全国家通过的一种编码，如果你的网站涉及到多个国家的语言，那么建议你选择UTF-8编码。

      GBK和UTF8有什么区别？
      UTF8编码格式很强大，支持所有国家的语言，正是因为它的强大，才会导致它占用的空间大小要比GBK大，对于网站打开速度而言，也是有一定影响的。

      GBK编码格式，它的功能少，仅限于中文字符，当然它所占用的空间大小会随着它的功能而减少，打开网页的速度比较快。

      产生乱码的原因
      html乱码原因与网页乱码解决方法： <a href="http://www.akhtm.com/manual/charset-error.htm" target="_blank">http://www.akhtm.com/manual/charset-error.htm</a>
      网页乱码的产生原因与解决：<a href="http://www.akhtm.com/manual/charset-error.htm" target="_blank">http://www.akhtm.com/manual/charset-error.htm</a>
      参考：
      让你彻底搞定各种编码来源ASCII、ANSI、GBK、unicode、UTF-8等https://blog.csdn.net/wskzgz/article/details/88710263
      web程序网页出现乱码的原因分析：https://blog.csdn.net/senlin1202/article/details/50800187


    [css] 说说你对z-index的理解

      z-index理解
      当网页上出现多个由绝对定位（position:absolute）或固定定位（position:fixed）所产生的浮动层时，必然就会产生一个问题，就是当这些层的位置产生重合时，谁在谁的上面呢？或者说谁看得见、谁看不见呢？这时候就可以通过设置z-index的值来解决，这个值较大的就在上面，较小的在下面。

      z-index的意思就是在z轴的顺序，如果说网页是由x轴和y轴所决定的一个平面，那么z轴就是垂直于屏幕的一条虚拟坐标轴，浮动层就在这个坐标轴上，那么它们的顺序号就决定了谁上谁下了。

      参考：
      关于z-index 那些你不知道的事：<a href="https://webdesign.tutsplus.com/zh-hans/articles/what-you-may-not-know-about-the-z-index-property--webdesign-16892" target="_blank">https://webdesign.tutsplus.com/zh-hans/articles/what-you-may-not-know-about-the-z-index-property--webdesign-16892</a>
      MDN[z-index]： <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index</a>


      <a href="zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/?shrink=1" target="_blank">张鑫旭也提出过一个“不二原则”，就是说除了弹窗这种布局元素外，其他的文档布局里面，z-index 最好不要超过2，超过了，就说明你的基本功不行。</a>

    [js] 说说bind、call、apply的区别？并手写实现一个bind的方法

      call和apply都是为了解决改变this的指向。作用都是相同的，只是传参的方式不同。

      除了第一个参数外，call可以接收一个参数列表，apply只接受一个参数数组。 bind绑定完之后返回一个新的函数，不执行。


    [软技能] 你对Git的branch及工作流的理解是什么？

    topic -> develop -> master / release


  </pre>
</body>

<script>

  //手写

  Function.prototype._bind = function (context, ...arg) {
    return () => {
        this.apply(context, arg)
    }
  }
  Function.prototype._apply = function(context, arr = []){
      context['fn'] = this;

      context['fn'](...arr)
  }

  let obj = {
      name: 'wangz',
      age: 18
  }
  let person = {
      name: 'haha',
      age: 20,
      getName : function () {
          console.log(this.name)
      }
  }

  person.getName.bind(obj)();
  person.getName._bind(obj)();
  person.getName._apply(obj);


  //实现

  Function.prototype.myCall = function (context = window) {
      context.fn = this;

      var args = [...arguments].slice(1);

      var result = context.fn(...args);
      // 执行完后干掉
      delete context.fn;
      return result;
  }

  Function.prototype.myApply = function (context = window) {
      context.fn = this;

      var result
      // 判断 arguments[1] 是不是 undefined
      if (arguments[1]) {
          result = context.fn(...arguments[1])
      } else {
          result = context.fn()
      }

      delete context.fn
      return result;
  }

  Function.prototype.myBind = function (context) {
      if (typeof this !== 'function') {
          throw new TypeError('Error')
      }
      var _this = this
      var args = [...arguments].slice(1)
      // 返回一个函数
      return function F() {
          // 因为返回了一个函数，我们可以 new F()，所以需要判断
          if (this instanceof F) {
              return new _this(...args, ...arguments)
          }
          return _this.apply(context, args.concat(...arguments))
      }
  }

</script>
</html>
