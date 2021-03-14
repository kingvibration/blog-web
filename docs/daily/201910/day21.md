## [html] png8和png24有什么区别呢？

1. png8和png24的根本区别，不是颜色位的区别，而是存储方式不同。 “PNG8”是指8位索引色位图，“PNG24”是24位索引色位图；
2. png8有1位的布尔透明通道（要么完全透明，要么完全不透明，不支持半透明），png24则有8位（256阶）的布尔透明通道（所谓半透明）。

切图时保存什么样的格式：
    
    1. 色彩丰富的、大的图片切成jpg的；
    2. 尺寸小的，色彩不丰富的和背景透明的切成gif或者png8的；
    3. 半透明的切成png24。

如何区别PNG8 & PNG24：

    1. 在ps里看图像—模式，png8当然只有8位/通道了。
    2. 当打开png8的图片时，ps会默认给它的图片标题上加上“索引”两字，png24的则没有。

## [css] 用css给一个元素加边框有哪些方法？

```css
:scope {
  border: 3px solid black;

  box-shadow: 0 0 0 1px black; /*不影响布局,无限叠加*/

  outline: 1px solid black; /*不支持圆角*/

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' stroke='%23000' fill='transparent'/%3E%3C/svg%3E");

  background-clip: content-box; /*形成透明边框*/
  padding: 1px;

  border-image: linear-gradient(red, black) 1;
  border: 1px solid;
}
```
## [js] stopPropagation()和preventDefault()这两个方法有什么区别？

stopPropagation 是阻止事件冒泡，即冒泡事件到当前元素处就终止了，不会继续向上级元素传递。

preventDefault 是阻止默认事件，例如：在 a 标签的 click 事件中执行了该方法，则不会进行默认的链接跳转。


## [软技能] 你有听说过“分词”吗？说说你对它的理解
中文分词在大数据横行的今天是越来越有用武之地了。它不仅被广泛用于专业的中文搜索引擎中，而且在关键词屏蔽、黑白名单以及文本相似度等方面也能大显身手。中文分词最简单也最常用的方式是基于字典查找的方式，通过遍历待分词字符串并在字典中进行查找匹配以达到分词的目的。本文即是采用这种方式。 

