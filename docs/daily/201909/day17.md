## [html] 不用h标签、css和js怎么实现多个字的字体连续放大的效果？

可以使用em单位实现相对于父级标签的字体放大或缩小(大于1即放大，小于1即缩小)

`<div style="font-size:16px;">parent<div style="font-size: 2em;">children</div></div>`

可以使用&lt;big>标签来不断的加大字体，但是这个标签现在已经被废弃使用了。



## [css] 如何做图片预览，如何放大一个图片？

图片不跨域的话用 canvas 来 drawImage 放大裁剪也可以。

图片放大可以用transform: scale(>1)属性



## [js] 如何实现锁定网页、密码解锁的效果？说说你的方法和步骤是什么？

监听用户鼠标移动事件，键盘按键事件。写一个定时器，开始计时，指定5分钟锁定的网页的时间。
若无操作，则隐藏当前页面，切换为输入密码页面。若有操作，则清空定时器，重新开始计时。

## [软技能] 请解释下你理解的并行和并发、同步和异步、阻塞和非阻塞之间有什么区别？
并发是一次处理很多事情。

并行是同时做很多事情。

同步轮询查询结果。

异步等有结果后会通知进而执行下一步。

阻塞等待结果的时候不能去处理别的。

非阻塞等待结果的时候能去处理别的。


并发并行是处理任务的方式。并发是在一个时间段可以处理多个任务，但是在相同的时间内只能处理一个任务。并行是同时可以处理多个任务。

同步异步是处理运行结果的方式，同步是在上一个返回结果还没返回的时候就不进行下一步的调用，异步是上一个结果还没返回就继续执行下一步，直到有返回结果了再调用对应的异步回调。

阻塞和非阻塞是运行时的状态。阻塞是在上一个任务还在执行时，下一个任务处于无法执行的状态，需要继续等待，直到上一个任务执行完毕。非阻塞就是任务的执行状态一直是上一个执行了，下一个就继续执行，没有多余的等待时间。
