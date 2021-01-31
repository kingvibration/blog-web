## [html] 说说你对small标签的认识，有哪些应用场景？

HTML 中的元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在HTML5中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/small)

## [css] 如何使用CSS的多列布局？

```css
div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
}
```
或者使用flex布局来实现多列布局

## [js] 说说CORS为何要区分预检请求和简单请求呢？

概述
当一个资源从与该资源本身所在的服务器不同的域、协议、端口请求一个资源时，资源会发起一个跨域 HTTP 请求。同源策略参考[浏览器的同源策略 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

出于安全原因，浏览器限制从脚本内发起的跨源HTTP请求，XMLHttpRequest和Fetch API，只能从加载应用程序的同一个域请求HTTP资源，除非使用CORS头文件

对于浏览器限制这个词，要着重解释一下：不一定是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了

CORS概述
跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。

另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），**浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。**

**服务器确认允许之后，才发起实际的 HTTP 请求**。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。
 
简单请求
不会触发CORS预检的请求称为简单请求，满足以下所有条件的才会被视为简单请求，基本上我们日常开发只会关注前面两点

1. 使用GET、POST、HEAD其中一种方法
2. 只使用了如下的安全首部字段，不得人为设置其他首部字段
    * Accept
    * Accept-Language
    * Content-Language
    * Content-Type 仅限以下三种
      * text/plain
      * multipart/form-data
      * application/x-www-form-urlencoded
    * HTML头部header field字段：DPR、Download、Save-Data、Viewport-Width、WIdth
3. 请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器；XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问
4. 请求中没有使用 ReadableStream 对象

预检请求
需预检的请求要求必须首先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响

下面的请求会触发预检请求，其实非简单请求之外的就会触发预检，就不用记那么多了

1. 使用了PUT、DELETE、CONNECT、OPTIONS、TRACE、PATCH方法
2. 人为设置了非规定内的其他首部字段，参考上面简单请求的安全字段集合，还要特别注意Content-Type的类型
3. XMLHttpRequestUpload 对象注册了任何事件监听器
4. 请求中使用了ReadableStream对象

以下是一个发起预检请求的例子
发起请求的origin与请求的服务器的host不同，而且根据上面的条件判断，触发了预检


请求附带身份凭证 -> cookies

如果发起请求时设置withCredentials 标志设置为 true，从而向服务器发送cookie， 但是如果服务器端的响应中未携带Access-Control-Allow-Credentials: true，浏览器将不会把响应内容返回给请求的发送者

对于附带身份凭证的请求，服务器不得设置 Access-Control-Allow-Origin 的值为*， 必须是某个具体的域名

注意，简单 GET 请求不会被预检；如果对此类带有身份凭证请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页


参考
[HTTP访问控制（CORS） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
[Server-Side Access Control | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Server-Side_Access_Control)
[Using CORS - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/cors/)
[浏览器的同源策略 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

## [软技能] 内存和缓存有什么区别？

凡是位于速度相差较大的两种硬件之间，用于协调两者数据传输速度差异的结构，均可称之为Cache。

内存：暂时存储程序和数据的地方。

一级缓存读取速度大概是内存的200倍
