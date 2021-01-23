## [html] 你知道富文本编辑器的实现原理吗？

总结一下技术难点：

* 原生 &lt;textarea> 没法显示带格式的文本；因此只能：
    * 堆 &lt;div> ；
    * 在点击输入框时，通过 HTMLElement.focus() 聚焦到到一个隐藏的 &lt;input> 上，通过监听 oninput 来获得用户输入。
* 存储格式，可以使用 json；
* 用户点击输入框的不同位置时通过 e.offsetX 与 e.offsetY 来实现定位光标。


1. contenteditable(HTML)属性：一个全局枚举属性，用于表示元素是否可编辑；该属性可被继承。
2. caret-color(CSS)属性：可设置编辑区域内的可插入光标的颜色；
3. Window.getSelection()方法：返回一个Selection对象，表示用户选择的文本范围或光标的当前位置；利用该方法可以对选中的文字进行样式设置，或在光标处插入内容等操作。

参考文档：

[Selection - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)

[contenteditable - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/contenteditable)

富文本编辑器基本上都是调用这个指令，完全不需要手动判断选中区域

`document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)`

比如

```javascript
document.execCommand('bold',false'); 
//切换选中区域的粗体样式
```

详情可参考 [execCommand](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)

## [css] 设置字体时为什么建议设置替换字体？

这是由于网站用户的浏览设备不同，可能并不支持或没有安装你所设置的字体。

这时候就会自动使用替换字体来对网页进行一个展示。

设置替换字体可以尽可能保证所有用户的浏览体验。

## [js] 如何终止WebWork？

```javascript
// 关闭worker
work.terminate()
```

[Web Worker 使用教程](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

## [软技能] 你有签过保密协议吗？说说你对保密协议的理解

有虽然会有，但是感觉软件层面上意义不大。毕竟设计思想、代码结构是跟着人走的。
