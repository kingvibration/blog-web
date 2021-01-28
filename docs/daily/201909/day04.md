## [html] form标签定义请求类型和请求地址分别是哪个属性？

请求类型：enctype
取值：
* application/x-www-form-urlencoded
* multipart/form-data
* text/plain

请求地址：
action
## [css] 说说你对字母"X"在CSS中有什么作用？

CSS 中 有个"x-height"属性，指的是小写x的高度 也就是等分线的距离

[张鑫旭: 字母’x’在CSS世界中的角色和故事](https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/)

## [js] 写一个洗扑克牌的方法

```javascript
let Shuffle = () =>  
    [...'A23456789JQK',10]
    .reduce( (arr, e) => arr.concat([`♥${e}`,`♠${e}`,`♣${e}`,`♦${e}`]), ['大🃏','小🃏'])
    .sort( () => Math.floor(Math.random()*2-Math.random()*2))
```
## [软技能] 你觉得你上家公司的前端开发流程有什么地方要优化的吗？怎么优化呢？

最明显的就是代码管理的工具和流程吧，上家公司用的代码管理工具是SVN，问题是有时候很容易冲突，人员对版本管理的理解程度不一。

建议采用Git分布式管理代码，选择GitFlow类似的流程来版本控制，给团队人员统一培训和制定执行规范，严格控制版本上线流程，降低发布事故。

Code Review 这个没有做.

代码测试.
