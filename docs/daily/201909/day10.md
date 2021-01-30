## [html] 本地存储的生命周期是什么？

* cookie: expire 和 max-age 都能控制数据的存储时间。expire 是一个绝对的过期时间，max-age 是文档被访问之后的存活时间（是相对时间）。默认是 session。
* sessionStorage: 当会话被关闭后（浏览器、标签页被关闭），就会被清除。与 localStorage 用法一样。
* localStorage: 除非被主动清除，不然永久储存在浏览器中。
* IndexedDB: 没有过期时间，除非主动清除。

## [css] 请问background-attachmentn属性有什么用途？

background-attachment: fixed / scroll / local： 设置背景图像是否固定或者随着页面的其余部分滚动。

* fixed: 背景图片不会随着页面的滚动而滚动。
* scroll: 背景图片随着页面的滚动而滚动，这是默认的。
* local: 背景图片会随着元素内容的滚动而滚动。
* inherit: 指定 background-attachment 的设置应该从父元素继承。

## [js] 阻止事件的默认行为有哪些？说说它们之间的区别是什么？

阻止冒泡event.stopPropagation,IE浏览器event.cancelBubble=true

阻止默认事件：return false; 使用addEventListener绑定事件时不能用return false

event.preventDefault IE9以下不兼容

event.returnValue = false; 兼容IE

## [软技能] 前端的性能统计有哪些指标？

首次渲染期间： 白屏、首屏、首次可交互时间、FMP(主要内容加载时间)、speed index(应该知道用户渲染分布区间)、自定义指标（mark & measure， 用于对性能做到更细力度的把控）
运行期间：主线程最大等待延时，long tasks，资源加载及ajax(分析哪些是应该采取缓存而没有的，哪些是应该压缩而未做的)

数据分析：

1. 性能分布区间， 这是提现站点性能的重要指标
2. 性能地区分布，有可能某些区域cdn失效？
3. 页面加载瀑布图， 助力我们对站点加载的全局了解及优化


白屏时间、首屏时间、用户可操作时间、总下载时间。

了解和合理运用 window.chrome 和 window.performance.timing 来进行获取。
