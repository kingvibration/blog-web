<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <pre>
      [html] 请说说&lt;script>、&lt;script async>和&lt;script defer>的区别

        ◆&lt;script> : 加载的时候是同步的，会阻塞后面代码的执行，加载立即执行。
        ◆&lt;script async> : 异步加载，加载和执行是并行的。
        ◆&lt;script defer> : 异步加载，需等到所有文档加载完才执行。

        <img src="https://camo.githubusercontent.com/903dbf0e9568ec4e0cf441b1d004a9adbbbdc3af1a23442583ad695672476d9c/68747470733a2f2f692e737461636b2e696d6775722e636f6d2f77664c38322e706e67" width="500" alt="">

      [css] 在页面中的应该使用奇数还是偶数的字体？为什么呢？


        常用偶数号字体,但奇数号字体也没关系,例如 知乎正文使用15px字体,豆瓣电影使用13px字体
        UI设计师导出的设计稿一般都是偶数号字体
        偶数字号容易和页面其他标签的其他属性形成比例关系
        Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，
        而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀
        疏。(没试过)

      [js] 写一个判断设备来源的方法

        let ua = navigator.userAgent;
        // 移动端
        isMobile: ("ontouchstart" in window || navigator.msMaxTouchPoints) ? true : false,
        // 微信
        isWechat: /micromessenger/gi.test(ua),
        // qq
        isQQ: /qq/gi.test(ua),
        // VV音乐
        isvvmusic: /vvmusic/gi.test(ua),
        // 安卓
        isAndroid: /android/gi.test(ua),
        // iOS
        isIOS: /iphone|ipad|ipod|itouch/gi.test(ua), // IOS

      [软技能] 说说你工作中遇到过比较难的技术问题是什么？是如何解决的？

        这是在面试中经常被问到的一个问题，目的是查看面试者解决问题的能力。这里不做详细的某个技术难点来讲，因为可能你认为很难得问题，在别人那里根本不是事，就讲一下回答这个问题的思路吧。
        这里的问题代表某个bug或某个难搞的需求。

        回答思路：

        1.问题出现的背景，比如说：‘在使用Vue开发xxx功能时中遇到xxx...’
        2.问题出现的原因在哪里，如果定位到的。比如：'在使用xx调试发现的问题出现在xx..'
        3.查找问题解决方法，比如：‘在xx论坛看到解决方法，在某某交流群内提问，询问身边(网上)的技术大佬’
        4.问题解决后达到了什么效果，比如：‘加载速度提升了约4倍，受到领导同事的一致好评..’
        5.问题解决后有什么感悟或收获，比如：‘原来使用xx方法就能xx，记录到我的bug-log中..’

  </pre>
</body>

<script>

  //手写

  //实现

  const { navigator: { userAgent = '' } = {} } = window
  if (userAgent) {
      const platforms = [
          "Android",
          "iPhone",
          "SymbianOS",
          "Windows Phone",
          "iPad",
          "iPod"
      ].map(item => item.toLowerCase())
      console.log(platforms.find(item => userAgent.toLowerCase().indexOf(item) > -1))
  }



</script>
</html>
