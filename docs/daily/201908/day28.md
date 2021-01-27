## [html] Web Worker线程的限制是什么？

（1）同源限制

分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

（2）DOM 限制

Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。

（3）通信联系

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

（4）脚本限制

Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

（5）文件限制

Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

## [css] transition、animation、transform三者有什么区别？

transition：可以用来设置一个过渡动画效果

`transition: margin-right 4s ease-in-out 1s;`

animation：css动画效果设置，可以通过指定不同的关键帧设置复杂的动画效果

`
animation:mymove 5s infinite;
@keyframes mymove
{
from {left:0px;}
to {left:200px;}
}
`
transform：css3新增的一个变形属性，可以对元素做2d或3d旋转，缩放，倾斜的效果

`transform:rotate(9deg) scale(0.5) ;`

## [js] 请写出如下代码运行的结果并解释为什么？[代码]

```javascript
 var type = 'images';
    var size = {width: 800, height: 600};
    var format = ['jpg', 'png'];

    function change(type, size, format){
        type = 'video';
        size = {width: 1024, height: 768};
        format.push('map');
    }

    change(type, size, format);

    console.log(type, size, format);
```

```
type = 'images';
size = {width: 800, height: 600};
format = ['jpg', 'png', 'map'];
```

format : push会改变原数组;
type, size : 函数内部（函数声明是一个独立的代码块）改变的只是函数的参数值，不会影响到外部声明的变量。

实际上就是函数形参的传递根据实参值的类型分为值复制（对应基本类型）和引用复制（对应引用类型）；

通过值复制的值无论怎么改变都不会影响原来的值（对应type变量的情况），而通过引用复制的值改变后原值也会改变（对应format变量的情况），但是直接改变引用本身并不会影响其他引用（即引用另一个引用类型的值时，原值的其他引用不会改变；对应size变量的情况）；

参考：《你不知道的JavaScript（中卷）2.5小节》

## [软技能] 你在工作中有用到过websocket吗？用它来解决什么问题？

只知道websocket是一种基于tcp的通信协议

实现了客户端和服务端的双向推送消息

不存在同源限制

在握手阶段会采用http协议，和http协议具有良好兼容性

也可以加上tls加密来实现更安全的传输


websocket 主要是实现双向实时通信。一般使用场景是需要实时通信，且有一定数据量的。比如一个简单的聊天等。但是像一些简单的其实没必要使用，ajax定时轮询也能解决。比如用户扫码登录页面。


