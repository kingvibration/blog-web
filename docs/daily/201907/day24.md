## [html] HTML5的页面可见性（Page Visibility）有哪些应用场景？

 `document.visibilityState属性`
 
**产生的原因:**

1. 不能触发unload,pageHide事件的时候
手机端切换到最近任务界面,点击另一个APP,
2. 手机端直接按home键返回主屏幕;
3. PC端最小化,

**使用的场景:**

1. 停止与服务器的轮询
2. 停止页面音视频

属性值：字符串

  > hidden：页面彻底不可见。
  visible：页面至少一部分可见。
  
触发的事件:

```javascript
 document.onvisibilitychange
 document.addEventListener('visibilitychange',  ()=> {
  // 用户当前页面不可见（离开或者后端或者最小化，或者页签切换）
  if (document.visibilityState === 'hidden') {
    document.title = '页面不可见';
  }

  // 用户打开或回到页面
  if (document.visibilityState === 'visible') {
    document.title = '页面可见';
  }
});
```

**页面卸载：**

1. 页面可见时，用户强制关闭 Tab 页。
2. 页面可见时，（tab页签切换）。
3. 页面不可见时，用户或系统关闭浏览器窗口。

  hidden：页面彻底不可见。
  visible：页面至少一部分可见。
  
**用户正在离开页面。常用的方法是监听下面三个事件。**

  > 1. visibilitychange
    visibilitychange事件比pagehide、beforeunload、unload事件更可靠，所有情况下都会触发（从visible变为hidden）。因此，可以只监听这个事件，运行页面卸载时需要运行的代码，不用监听后面那三个事件。
  > 2. beforeunload
    事件只有一种适用场景，就是用户修改了表单，没有提交就离开当前页面，不会缓存当前页面
  > 3. unload
    unload事件在任何情况下都不必监听，不会缓存当前页面
  > 4. pagehide
  （大家可以补充一下，没有特别明显的定义）
  
**注意:**

1. document.visibilityState属性只针对顶层窗口，内嵌的iframe页面的document.visibilityState属性由顶层窗口决定。
2. 使用 CSS 属性隐藏iframe页面（比如display: none;），并不会影响内嵌页面的可见性。

参考链接:
[Page Visibility API 教程.](http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html)

## [css] 你对视网膜(Retina)分辨率有了解吗？有没有在实际中使用过？

Retina分辨率指的是屏幕的物理分辨率达到了使得人眼难以看到单个物理像素；

具体应用应该就是dpr > 1的屏幕适配，需要根据不同dpr给出合适尺寸的图片；

## [js] 不用第三方库，说说纯js怎么实现读取和导出excel？

目前只知道将后端给的二进制数据包装成Blob对象，然后进行导出；

```javascript
const blob = new Blob([res], { type: 'application/msexcel;charset=UTF-8' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.click()
```
提醒一下 Blob的浏览器支持 IE10+


## [软技能] 你有用过单例模式吗？主要运用场景有哪些？

一个类只能初始化一个实例， 例如jqeury的$，vuex里的store的实现都是单例模式。保证对象的唯一性

符合单一职责原则，只能实例化唯一的对象。
