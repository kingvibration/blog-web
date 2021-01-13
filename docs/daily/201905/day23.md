<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] web workers有用过吗？能帮我们解决哪些问题？

      为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。

      提供协程能力，如果有一个比较密集的计算任务，可以放到另一个进程中处理，等处理好了再把结果传回主程，这样主要进程就不会阻塞，页面可以正常渲染和响应

      补充一点: 可充分利用多核的CPU


    [css] 怎么使用自定义字体？有什么注意事项？

      这个方案对西文比较友好，因为西文字体体积较小，而中文基本都是10mb以上的，极度不友好。
      故中文最好使用标准字体。或者根据用到的文字按需编写字库文件。

    [js] document的load 和ready有什么区别？

      主要执行顺序的区别，load：页面资源加载完成； ready：是dom加载完成。

      一般我们都在js脚本都写在onload 保证dom节点都能获取。但是有时只需要dom节点加载完成就执行代码，提前执行js脚本就可放到ready里面 jQuery也为此提供了onReady方法

      PS: 并没有 document.onload的写法。


    [软技能] 有用过本地存储吗？有什么限制？有没有考虑过超出了限制怎么办？

      特性	        cookie	        localStorage	        sessionStorage	indexDB
      数据生命周期	可以设置过期时间	  除非被清理，否则一直存在	页面关闭就清理	  除非被清理，否则一直存在
      数据存储大小	4k	            5M	                  5M            	不限
      与服务端通信	携带cookie	      不参与	                不参与	          不参与

      从上表可以看到，cookie 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 localStorage 和 sessionStorage 。对于不怎么改变的数据尽量使用 localStorage 存储，否则可以用 sessionStorage 存储。存储大量数据：IndexDB。

  </pre>
</body>

<script>

  //手写

  //实现

</script>
</html>
