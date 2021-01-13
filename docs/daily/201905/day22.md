<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>

    [html] From表单提交时为什么会刷新页面？怎么预防刷新？

      因为早期网页交互模型只能是浏览器提交数据给服务器，服务器做出响应重新返回一个页面，浏览器加载这个页面进行显示。早期前端没有编程式发送网络请求的 API，更没有前端路由管理的概念，所以表单提交跳转页面是广泛接受的方案。

      不想刷新可以使用 JS 拦截 form 的 onsubmit 事件，阻止掉浏览器的默认行为，然后用 ajax/fetch 和后台交互。另一个偏方是使用 iframe 作为 form 的 target，不过 JS 处理方面不如让浏览器别管自己全手动发请求来得简单。

    [css] 要是position跟display、overflow、float这些特性相互叠加后会怎么样？

    [js] 什么是事件委托？它有什么好处？能简单的写一个例子吗？

      事件委托
      即利用事件冒泡机制处理指定一个事件处理程序，来管理某一类型的所有事件

      事件委托的作用
      利用冒泡的原理，将事件加到父级身上，触发执行效果，这样只在内存中开辟一块空间，既节省资源又减少DOM操作，提高性能
      可以为动态添加的元素绑定事件
      js实现事件委托的三大步骤：
      第一步：给父元素绑定事件

      给元素ul添加绑定事件，通过addEventListener为父元素绑定事件

      第二步：监听子元素的冒泡事件

      这里默认是冒泡，点击子元素li会向上冒泡

      第三步：找到是哪个子元素的事件

      通过匿名回调函数的参数e用来接收事件对象，通过target获取触发事件的目标

      案例：ul中触发每个li来改变他们的背景颜色

    [软技能] 说说你对CDN的理解，使用过程中有没有遇到过问题？

      CDN，内容分发网络。
      具体来说，CDN就是采用更多的缓存服务器（CDN边缘节点），布放在用户访问相对集中的地区或网络中。当用户访问网站时，利用全局负载技术，将用户的访问指向距离最近的缓存服务器上，由缓存服务器响应用户请求。

      采用CDN技术，最大的好处，就是加速了网站的访问——用户与内容之间的物理距离缩短，用户的等待时间也得以缩短

      此外，CDN还有安全方面的好处。内容进行分发后，源服务器的IP被隐藏，受到攻击的概率会大幅下降。而且，当某个服务器故障时，系统会调用临近的健康服务器，进行服务，避免对用户造成影响。

      项目中使用过CDN，我们的图片和脚本都放在cdn上，这样用户访问这些资源会更快，因为这些资源在不同的域名下，会一定程度避免http1.1的队头堵塞。有的CDN采用http2，速度更快。

      有点不好就是：

      大部分CDN是单独收费的。
      CDN更新资源麻烦，可能需要手动来刷新CDN来刷新资源的缓存。
      如果CDN出了故障，需要联系CDN提供商来解决，中间增加了沟通耗时。
      可能对SEO有影响，CDN ip的多样性，部分ip可能对爬虫并不友好。



  </pre>
</body>

<script>

  //手写

  //实现

</script>
</html>