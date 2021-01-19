## [html] 简述下HTML的快捷键属性是哪个？并举例说明有什么用？

accesskey属性目前是h5标准中的一个全局快捷键访问属性，通过在任意元素上注入accesskey属性值，在浏览器中触发相应的快捷键，即可实现对相应元素的focus或click；

```html
<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/accesskey" target="_blank" accesskey="x">快捷键x：accesskey</a>
<div accesskey="z" onclick="this.style.color = 'red';">快捷键z：变红</div>
```
mac 快捷键： control + option + key

参考文档：

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/accesskey)

[HTML accesskey属性与web自定义键盘快捷访问 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2017/05/html-accesskey/)

推荐看下张鑫旭的那篇文章，文章中提出对accesskey属性的可用性优化的思考很值得借鉴。

## [css] 写例子说明如何强制（自动）中、英文换行与不换行

没记起来，看了网上的摘要：

1. word-break:break-all;只对英文起作用，以字母作为换行依据
2. word-wrap:break-word; 只对英文起作用，以单词作为换行依据
3. white-space:pre-wrap; 只对中文起作用，强制换行
4. white-space:nowrap; 强制不换行，都起作用
5. white-space:nowrap; overflow:hidden; text-overflow:ellipsis;不换行，超出部分隐藏且以省略号形式出现（部分浏览器支持）


## [js] 举例说明什么是decodeURI()和encodeURI()是什么？

**encodeURI()**：将 URI 中的每个字符编码为 1-4 个格式为 %xx 的转义序列（xx 为十六进制数），但不包括 ASCII 数字、字母、URL 分隔符（/、?、,、&、...）、以及其他部分 ASCII 字符。具体见 MDN。

Example: encodeURI('http://example.com/端点?键=值') => 'http://example.com/%E7%AB%AF%E7%82%B9?%E9%94%AE=%E5%80%BC'

**decodeURI()**：将已经编码的 URI 中的转义序列解码为它们表示的字符，但除了 encodeURI() 不会编码的字符。

**encodeURIComponent()**：用于编码 URI 中的组成部分。它除了转义 encodeURI() 指定的字符，还会转义 URL 分隔符（/、?、,、&、...）

Example: encodeURIComponent('测试/测试?测试=测试') => '%E6%B5%8B%E8%AF%95%2F%E6%B5%8B%E8%AF%95%3F%E6%B5%8B%E8%AF%95%3D%E6%B5%8B%E8%AF%95'

**decodeURIComponent()**：将已经编码的 URI 组成部分中的转义序列解码为它们表示的字符，但除了 encodeURIComponent() 不会编码的字符。


## [软技能] 你知道什么是websocket吗？它有什么应用场景？

相对于HTTP这种非持久的协议来说WebSocket是一个持久化的协议，允许服务端主动向客户端推送数据。

应用场景
1. 社交订阅
2. 多玩家游戏
3. 协同合作
4. 点击流数据
5. 股票基金等实时报价
6. 体育实况更新
7. 基于位置的应用
8. 在线教育
9. 多媒体聊天

[参考链接](https://blog.csdn.net/lldouble/article/details/80742082)
