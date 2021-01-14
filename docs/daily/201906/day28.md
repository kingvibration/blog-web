## [html] favicon.ico有什么作用？怎么在页面中引用？常用尺寸有哪些？可以修改后缀名吗？
作用：favicon.ico 一般用于作为缩略的网站标志，它显示在浏览器的地址栏或者标签上。目前主要的浏览器都支持 favicon.ico 图标。

引用：```html <link rel="shortcut icon" href="favicon.ico"  type="image/x-icon"/> ```

尺寸： 16*16 32*32 48*48
## [css] 在实际编写css中你有遇到过哪些浏览器兼容性的问题？怎么解决的？

必用的三个工具

* PostCSS
* Autoprefixer
* Browserslist

## [js] 移动端点击事件为什么会有延迟？有哪些方法可以解决？
原因：等待300ms看用户是点击还是双击缩放，视口延迟判断，300ms之内会不会有下一次点击操作，如果有就是放大缩小，没有就是点击事件

解决办法：禁止缩放、设置默认视口宽度为设备宽度、设置css touch-action:none、fastclick.js

fastclick主要的原理就是，创建了一个div，并且执行了这个div的点击事件并且取消默认事件，再隐藏这个div

## [软技能] 说说你对RESTful的理解

RESTful是一套web api的风格（注意是风格而不是标准），为什么叫RESTful，分解开来就是

Representational State Transfer

显而易见，这套风格是面向资源的，所有的接口都是基于对资源进行描述，借助HTTP Methods（GET,PUT,DELETE,POST）表示资源回到客服端的转化动作

举例：对于文章的操作

|传统接口	|RESTful|操作
|:-|:-:|-:|
|GET  |getPost?id=1	|GET /post/1	|获取推文|
|POST |editPost	PUT |/post/1	    |修改推文|
|POST |deletePost	|DELETE /post/1	|删除推文|
|POST |addPost	    |POST post/	    |新增推文|
总结来说，RESTful是一种客户端与服务端交互时的WEB API的风格，面向资源，url不包含动词。
