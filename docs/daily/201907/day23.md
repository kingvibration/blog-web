[html] 列举出你最常用的meta标签的写法和作用

* &lt;meta>用来描述网页的元信息；诸如字符编码，浏览器引擎编译，文档信息等等；

charset：声明当前文档的字符编码，用于浏览器解析文档；如：

`<meta charset="UTF-8">`

* name：声明当前文档的元信息；常用的有viewport，keywords，description等；

* viewport：文档视口设置，如初始视口大小（initial-scale），是否允许用户缩放（user-scalable）等；
keywords：网页的关键字，常用于搜索引擎对于该网页的搜索关键字；
description：网页的描述信息；
http-equiv：可以用来设定一些属性改变服务器或浏览器引擎对文档的编译行为；我只用过X-UA-Compatible这个属性，该属性只支持IE8+的浏览器，可以设定IE浏览器的渲染引擎；如：

> 告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面
> &lt;meta http-equiv="X-UA-Compatible" content="IE=edge">

注：http-equiv和name的属性，属性值通过<meta>标签的content属性来设置；

参考文档：

[&lt;meta> - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

[[FE] IE兼容性模式X-UA-Compatible - 简书](https://www.jianshu.com/p/11adc0ef158e)

[css] 移动端微信页面有哪些兼容性问题及解决方案是什么？

1. rem方案通过reset js进行适配
2. vw 方案 搭配px to viewport进行适配

[js] 说说你理解的同步和异步的区别是什么？

同步就是上一个任务结束下一个任务再开始，比如alert弹窗，你不点击确定他就会阻塞后边代码的执行；

异步就是按顺序开始（不可能同时开始）但是不一定按顺序结束，比如图片的加载就是走的异步。

[软技能] 不查资料，你会手写正则吗？

[JS正则表达式完整教程](https://juejin.im/post/5965943ff265da6c30653879)
