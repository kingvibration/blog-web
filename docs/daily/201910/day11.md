## [html] 你有用过HTML5的requestAnimationFrame吗？它运用的场景有哪些呢？

为什么要使用requestAnimation呢？
由于屏幕种类，分辨率，屏幕尺寸的不同，屏幕自动刷新的频率不同，使用requestAnimationFrame可以自动适配屏幕刷新频率。避免丢帧。

与setTimeout相比，requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机。除此以外，还可以节省CPU，函数节流。

## [css] 请举例说明css有哪些不可继承的属性？

1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during


## [js] 你知道什么是三元表达式吗？“三元” 表示什么意思？使用三元表达式应该注意些什么问题？

三元表达式：(expr1) ? (expr2) : (expr3)
使用三元表达式应避免三元表达式嵌套三元表达式。

避免嵌套三元表达式
首先容易出错，其次不符合编码规范，不利于他人阅读/理解。（代码不仅仅是写给机器跑的，还是写给人看的）

## [软技能] 当线上代码出现问题了，你该怎么排查呢？

由粗到细，确定出错的页面、模块、组件

1. 首先根据用户反馈或者监控信息确定故障上下文 & 复现路径；
2. 在线上页面中复现故障；
3. 定位出错位置，善用 chrome 提供的能力
  * 异常自动断点，快速定位异常代码位置image
  * 格式化 js 资源，便于阅读

  * 用 react dev tool 等插件，获取组件数据用于辅助定位问题
4. 拿到故障上下文后确定问题原因，决定修复策略。
