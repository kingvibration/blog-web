## [html] 请说说Canvas和SVG图形的区别是什么？

区别：
* canvas发生任何变化都需要重新生成，不易修改。
* svg可为其中个别节点绑定事件。
* canvas有像素的概念，svg没有，不会失真。
* canvas是基于js绘制的，svg是基于xml进行定义的，因此svg有节点的概念，可对其中部分节点绑定事件。

## [css] 说说你对hasLayout的理解，触发hasLayout的方式有哪些？

hasLayout可理解为是IE7以及更旧版本的BFC。

跟BFC一样，hasLayout不能直接通过属性进行设置，而是需要一定的触发条件。具体条件可在进行向下兼容时再查阅相关资料，无需过多记忆。

[CSS魔法堂：hasLayout原来是这样!](https://www.cnblogs.com/fsjohnhuang/p/5291166.html)

## [js] 保护js代码的方式有哪些？分别说说他们的原理是什么？

压缩：
通过替换变量名等对代码进行压缩，但是不会改变代码结构。主要目的是压缩体积。

混淆：
降低代码的可读性，可以通过增加无用代码，删除注释缩进，对代码进行转义。

加密：
使用加密插件对代码进行可逆的加密操作，后续可通过使用密钥对密文进行解密。

## [软技能] 你有了解opengl吗？它有哪些作用？

OpenGL（英语：Open Graphics Library，译名：开放图形库或者“开放式图形库”）是用于渲染2D、3D矢量图形的跨语言、跨平台的应用程序编程接口（API），属于图形学内容。

WebGl 定义了一套API, 能够允许在网页中使用类似于Open GL，实际上是一套基于OpenGL ES 2.0的3d图形API。这些API是通过HTML 5的canvas标签来使用的。
