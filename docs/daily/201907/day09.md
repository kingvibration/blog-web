## [html] a标签下的href="javascript:void(0)"起到了什么作用？说说你对javascript:void(0)的理解？

* 在 ~~a标签的href属性中写入javascript: xxx，实际上就是点击后执行xxx语句，覆盖其默认点击行为；~~ 该理解有误，正确的作用如下：
> 当用户点击一个以 javascript: URI 时，它会执行URI中的代码，然后用返回的值替换页面内容，除非返回的值是undefined。void运算符可用于返回undefined。[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void#JavaScript_URIs)

* void关键字在js的含义为执行一个表达式，但不会返回任何值（即undefined）；因此void(0)语句相当于执行表达式0，然后不返回任何值；
* 综上，href="javascript:void(0)"的作用是点击链接后不发生任何行为，常用于阻止页面刷新或跳转；

参考文档：

[javascript:void(0)含义 | 菜鸟教程](https://www.runoob.com/js/js-void.html)

[a-HTML（超文本标记语言）| MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#%E6%97%A0%E9%9A%9C%E7%A2%8D%E5%BB%BA%E8%AE%AE)

[void运算符-JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void)

## [css] font-style的属性有Italic和oblique，两者有什么区别呢

italic和oblique都是向右倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果.

文字具有斜体,正常体的属性,但不是每种文字都具有斜体的属性,所以当希望这些没有倾斜属性的文字产生倾斜的效果,就要使用oblique的属性,使其文字倾斜,产生italic的效果


## [js] 请描述你对浏览器同源策略的理解

同源策略是指，某个页面上执行的 AJAX/Fetch 请求只能访问到同域名下的 URL。

协议，域名，端口一个不同就是跨域。

这是出于安全性考虑，然而在某些需要跨域的场景中，通过在服务端设置 CORS 响应头 Access-Control-Allow-Origin（允许的来源域名）、Access-Control-Allow-Method（允许的 HTTP Method）等，可以响应来自其他域的请求。

 
解决同源策略：
1. 代理转发
2. 服务端设置 Access-Control-allow-Origin Access-Control-Allow-Method

## [软技能] 刷新和强制刷新有什么区别？说说你对两者的理解

从 http 协议的角度来看

F5 和 Ctrl+R 都是普通刷新，若页面之前访问过，就会发一个空请求到服务器，服务器返回 304 ，表示资源未更新，可以使用浏览器缓存。

强制刷新 (ctrl+F5) 则不管浏览器是否缓存，都要重新去源站服务器请求资源，成功则返回 200。

可以使用 chrome 开发工具查看具体过程，大概是这样一个流程，实际讲起来更复杂。
