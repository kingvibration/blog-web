## [html] 页面布局中的结构与表现分离，那么什么是结构？什么是表现呢？

1. 结构，是由HTML或者XHTML之类的标记语言负责创建，标签对网页内容的语义含义做出了描述，如

    标签表达了这“这是一个文本段落”，但只是表达了其语义，并没有包含关于内容如何显示的信息。

2. 表现，是由CSS完成的。CSS描述页面内容应该如何呈现，比如我们可以定义这样一个CSS来声明：“文本段应该使用灰色的Arial字体和另外几张scan-serif字体来显示。”

## [css] 怎么自定义鼠标指针的图案？

`cursor: url() ,auto`

url是自定义光标图案的绝对路径，auto是默认光标，当我们自定义的光标不起作用时，就用默认光标代替。

## [js] 如何使用js来截图？怎样截可见区域和整个页面？

可以基于html2canvas 和 canvas2image 两个第三方类实现截图。

如果打算截取整个页面 可以直接设定

```javascript
html2canvas(document.body).then(function (canvas) {
  document.body.appendChild(canvas);
});
```

如果打算截取可见区域 额外设置一下宽高即可

```javascript
let a = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  y: document.documentElement.scrollTop
}
```

这种东西太hack了...browser 上搞纯属自虐

nodejs 可以考虑一系列 headless 库，例如 puppeteer 和 phantomjs
 
楼上说的对，但是更推荐用puppeteer，phantomjs已经停止维护了，在一些比较新的ES的语法上会出现一些问题

## [软技能] 对于前后端分离，你是怎么理解的？

后端只有 api 负责返回数据

展示方式由前端决定，和后端无关

基本上，前端能做的都交给前端

因此，耦合性很低，任何正确使用/实现 api 的前后端都可以随时替换

    前后端分离模式分化了开发职责，使得前后端开发人员能各司其职，降低了对单一开发人员的技术栈要求，加速项目迭代，但同时也增加了项目协调成本以及带来跨域等一系列技术问题。
    
