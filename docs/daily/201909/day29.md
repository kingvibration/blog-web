## [html] meta的属性有哪些组成？说说它们的分别有什么作用？

1. chartset='utf-8' 声明文档的字符编码
2. http-equiv="X-UA-Compatible" 文档兼容模式
3. name="viewport" content="width=device-width, initial-scale=1.0" 用户网页的可视区域

## [css] 会引起Reflow和Repaint的操作有哪些？

* 回流： 当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档
  * 页面首次渲染
  * 浏览器窗口大小发生改变
  * 元素尺寸或位置发生改变
  * 元素内容变化（文字数量或图片大小等等）
  * 元素字体大小变化
  * 添加或者删除可见的DOM元素
  * 激活CSS伪类（例如：:hover）
  * 查询某些属性或调用某些方法
* 重绘：当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它

## [js] 怎么下载一个zip文件？

1. 请求后台api，后台返回流文件
2. a标签download属性

## [软技能] 如何对前端资源进行优化？

前端资源包括：插件（css+js）、图片、SVG、字体、数据

网络方面：CDN、gzip、缓存；

代码方面：合包、压缩、拆包、defer；

数据方面：各种缓存策略；

图片方面：压缩、baseb4、精灵图、转 SVG、懒加载、缩略图、webp；

其他：统统都能压缩
